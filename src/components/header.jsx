import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiUser } from "react-icons/ci";
import {Link} from "react-router-dom"
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import LoginForm from './form';
const Header = ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

        <div style={{color:"white",height:"40px",backgroundColor:"darkblue",display:"flex",justifyContent:"center",gap:"70px",alignItems:'center'}}>
          <h1>Task Management System</h1>
          <CiUser onClick={handleShow} to="userdashboard"/>
        </div>
        
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="home">Home</Nav.Link>
            <Nav.Link as ={Link} to="dashboard">DashBoard</Nav.Link>
            {/* <Nav.Link as ={Link} to=""></Nav.Link> */}
         
          </Nav>
        </Container>
      </Navbar>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <h1>User Login</h1> */}
           <LoginForm/>
    {/* <Button type="submit">Submit form</Button> */}
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Header