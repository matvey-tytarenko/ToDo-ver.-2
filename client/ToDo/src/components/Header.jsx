import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <ul className="menu">
        <li className="main">
          <Link to="/">To Do</Link>
        </li>
        <li className="register">
          <Link to="/register">Create Account</Link>
        </li>
        <li className="login">
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
