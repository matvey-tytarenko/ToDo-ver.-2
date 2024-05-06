import React from 'react'
import { Link } from "react-router-dom";
import "../styles/header.scss"

function Header2() {
  return (
    <header>
      <ul className="menu">
        <li className="main">
          <Link to="/">To Do</Link>
        </li>
        <li className="office">
          <Link to="/office">Private Office</Link>
        </li>
        <li className="profile">
          <i className="fas fa-user"></i>
        </li>
      </ul>
    </header>
  );
}

export default Header2