import React, { useState } from "react";

function App() {

const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
});
// const [lName, setLName] = useState("");

function handleChange(event) {
  // const value = event.target.value;
  // const name = event.target.name;

  const {value, name} = event.target;

  setFullName((prevValue) => {
    if (name === "fName") {
      return {
        fName: value,
        lName: prevValue.lName
      }
    } else if (name === "lName") {
      return {
        fName: prevValue.fName,
        lName: value
      }
    }
  })

    // if (name === "fName") {
    //   setFullName({fName: value});
    // } else if (name === "lName") {
    //   setFullName({lName: value});
    // }
}

// function updateFName(event) {
//   const firstName = event.target.value
//   setFullName(firstName);
// }

// function updateLName(event) {
//   const lastName = event.target.value 
//   setLName(lastName);
// }


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name"  value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
