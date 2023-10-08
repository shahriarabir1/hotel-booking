import firebase from "./FirebaseAuthConfig";

import { clearAuthData, setAuthData } from "../../Redux/reducer";
import { useNavigate } from "react-router-dom";

// const authentic2 = async (email, password, mode) => {
//   let user;
//   try {
//     if (mode === "Sign Up") {
//       user = await firebase
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//       if (user) {
//         alert("Register Succesful");
//       }
//       token = await user.user.getIdToken();
//       uid = user.user.uid;
//       localStorage.setItem("token", token);
//       localStorage.setItem("userId", uid);
//       localStorage.setItem("userId", uid);
//       console.log(user.user);
//     } else {
//       user = await firebase.auth().signInWithEmailAndPassword(email, password);
//       if (user) {
//         alert("Log In");
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const authentic = (email, password, mode, dispatch) => {
  let user;

  if (mode === "Sign Up") {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        user = res;
        return user.user.getIdToken();
      })
      .then((token) => {
        const uid = user.user.uid;
        localStorage.setItem("token", token);
        localStorage.setItem("uid", uid);
        dispatch(setAuthData({ token: token, uid: uid }));
        return user.user.getIdTokenResult();
      })
      .then((tokenResult) => {
        const time = tokenResult.expirationTime;
        const expire = new Date(time);
        localStorage.setItem("expireTime", expire);
      })

      .catch((err) => console.log(err));
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        user = res;

        return user.user.getIdToken();
      })
      .then((token) => {
        const uid = user.user.uid;
        localStorage.setItem("token", token);
        localStorage.setItem("uid", uid);
        dispatch(setAuthData({ token: token, uid: uid }));
        return user.user.getIdTokenResult();
      })
      .then((tokenResult) => {
        const time = tokenResult.expirationTime;
        const expire = new Date(time);
        localStorage.setItem("expireTime", expire);
        if (user) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }
};
export const logout = (navigate) => {
  localStorage.clear();
  navigate("/");
};
export const authCheck = (dispatch) => {
  const token = localStorage.getItem("token");
  const expire = new Date(localStorage.getItem("expireTime"));
  if (!token) {
    localStorage.clear();
    dispatch(clearAuthData());
  } else {
    if (expire >= new Date()) {
      const uid = localStorage.getItem("uid");
      dispatch(setAuthData({ token: token, uid: uid }));
    } else {
      localStorage.clear();
      dispatch(clearAuthData());
    }
  }
};

export default authentic;
