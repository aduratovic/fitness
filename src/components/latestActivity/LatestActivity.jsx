import "./latestActivity.css";
import axios from "../../util/axiosConfig";
import { useEffect, useState } from "react";

function LatestActivity({ setAddExercise, setCurrentWorkoutType }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [latestActivity, setLatestActivity] = useState({});

  useEffect(() => {
    const getLatestActivity = async () => {
      try {
        const res = await axios.get("exercises/latest/" + user._id);
        setLatestActivity(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLatestActivity();
  }, [user._id]);

  let fullDate;
  latestActivity.createdAt
    ? (fullDate = new Date(latestActivity.createdAt))
    : (fullDate = new Date());

  const date = fullDate.getDate();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const latestActivityDate = `${date}-${month}-${year}`;

  return (
    <div className="latest">
      <div className="name">Fitness Tracker</div>
      <div className="info">
        <span className="title">Last Workout</span>
        <div className="topInfo">
          <div className="infoItem">
            <span>Date:</span> {latestActivityDate}
          </div>
          <div className="infoItem">
            <span>Workout Type:</span> {latestActivity.type || "none"}
          </div>
          <div className="infoItem">
            <span>Total Exercise Performed:</span>{" "}
            {latestActivity.totalExersice || 0}
          </div>
          {latestActivity.type === "Cardio" ? (
            <div className="infoItem">
              <span>Total Workout Duration (in mins):</span>{" "}
              {latestActivity.duration || 0}
            </div>
          ) : (
            <>
              <div className="infoItem">
                <span>Total Weight Lifted (in KG):</span>{" "}
                {latestActivity.weights || 0}
              </div>
              <div className="infoItem">
                <span>Total Sets Performed:</span> {latestActivity.sets || 0}
              </div>
              <div className="infoItem">
                <span>Total Reps Performed:</span> {latestActivity.reps || 0}
              </div>
            </>
          )}
        </div>
        <div className="buttons">
          <button
            className="continue-workout-button"
            onClick={() => {
              setAddExercise(true);
              setCurrentWorkoutType(latestActivity.type);
            }}
          >
            Continue Workout
          </button>
          <button
            className="new-workout-button"
            onClick={() => {
              setAddExercise(true);
              setCurrentWorkoutType("");
            }}
          >
            New Workout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestActivity;
