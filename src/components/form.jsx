import React, { useState } from "react";
import axios from "axios";
import BackendURL from "../config/backendURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md"; // Email and password icons
// import './LoginForm.css'; // Custom styling

const LoginForm = () => {
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
        <h2>User Login</h2>

        <div className="input-group">
          <label htmlFor="email" style={{color:'white'}}>
            <MdEmail className="input-icon" />
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" style={{color:'white'}}>
            <MdLock className="input-icon" />
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginForm;
