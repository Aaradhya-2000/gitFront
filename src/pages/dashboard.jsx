
import React from "react";
// import "./Dashboard.css"; // Link to your CSS
// import logo from "./assets/images/LOGO.jpeg";
// import loginImg from "./assets/images/Login_Dashboard.jpeg.jpeg";
import { Link,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear()
    navigate("/")

  }
  return (
    <div className="dash">
      <div className="side-nav">
        <div className="side-nav-top">
          {/* <img src="" alt="Logo" /> */}
          {/* <a href="#">AARADHYA PARANJPE</a> */}
          <a href="#">Welcome {localStorage.getItem("adminuser")}</a>
          <br />
          <a href="#" onClick={logout}>Logout</a>
          <span>
            <i className="fa-solid fa-xmark" id="close"></i>
          </span>
        </div>

        <div className="gen">
          <p>General</p>
        </div>

        <ul>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-solid fa-gauge" id="dash"></i>
                <p>Dashboard</p>
              </div>
            </a>
          </li>
          <li>
            <a href="insert.html">
              <div className="items">
                <i className="fa-regular fa-clock" id="emp"></i>
                <Link className="p" to="createuser">Add Employee</Link>
              </div>
            </a>
          </li>
          <li>
            <a href="display.html">
              <div className="items">
                <i className="fa-solid fa-diamond" id="data"></i>
                <Link className="p" to="assigntask">Asign Task</Link>
              </div>
            </a>
          </li>
          <li>
            <a href="update.html">
              <div className="items">
                <i className="fa-solid fa-table" id="up"></i>
                <Link className="p" to="taskDetail">Task Detail</Link>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-solid fa-box" id="apps"></i>
                <p>Apps</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-solid fa-calendar-days" id="table"></i>
                <p>Pricing Table</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-brands fa-telegram" id="contact"></i>
                <p>Contact</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-regular fa-file" id="page"></i>
                <p>Additional Pages</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="items">
                <i className="fa-solid fa-map" id="map"></i>
                <p>Map</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Header Section */}
      <div>
        <Outlet/>
      </div>
    
    </div>
  );
};

export default Dashboard;
