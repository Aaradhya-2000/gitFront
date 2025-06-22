import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/backendURL";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import a1 from "../images/a1.jpeg";
import a2 from "../images/a2.jpeg";

const TaskDetail = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const deleteTask = async (id) => {
    const api = `${BackEndUrl}admin/deleteTask/?id=${id}`;
    try {
      const res = await axios.delete(api);
      toast.success(res.data.msg || "Task deleted!");
      loadData();
    } catch (err) {
      toast.error("Error deleting task.");
    }
  };

  const loadData = async () => {
    const api = `${BackEndUrl}admin/taskdetail`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      toast.error("Failed to load tasks.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeTaskStatus = async (id) => {
    const api = `${BackEndUrl}admin/changetaskstatus/?id=${id}`;
    try {
      const response = await axios.get(api);
      toast.success(response.data.msg || "Task status updated!");
      loadData();
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };


  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = mydata.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",gap:"40px"}}>
      <ToastContainer position="top-right" autoClose={2000}  />
      <h2>Task Detail List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>#</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((key, index) => (
            <tr key={key._id}>
              <td>
                {key.taskstatus ? (
                  <img src={a1} width="30" height="30" alt="Done" />
                ) : (
                  <img src={a2} width="30" height="30" alt="Pending" />
                )}
              </td>
              <td>{startIndex + index + 1}</td>
              <td>{key.userid?.name}</td>
              <td>{key.userid?.email}</td>
              <td>{key.title}</td>
              <td>{key.description}</td>
              <td>
                <Button
                  variant={key.taskstatus ? "success" : "danger"}
                  size="sm"
                  onClick={() => changeTaskStatus(key._id)}
                >
                  {key.taskstatus ? "ReAssign" : "Pending..."}
                </Button>
              </td>
              <td>
                <Button
                  style={{ backgroundColor: "blue" }}
                  size="sm"
                  onClick={() => deleteTask(key._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>

      {/* Pagination Controls */}
      <div
        style={{
          backgroundColor: "#222",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
          gap: "10px",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Button
          variant="light"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </Button>

        {[...Array(totalPages).keys()].map((num) => (
          <Button
            key={num}
            variant={currentPage === num + 1 ? "primary" : "outline-light"}
            size="sm"
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </Button>
        ))}

        <Button
          variant="light"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
     
    </>
  );
};

export default TaskDetail;
