// components/UserChangePassword.jsx
import React, { useState } from "react";
import axios from "axios";
import BackendURL from "../config/backendURL";
import { toast, ToastContainer } from "react-toastify";

const UserChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userid");

    try {
      const res = await axios.post(`${BackendURL}user/changepassword`, {
        userId,
        oldPassword,
        newPassword
      });

      toast.success(res.data.msg);
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Change Password</h2>
        <label>Old Password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button type="submit">Update Password</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default UserChangePassword;
