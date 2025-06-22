import { useState,useEffect } from "react"
import BackendURL from "../config/backendURL";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const AsignTask = ()=>{
    const[mydata,setMyData] = useState([]);
    const [show, setShow] = useState(false);
    const[input,setinput] = useState({})
    const handleClose = () => setShow(false);
    const [userid,setuserId] = useState("");
    const handleShow = (uid) => {
      // alert(uid)
      setuserId(uid)
      setShow(true);
    }

    const loadData = async()=>{
        let api = `${BackendURL}admin/showuserdata`
        try {
            const res = await axios.get(api)
            console.log(res.data)
            setMyData(res.data)
        } catch (error) {
             console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])

    const handleInput = (e)=>{
          let name = e.target.name
          let value = e.target.value

          setinput(values=>({...values,[name]:value}))
          console.log(input)
           
    }
    const handlesubmit = async(e)=>{
        e.preventDefault();
        let api = `${BackendURL}admin/assigntask`;
        try {
          const response = await axios.post(api,{...input,userid})
          console.log(response.data)
          
        } catch (error) {
          console.log(error)
        }


        


    }
    let no = 0

    const ans = mydata.map((key)=>{
       no++
       return(
        
        <> 

         <tr>
            <td>{no}</td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.designation}</td>
            <td><Button variant="secondary" onClick={()=>{handleShow(key._id)}}>Assign Task</Button></td>
         </tr>

        
        </>
       )
    })
    return(
        <>
         <h2>Assign Task to User</h2>

         <Table striped bordered hover>
      <thead>
        <tr>
          <th>no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Asign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter task title" name="title" onChange={handleInput}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Desicription</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"  name="description" onChange={handleInput} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Completion Days</Form.Label>
        <Form.Control type="text" placeholder="Deadline"  name="compday" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
            
        </Modal.Body>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default AsignTask