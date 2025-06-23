import React, { useState } from "react";

function App() {
setInterval(timeClick, 1000);

const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
// const [day, setDay] = useState(new Date().getDay());

function timeClick() {
  const newTime = new Date().toLocaleTimeString("en-GB");
  setTime(newTime);
}

// function newDay() {
//   const currentDay = new Date().getDay();
//   setDay(currentDay);
// }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timeClick}>Get Time</button>
    </div>
  );
}

export default App;
