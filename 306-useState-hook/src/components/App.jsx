import React, { useState } from "react";


function App() {
const [count, setCount] = useState(0);    /*or React.useState();*/

// const [red, green, blue] = [9, 132, 227]

// console.log(green)


function increase() {
  setCount(count + 1);
    // count++;
}

function decrease() {
  setCount(count - 1);
}

return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
       <button onClick={increase}>+</button>
    </div>
)
}


export default App;
