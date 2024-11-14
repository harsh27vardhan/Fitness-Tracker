import { useState } from "react";
import "./App.css";
import FormSection from "./FormSection";
import logo from "./assets/logo.jpeg";

function App() {
  return (
    <div className="main-page">
      <div className="project-contents">
        <img src={logo} alt="Logo" />
        <h1>FIT Sphere</h1>
        <h3>Personalized Diet, Exercise and lifestyle guidance</h3>
      </div>
      <FormSection />
    </div>
  );
}

export default App;
