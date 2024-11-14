import React, { useState } from "react";
import "./Slide1.css";

const Slide1 = ({ slide, setSlide, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setSlide(2);
  };
  return (
    <form className="first-section" onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="age">
        <label htmlFor="age">Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          placeholder="Enter your Age"
          required
        />
      </div>
      <div className="weight">
        <label htmlFor="wight">Weight </label>
        <input
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          type="number"
          placeholder="Enter your Weight"
          required
        />
      </div>
      <div
        className="gender-cont"
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={{
            fontSize: "1rem",
          }}
        >
          <option
            value="male"
            style={{
              fontSize: "1rem",
              border: "none",
            }}
          >
            Male
          </option>
          <option
            value="female"
            style={{
              fontSize: "1rem",
              border: "none",
            }}
          >
            Female
          </option>
        </select>
      </div>
      <div className="fitness-goals">
        <label htmlFor="fitness-goal">Fitness Goal : </label>
        <select
          name="fitnessGoal"
          id="fitness-goal"
          value={formData.fitnessGoal}
          onChange={handleChange}
          required
        >
          <option value="muscle-gain">Muscle Gain</option>
          <option value="toning">Toning</option>
          <option value="general-fitness">General Fitness</option>
        </select>
      </div>
      <button className="first-sec-submit" type="submit">
        Next
      </button>
    </form>
  );
};

export default Slide1;
