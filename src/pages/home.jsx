import { useState } from "react";
import axios from "axios";
import BackendURL from "../config/backendURL";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackendURL}admin/logincheck`;
      const response = await axios.post(api, { adminId, password });

      // Show success toast
      toast.success(response.data.msg, {
        position: "top-center",
        autoClose: 2000,
      });

      localStorage.setItem("adminuser", response.data.admin.name);

      // Navigate after a short delay so toast can be seen
      setTimeout(() => {
        navigate("dashboard");
      }, 2000);
    } catch (err) {
      // Show error toast
      toast.error(err.response?.data?.msg || "Login failed", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>

          <label htmlFor="adminId">Admin ID</label>
          <input
            type="text"
            id="adminId"
            name="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Enter your Admin ID"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
