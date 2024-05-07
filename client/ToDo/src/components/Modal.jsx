// Modal.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/modal.scss";

function Modal({ user, logout }) {
  return (
    <div className="modal">
      <ul className="dropdown_menu">
        <li>
          <Link to="/office">My Office</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <div className="under"></div>
        <li>
          <button onClick={logout}>Log out</button>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
