import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "../styles/header.scss";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [User, SetUser] = useState(null);
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("todo-app-user");
    if (userData) {
      setIsLoggedIn(true);
      SetUser(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    localStorage.getItem("todo-app-user");
    setIsLoggedIn(false);
    SetUser(null);
  };

  const toggleMenu = () => {
    setMenuIsOpen(!MenuIsOpen);
  };

  return (
    <header>
      <ul className="menu">
        <li className="main">
          <Link to="/">To Do</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li className="register">
              <Link to="/register">Create Account</Link>
            </li>
            <li className="login">
              <Link to="/login">Log In</Link>
            </li>
          </>
        ) : (
          <>
            <li className="user_pictures" onClick={toggleMenu}>
              <Link>
                <i className="fas fa-user user-icon"></i>
                <span>{User && User.username}</span>
                <i className="fas fa-angle-down arrow"></i>
                {MenuIsOpen && <Modal user={User} logout={logout} />}
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
