import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  function clickHandler() {
    setClick(!click);
  }
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      (
      <ul className={click ? "navlinks active" : "navlinks"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      )
      <div className="hamburger">
        {click === false ? (
          <FaBars onClick={clickHandler} size={20} style={{ color: "white" }} />
        ) : null}
        {click ? (
          <FaTimes
            onClick={clickHandler}
            size={20}
            style={{ color: "white" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
