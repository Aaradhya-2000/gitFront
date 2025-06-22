const DashHome = ()=>{
    return(
        <>
              <div className="header">
        <div className="nav">
          <div className="search-bars">
            <div className="bars">
              <label htmlFor="click">
                <i className="fa-solid fa-bars" id="bar"></i>
              </label>
            </div>
            {/* <div className="search">
              {/* <label htmlFor="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </label> */}
              {/* <input type="text" placeholder="Search.." id="search" /> */}
            {/* </div>  */}
          </div>
          <ul>
            <li><a href="#"><i className="fa-solid fa-flag"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-boxes-stacked"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
            <li><a href="#"><i className="fa-regular fa-square"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-moon"></i></a></li>
            <li><a href="#"><i className="fa-regular fa-bell"></i></a></li>
            {/* <li><a href="registeration.html"><img src={loginImg} alt="User" /></a></li> */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="DASHBOARD" style={{ marginTop: "100px" }}>
          <div className="stats-container">
            <div className="stat-card">
              <h2>Total Employees</h2>
              <p>120</p>
            </div>
            <div className="stat-card">
              <h2>Departments</h2>
              <p>8</p>
            </div>
            <div className="stat-card">
              <h2>Active Projects</h2>
              <p>15</p>
            </div>
          </div>

          <div className="dashboard">
            <section className="statistics">
              <div className="card">Total Expenditure: <br /><span>120 Billions $</span></div>
              <div className="card">Vision of 2025: <br /><span>500 Million Customers</span></div>
              <div className="card">Monthly Hires: <br /><span>50</span></div>
              <div className="card">Services: <br /><span>12</span></div>
            </section>

            <section className="content">
              <div className="chart">Bar Chart Placeholder</div>
              <div className="chart">Line Chart Placeholder</div>
            </section>

            <section className="dynamic">
              <div className="announcements">
                <h2>Announcements</h2>
                <p>Upcoming team meeting on Friday!</p>
              </div>
              <div className="activity">
                <h2>Recent Activity</h2>
                <ul>
                  <li>John Doe joined the IT Department.</li>
                  <li>Marketing team started a new project.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
        
        </>
    )
}

export default DashHome