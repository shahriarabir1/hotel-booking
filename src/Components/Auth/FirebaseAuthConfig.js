// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUofTMcZV5yYob9hXMQlC6Orjhg8K_U1w",
  authDomain: "hotel-booking-8d336.firebaseapp.com",
  databaseURL: "https://hotel-booking-8d336-default-rtdb.firebaseio.com",
  projectId: "hotel-booking-8d336",
  storageBucket: "hotel-booking-8d336.appspot.com",
  messagingSenderId: "812570579804",
  appId: "1:812570579804:web:8d24f21aee6a28b44f6799",
  measurementId: "G-8LJGHFYJVH",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
