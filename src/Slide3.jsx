import React from "react";
import "./Slide3.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Slide3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const request = new Request("https://example.org/post", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    navigate("/dashboard", { state: formData });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form className="third-section" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dietary-preference">Dietary Preferences</label>
        <select name="dietPref" id="dietary-preference" required>
          <option value="veg">Vegetetrian</option>
          <option value="vegan">Vegan</option>
          <option value="non-veg">Non-Vegeterian</option>
        </select>
      </div>

      <div>
        <label htmlFor="dietary-restrictions">Dietary Restriction</label>
        <select name="dietRes" id="dietary-restrictions">
          <option value="gluten-free">Gluten Free</option>
          <option value="lactose-free">Lactose Free</option>
          <option value="allergies">Allergies</option>
        </select>
      </div>

      <div className="health-condit">
        <label htmlFor="health">Health Condition </label>
        <input
          type="text"
          placeholder="Any health Conditions"
          id="health"
          name="healthCond"
          value={formData.healthCond}
          onChange={handleChange}
        />
      </div>

      <div className="email">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="pass">
        <label htmlFor="">Password </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className="third-sec-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Slide3;
