import React, { useState } from "react";
import "./Signup.css";
import logo from "./assets/logo.jpeg";
import SignupSlide from "./SignupSlide";

const Signup = () => {
  return (
    <div className="main-page">
      <div className="project-contents">
        <img src={logo} alt="Logo" />
        <h1>FIT Sphere</h1>
        <h3>Personalized Diet, Exercise and lifestyle guidance</h3>
      </div>
      <SignupSlide />
    </div>
  );
};

export default Signup;
