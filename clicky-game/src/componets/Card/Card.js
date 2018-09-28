import React from "react";
import "./Card.css";

//discomposing the props 
const Card = ({id, name, image, handleClick}) => (
    <div className="card" name = {name} data-id = {id} onClick= {()=>handleClick()} >
    <div className="img-container">
      <img alt={name} src= {image}/>
    </div>
  </div>
);

export default Card;