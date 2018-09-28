import React from "react";
import "./Header.css";

const Header = ({ currentScore }) => (

<div className = "jumbotron">
  <h1 className = "display-4">Hello, world!</h1>
  <p className = "lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className = "my-4"/>
  <span>Score : { currentScore }</span>
</div>

);

export default Header;