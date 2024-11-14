import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import "./FormSection.css";

const FormSection = () => {
  const [page, setPage] = useState("home");
  console.log(page);
  if (page === "login") {
    return <Login clasName="dynamic-page" />;
  } else if (page === "signup") {
    return <Signup clasName="dynamic-page" />;
  } else {
    return <Home clasName="dynamic-page" page={page} setPage={setPage} />;
  }
};

export default FormSection;
