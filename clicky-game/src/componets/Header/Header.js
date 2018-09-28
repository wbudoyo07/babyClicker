import React from "react";
import "./Header.css";

const Header = ({ currentScore, highScore }) => (

<div className = "jumbotron">
  <h1 className = "display-4">Click Game! </h1>
  <p className = "lead"> Click on an image to earn points, but don't click on any more than once</p>
  <div className ="score"> 
  <span>Score : { currentScore }</span> <span> High Score : { highScore }</span>
  </div>
</div>

);

export default Header;