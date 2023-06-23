import "../styles/App.css";
import React, { useState, useEffect } from "react";
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeComponent = (timeComponent) => {
    return timeComponent.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  return (
    <>
      <div className="clock">
        <div className="timeclock">
          <div className="time hr">{formatTimeComponent(time.getHours())}:</div>
          <div className="time min">
            {formatTimeComponent(time.getMinutes())}:
          </div>
          <div className="time sec">
            {formatTimeComponent(time.getSeconds())}
          </div>
        </div>
        <div className="Heading">To-Do-App</div>
      </div>
    </>
  );
}

export default Clock;
