import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Booking from "./Components/Booking";
import SignUp from "./Components/SignUp";
import Header from "./Components/Header/Header";
import CartFinal from "./Components/Body/Cart/CartFinal";

import { useNavigate } from "react-router-dom";
import Confirm from "./Components/Body/Cart/Confirm";
const MainBody = () => {
  const token = localStorage.getItem("token");
  let route = null;
  const navigate = useNavigate();
  if (token === null) {
    route = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp navigate={navigate} />} />
        <Route path="/login" element={<SignUp mode={"Log In"} />} />
        <Route path="/cart" element={<Navigate to="/signup" />} />
      </Routes>
    );
  } else {
    route = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Navigate to="/" />} />
        <Route path="/cart" element={<CartFinal />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    );
  }
  return (
    <div>
      <Header />
      <div>{route}</div>
    </div>
  );
};

export default MainBody;
