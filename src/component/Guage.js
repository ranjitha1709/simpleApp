import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Gauge = () => {
  return (
    <div className="gauge">
      <CircularProgressbar
        value={75} 
        text={`${25}%`}
        styles={buildStyles({
          textSize: "16px",
          textColor: "#007bff",
          pathColor: "#007bff",
          trailColor: "#f2f2f2",
        })}
      />
    </div>
  );
};

export default Gauge;
