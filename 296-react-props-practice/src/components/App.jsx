import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Heading />
      
      <Avatar img="https://photosdp.com/wp-content/uploads/2024/05/42_anime-dp.jpg"/>

      <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> 
    </div>
  );
}

export default App;
