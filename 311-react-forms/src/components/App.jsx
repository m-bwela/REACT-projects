import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [onMouseOver, setOnMouseOver] = useState(false);
  const [headingName, setHeadingName] = useState("");

  function mouseOut() {
    setOnMouseOver(false);
  }

  function mouseOver() {
    setOnMouseOver(true);
  }

  function handleClick(event) {
    setHeadingName(name);
     event.preventDefault();
    // console.log("Submitted")
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  return (
    <div className="container">
      <h1>Hello {headingName}</h1>
      <form onSubmit={handleClick}>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
      <button
      type="submit"
      onMouseOut={mouseOut}
      onMouseOver={mouseOver}
      style={{backgroundColor: onMouseOver ? "black" : "white"}} 
      // onClick={handleClick}
      >Submit</button>
      </form>
    </div>
  );
}

export default App;
