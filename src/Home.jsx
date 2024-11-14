import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ page, setPage }) => {
  return (
    <div className="home-section">
      <button onClick={() => setPage("login")}>Login</button>
      <Link to="/signup">
        <button onClick={() => setPage("signup")}>Signup</button>
      </Link>
    </div>
  );
};

export default Home;
