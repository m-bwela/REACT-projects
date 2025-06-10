import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
    return <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
       <Paragraph phone={props.phone} email={props.email}/>
      </div>
}

export default Card;