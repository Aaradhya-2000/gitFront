import { useState } from "react";
import axios from "axios";
import BackendURL from "../config/backendURL"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { MdEmail, MdLock } from "react-icons/md";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BackendURL}/user/userlogin`,
        { email, password },
        { withCredentials: true }
      );

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      localStorage.setItem("username", response.data.User.name);
      localStorage.setItem("userid", response.data.User._id);

      if (onClose) onClose();
      setTimeout(() => {
        navigate("/userdashboard");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.msg || "Invalid credentials. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>User Login</h2>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>
            <MdEmail className="me-2" />
            Email
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>
            <MdLock className="me-2" />
            Password
          </Form.Label>
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

export default LoginForm;