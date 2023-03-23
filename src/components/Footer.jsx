import "./footer.css";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>7 Nurudeen Alowonle str.</p>
              <p>Ogun state</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>07065123456</p>
          </div>
          <div className="email">
            <p>osiephriejiro765@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <FaMailBulk
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <h2 style={{ color: "#fff", marginRight: "2rem" }}>
            About this page and me
          </h2>
          <h2 style={{ color: "#fff", marginRight: "2rem" }}>
            My name is Ejiro and i am the builder of this website, i have been
            into frontend fro 7 months , and i am a frontend developer.
          </h2>
          <FaFacebook
            size={20}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
