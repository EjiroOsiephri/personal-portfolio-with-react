import "./Hero.css";
import IntroBg from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bg-img" src={IntroBg} alt="" />
      </div>
      <div className="content">
        <p>
          HEY GUYS, MY NAME IS EJIRO <br /> AND I'M A
        </p>
        <h1>Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
