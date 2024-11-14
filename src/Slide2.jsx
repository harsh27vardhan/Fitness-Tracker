import React from "react";
import "./Slide2.css";

const Slide2 = ({ slide, setSlide, formData, setFormData }) => {
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
    setSlide(3);
  };
  return (
    <form className="second-section" onSubmit={handleSubmit}>
      <div className="tg-wt">
        <label htmlFor="">Target Weight </label>
        <input
          type="number"
          id="targetweight"
          name="targetweight"
          value={formData.targetweight}
          onChange={handleChange}
          placeholder="Enter your Targeted Weight"
        />
      </div>
      <div className="timeline-goal">
        <label htmlFor="">Set your Goal Timeline </label>
        <input
          type="number"
          placeholder="Timeline for Goals"
          id="goaltime"
          name="goaltime"
          value={formData.goaltime}
          onChange={handleChange}
        />
      </div>
      <div className="activity-levels">
        <p>Please select your Activity Level:</p>
        {/* In the backend code, please make it sendatary by default by conditional rendoring. */}
        <div>
          <input
            type="radio"
            name="activitylevel"
            id="sedentary"
            value="sedentary"
            onChange={handleChange}
          />
          <label for="sedentary">Sedentary : Little or No exercise</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            name="activitylevel"
            id="light"
            value="light"
            onChange={handleChange}
          />
          <label for="light">
            Light Active : Light Exercise/ Sports 1-3 days a Week
          </label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            name="activitylevel"
            id="moderate"
            value="moderate"
            onChange={handleChange}
          />
          <label for="moderate">
            Moderate Active : Moderate Exercise/ Sports 3-5 days a Week
          </label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            name="activitylevel"
            id="active"
            value="active"
            onChange={handleChange}
          />
          <label for="active">
            Active : Hard Exercise/ Sports 6-7 days a Week
          </label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            name="activitylevel"
            id="super-active"
            value="super-active"
            onChange={handleChange}
          />
          <label for="super-active">
            Super Active : Very hard Exercise or Intense Exercise
          </label>
        </div>
        <br></br>
      </div>

      <button className="second-sec-submit" type="submit">
        Next
      </button>
    </form>
  );
};

export default Slide2;
