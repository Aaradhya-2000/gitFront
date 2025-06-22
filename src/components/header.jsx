import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './form';
// import './Header.css'; // CSS file for styling

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="top-bar">
        <h1 className="title">Task Management System</h1>
        <CiUser className="user-icon" onClick={handleShow} />
      </div>

      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand className="brand" href="#">MyApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" className="nav-link-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="dashboard" className="nav-link-hover">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
       
        
        
        
          <LoginForm />
        
      </Modal>
    </>
  );
};

export default Header;
