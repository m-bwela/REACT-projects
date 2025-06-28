import React, { useState } from "react";

function App() {

const [headingText, setHeadingText] = useState("Hello");
const [onMouseOver, setOnMouseOver] = useState(false);

function mouseOver() {
  setOnMouseOver(true)
}

function mouseOut() {
  setOnMouseOver(false);
}

function handleClick() {
  setHeadingText("Submitted")
}


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{backgroundColor: onMouseOver ? "black" : "white"}} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
