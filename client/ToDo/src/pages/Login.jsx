import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios'
import {loginRoute} from '../utils/API'
import "../styles/login.scss";

function Login() {
  const navigate = useNavigate();

  const [values, SetValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // console.log("in validate", registerRoute);
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, ToastOpt);
      }
      if (data.status === true) {
        localStorage.setItem("todo-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("chat-app-user")) {
  //     navigate("/");
  //   }
  // }, []);

  const ToastOpt = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const handleValidation = () => {
    const { username, password } = values;

    if (username.length < 1) {
      toast.error(" Incorect username or password!", ToastOpt);
      return false;
    } else if(password.length < 1) {
      toast.error(" Incorect username or password!", ToastOpt);
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (event) => {
    SetValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <h1>To Do List</h1>
            <h2>Log In</h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <div className="submit">
            <button type="submit" className="login">
              Log In
            </button>
          </div>
          <span>
            Don't have an account? <Link to="/register">Create</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
