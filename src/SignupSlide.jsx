import React, { useState } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const SignupSlide = () => {
  const [slide, setSlide] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    gender: "male",
    fitnessGoal: "muscle-gain",
    targetweight: null,
    goaltime: null,
    activitylevel: "sedentary",
    dietPref: null,
    dietRes: null,
    healthCond: null,
    email: null,
    password: null,
  });
  return slide === 1 ? (
    <Slide1
      slide={slide}
      setSlide={setSlide}
      formData={formData}
      setFormData={setFormData}
    />
  ) : slide === 2 ? (
    <Slide2
      slide={slide}
      setSlide={setSlide}
      formData={formData}
      setFormData={setFormData}
    />
  ) : (
    <Slide3
      slide={slide}
      setSlide={setSlide}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default SignupSlide;
