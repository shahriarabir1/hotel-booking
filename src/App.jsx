import React, { useEffect } from "react";
import MainBody from "./MainBody";
import { authCheck } from "./Components/Auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "./Redux/reducer";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authCheck(dispatch);
  }, []);

  return (
    <div>
      <MainBody />

      <Footer />
    </div>
  );
};

export default App;
