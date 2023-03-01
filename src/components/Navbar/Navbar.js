import "./navbar.css";
import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="home">
        <Link to={"/"}>Home</Link>
      </div>
      <nav className="menu-container">
        <Link to={"/addquestion"}>Add Question</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/"}>Sound On/Off</Link>
        <Link to={"/"}>FullScreen On/Off</Link>
      </nav>
    </div>
  );
};
