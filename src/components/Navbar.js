import React from "react";

const Navbar = props => (
  <nav className=" row navbar navbar-expand-lg navbar-light bg-light">
    <a className="col-4 navbar-brand text-center" href="/">
      Clicky Game
    </a>
    <div className="col-4 navbar-brand text-center">
      <span>{props.message}</span>
    </div>
    <div className="col-4 navbar-brand text-center">
      <span>Score: {props.currentScore}  |  High Score: {props.highScore}</span>
    </div>
  </nav>
);

export default Navbar;
