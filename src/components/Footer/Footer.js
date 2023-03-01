import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <h3>Contact</h3>
          <Link to={"https://www.linkedin.com/"}>Linkedin</Link>
          <Link to={"https://github.com/"}>GitHub</Link>
        </div>
        <div className="donate">
          <h3>Support Us!</h3>
          <Link to={"/"}>Donate</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
