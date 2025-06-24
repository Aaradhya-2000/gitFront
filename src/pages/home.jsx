import { useState } from "react";
import axios from "axios";
import BackendURL from "../config/backendURL";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Container } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackendURL}admin/logincheck`;

      const response = await axios.post(
        api,
        { adminId, password },
        { withCredentials: true }
      );

      toast.success(response.data.msg, {
        position: "top-center",
        autoClose: 2000,
      });

      localStorage.setItem("adminuser", response.data.admin.name);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <Form.Group className="mb-3" controlId="formAdminId">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Enter your Admin ID"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="nav-link-hover w-100">
          Login
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Home;