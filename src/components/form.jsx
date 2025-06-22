import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackendURL from "../config/backendURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${BackendURL}user/userlogin`;
    try {
      const response = await axios.post(api, { email, password });
      toast.success("Login successful!");
      localStorage.setItem("username", response.data.User.name);
      localStorage.setItem("userid", response.data.User._id);
      setTimeout(() => {
        navigate("/userdashboard");
      }, 1500);
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="userId">Email ID</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>

 
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginForm;
