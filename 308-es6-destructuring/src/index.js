//import animals /*{ useAnimals }*/ from "./data";

//Destructuring Arrays
 //console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

//Destructuring Objects
// const {name: catName, sound: catSound} = cat;    /*or cat.name and cat.sound*/
// console.log(catSound);
/*alternatively for changing names
const { name: catName, sound: catSound } */
//const {name, sound, feedingRequirements: {food, water} } = cat;
//console.log(food);

// const [cat, dog] = animals;
// console.log(useAnimals(cat));
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";


const [honda, tesla] = cars;
console.log(honda);

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;



const domNode = document.getElementById("root");
const root = createRoot(domNode).render(
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
