import React, { useState, useEffect } from "react";
import "../styles/register.scss";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { registerRoute, VerificationRoute } from "../utils/API";

function Register() {
  const navigate = useNavigate();

  const [values, SetValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   if (localStorage.getItem("chat-app-user")) {
  //     navigate("/");
  //   }
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, email, password, confirmPassword } = values;

      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data === false) {
        toast.error(data.msg, ToastOpt);
      }
      if (data === true) {
        localStorage.setItem("todo-app-users", JSON.stringify(data.user));
        navigate("/login");
      }
    }
  };

  const Verification = async () => {
    const { email } = values;
    const { data } = await axios.post(VerificationRoute, {
      email,
    });

    if (data.status === false) {
      toast.error(data.msg, ToastOpt);
    }
    if(data.status === true) {
      localStorage.setItem("todo-app-user", JSON.stringify(data.user))
      navigate('/');
    }
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (username.length < 3) {
      toast.error("Username Should be minimum 3 symbols", ToastOpt);
      return false;
    } else if (email.length < 8) {
      toast.error("Please Enter your Email!", ToastOpt);
      return false;
    } else if (password.length < 8) {
      toast.error("Password Should be minimum 8 symbols", ToastOpt);
      return false;
    } else if (confirmPassword != password) {
      toast.error("Confirm password & password should be the same!", ToastOpt);
      return false;
    } else {
      Verification();
      navigate("/verification");
      return true;
    }
  };

  const handleChange = (event) => {
    SetValues({ ...values, [event.target.name]: event.target.value });
  };

  const ToastOpt = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  return (
    <>
      <div className="FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <h1>To Do List</h1>
            <h2>Create Account</h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            className="email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="confirm"
            onChange={(e) => handleChange(e)}
          />
          <div className="submit">
            <button type="submit" className="create">
              Create Account
            </button>
          </div>
          <span>
            Already have an account? <Link to="/login">Log In</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
