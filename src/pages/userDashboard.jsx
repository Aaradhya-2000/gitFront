import { useState } from 'react';
import { Menu, Search, User, LogOut, Home, BarChart2, Settings } from 'lucide-react';
import { Outlet,Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
const UserDashboard = ()=>{
    
    const navigate = useNavigate()
        
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    


    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

   const logout = ()=>{
    localStorage.clear()
    navigate("/")

   }

return (
    <>
  <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? '' : 'sidebar-hidden'}`}>
        <div className="sidebar-header">
          <div className="user-avatar">A</div>
          <div>
            <h2 className="user-name"> welcome {localStorage.getItem("username")}</h2>
            <p className="user-email"></p>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
            <Link
  style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
   to="/forgotPass"
>
  Change Passward
</Link>
            </li>
            <li>
              <a href="#" className="nav-item">
                <BarChart2 className="nav-icon" />
                 <Link style={{textDecoration:'none',color:"white"}} to="mytask">My Task</Link>
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <Settings className="nav-icon" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <LogOut className="nav-icon" />
            <a href="#" onClick={logout} style={{textDecoration:"none",color:"white"}}>Logout</a>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button onClick={toggleSidebar} className="toggle-btn">
              <Menu className="menu-icon" />
            </button>
            <h1 className="header-title">Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="user-avatar">A</div>
          </div>
        </header>

        {/* Main Dashboard */}
        <Outlet/>
        
      </div>
    </div>
        
        </>
    )
}

export default UserDashboard