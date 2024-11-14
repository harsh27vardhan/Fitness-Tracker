import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: null,
    password: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fitnessbackend-1-0cjt.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginDetails),
        }
      );
      let data = await response.json();
      console.log(data);
      if (data.message === "Login successful") {
        console.log("gdfg");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label className="login-text"> Log In</label>
      <div className="login-inps">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>
      <button className="login-submit-btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
