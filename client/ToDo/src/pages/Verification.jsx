import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "../styles/verify.scss";
import { registerRoute, VerificationRoute } from "../utils/API";

function Verification() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleValidation();
  };

  const [values, SetValues] = useState({
    code: ""
  })

  const verification = ["jkf456", "q1vhgk", "ritykv", "dijr", "2f4x3"];

  const handleValidation = () => {
    const { code } = values;

    if (code.length < 1) {
      toast.error("Please Enter the code!", ToastOpt);
      return false;
    } else if (verification.includes(code) == false) {
      toast.error("Incorect code!", ToastOpt);
      return false;
    } else {
      navigate("/");
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

  const navigate = useNavigate();
  return (
    <>
      <div className="FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <h1>To Do List</h1>
            <h2>Verification</h2>
          </div>
          <input
            type="text"
            placeholder="Enter Code"
            className="code"
            name="code"
            onChange={(e) => handleChange(e)}
          />
          <div className="submit">
            <button type="submit" className="create">
              Verify
            </button>
          </div>
          <span>
            Don't have a code? <Link to="/register">Try Again</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Verification;
