import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackendURL from '../config/backendURL';
const CreateUser = ()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [designation,setDesignation] = useState("")

    const handleSubmit =async(e)=>{
        e.preventDefault()
         let api = `${BackendURL}admin/usercreation`;
         const response = await axios.post(api,{name:name,email:email,designation:designation})
         console.log(response.data)
         localStorage.setItem("username",response.data)
    }
    return(
        <>
         <h1>Create a new user</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={name} onChange={(e)=>{setName(e.target.value)}} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select Designation</Form.Label>

                    <Form.Select aria-label="Default select example" value={designation} onChange={(e)=>setDesignation(e.target.value)}>
                        <option>--Select Designation--</option>
                        <option>Programmer</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>DataBase Developer</option>
                        <option>Analyst</option>
                        <option>Coder</option>
                    </Form.Select>
                </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default CreateUser