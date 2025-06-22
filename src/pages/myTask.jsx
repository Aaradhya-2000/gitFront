import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/backendURL";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyTask = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${BackEndUrl}user/mytask/?id=${localStorage.getItem("userid")}`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitTask = async (id) => {
    let api = `${BackEndUrl}user/completeTask/?id=${id}`;
    try {
      const response = await axios.get(api);
      toast.success("Task submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit task.");
      console.log(error);
    }
    loadData();
  };

  const ans = mydata.map((key) => {
    return (
      <tr key={key._id}>
        <td>{key.title}</td>
        <td>{key.description}</td>
        <td>{key.compday}</td>
        <td>
          {key.taskstatus ? (
            <Button onClick={() => submitTask(key._id)} style={{ backgroundColor: "green" }} disabled>
              Task Submitted
            </Button>
          ) : (
            <Button onClick={() => submitTask(key._id)}>Submit Task</Button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <h3 style={{ textAlign: "center", marginTop: '20px' }}>Task List Given By Admin</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover style={{ margin: "40px" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completion Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </div>
    </>
  );
};

export default MyTask;
