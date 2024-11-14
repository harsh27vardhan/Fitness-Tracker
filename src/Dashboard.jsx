// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./Dashboard.css";
// import res from "./train.js";
// import morning from "./assets/morning.jpg";
// import hydra from "./assets/hydration.svg";
// import stretching from "./assets/stretching.svg";
// import logo from "./assets/logo.jpeg";

// const Dashboard = () => {
//   const location = useLocation();
//   const formData = location.state;
//   // console.log(res);
//   const now = new Date();
//   let dur = now.getHours() <= 11 ? "morning_routine" : "evening_routine";
//   console.log(dur);

//   return (
//     <>
//       <div className="header">
//         <img src={logo} alt="" />
//         <h2>Hii, {formData.name}</h2>
//       </div>
//       <div className="dashboard">
//         <h1>Dashboard</h1>
//         <div className="upper-cont">
//           <div className="upper-dur" style={{ backgroundImage: { morning } }}>
//             <strong>
//               {dur === "morning_routine"
//                 ? "Morning Routine"
//                 : "Evening Routine"}
//             </strong>
//             <div className="upper-img-cont">
//               <img src={hydra} alt="" />
//               <u>Hydration</u> {res[dur].hydration}
//             </div>
//             <div className="upper-img-cont">
//               <img src={stretching} alt="" />
//               <u>Stretching and Breathing</u>{" "}
//               {res[dur].stretching_and_breathing}
//             </div>
//             <div>
//               <u>Optional</u> {res[dur].optional}
//             </div>
//           </div>
//           <div className="tips">
//             <strong className="tips-text">Additional Tips</strong>
//             <div>Eating Process : {res.additional_tips.mindful_eating}</div>
//             <div>Stress Mgt. : {res.additional_tips.stress_management}</div>
//             <div>Consistency : {res.additional_tips.consistency}</div>
//           </div>
//         </div>
//         <div className="second-cont">
//           <div className="meals">
//             <strong>Complete Day Meals</strong>
//             {Object.entries(res.meals).map(([mealKey, meal]) => (
//               <div key={mealKey} className="meal">
//                 <p>{meal.time}</p>
//                 {meal.foods.map((item, index) => (
//                   <div key={index}>
//                     <p>{item.item}</p>
//                     <p>Calories : {item.calories}</p>
//                     <p>Protein : {item.macronutrients.protein}</p>
//                     <p>Carbs : {item.macronutrients.carbs}</p>
//                     <p>Fat : {item.macronutrients.fat}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div className="exercise">
//             <strong>Exercise</strong>
//             <div> Step Goal : {res.exercise_plan.steps_goal}</div>
//             <div>
//               Cardio :
//               <div>
//                 Activity : {res.exercise_plan.workout_routine.cardio.activity}
//               </div>
//               <div>
//                 Duration : {res.exercise_plan.workout_routine.cardio.duration}
//               </div>
//             </div>
//             {res.exercise_plan.workout_routine.strength_training.map((item) => {
//               return (
//                 <div>
//                   <div>Exercise : {item.exercise}</div>
//                   <div>Sets : {item.sets}</div>
//                   <div>Reps : {item.reps}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="third-cont">
//           <div className="sleep">
//             <strong>Sleep Cycle</strong>
//             <div>Recommended Hours : {res.sleep.recommended_hours}</div>
//             <div>Environment : {res.sleep.environment}</div>
//           </div>
//           <div className="hydration">
//             <strong>Hydration Target</strong>
//             <div>Daily Target : {res.hydration.daily_target}</div>
//             <div>Extra Tip : {res.hydration.tip}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import res from "./train.js";
import morning from "./assets/morning.jpg";
import evening from "./assets/evening.avif";
import hydra from "./assets/hydration.svg";
import stretching from "./assets/stretching.svg";
import logo from "./assets/logo.jpeg";
import { useState } from "react";

const Dashboard = () => {
  const location = useLocation();
  const formData = location.state;
  const now = new Date();
  const dur = now.getHours() <= 11 ? "morning_routine" : "evening_routine";
  const backgroundImg = dur === "morning_routine" ? morning : evening;

  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" />
        <h2>Hello, {formData.name}</h2>
      </div>
      <div className="dashboard">
        <h1 className="dashboard-title">Your Fitness Dashboard</h1>
        <div className="upper-cont">
          <div
            className="upper-dur"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <strong>
              {dur === "morning_routine"
                ? "Morning Routine"
                : "Evening Routine"}
            </strong>
            <div className="upper-img-cont">
              <img src={hydra} alt="Hydration" />
              <u>Hydration</u> {res[dur].hydration}
            </div>
            <div className="upper-img-cont">
              <img src={stretching} alt="Stretching" />
              <u>Stretching & Breathing</u> {res[dur].stretching_and_breathing}
            </div>
            <div>
              <u>Optional</u> {res[dur].optional}
            </div>
          </div>
          <div className="tips">
            <strong>Additional Tips</strong>
            <div>Eating Process: {res.additional_tips.mindful_eating}</div>
            <div>
              Stress Management: {res.additional_tips.stress_management}
            </div>
            <div>Consistency: {res.additional_tips.consistency}</div>
          </div>
        </div>
        <div className="second-cont">
          <div className="meals">
            <strong>Complete Day Meals</strong>
            {Object.entries(res.meals).map(([mealKey, meal]) => (
              <div key={mealKey} className="meal">
                <p>{meal.time}</p>
                {meal.foods.map((item, index) => (
                  <div key={index}>
                    <p>{item.item}</p>
                    <p>Calories : {item.calories}</p>
                    <p>Protein : {item.macronutrients.protein}</p>
                    <p>Carbs : {item.macronutrients.carbs}</p>
                    <p>Fat : {item.macronutrients.fat}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="exercise">
            <strong>Exercise</strong>
            <div> Step Goal : {res.exercise_plan.steps_goal}</div>
            <div>
              Cardio :
              <div>
                Activity : {res.exercise_plan.workout_routine.cardio.activity}
              </div>
              <div>
                Duration : {res.exercise_plan.workout_routine.cardio.duration}
              </div>
            </div>
            {res.exercise_plan.workout_routine.strength_training.map((item) => {
              return (
                <div>
                  <div>Exercise : {item.exercise}</div>
                  <div>Sets : {item.sets}</div>
                  <div>Reps : {item.reps}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="third-cont">
          <div className="sleep">
            <strong>Sleep Cycle</strong>
            <div>Recommended Hours : {res.sleep.recommended_hours}</div>
            <div>Environment : {res.sleep.environment}</div>
          </div>
          <div className="hydration">
            <strong>Hydration Target</strong>
            <div>Daily Target : {res.hydration.daily_target}</div>
            <div>Extra Tip : {res.hydration.tip}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
