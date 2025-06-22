import './css/App.css'
import './css/user.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from './pages/home'
import Dashboard from "./pages/dashboard"
import CreateUser from './pages/createuser'
import DashHome from './pages/dashboardHome'
import AsignTask from './pages/asignTask'
import UserDashboard from './pages/userDashboard'
import UserDashHome from './pages/userDashHome'
import MyTask from './pages/myTask'
import TaskDetail from './pages/taskDetail'
import ForgotPass from './pages/forgotPass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="forgotPass" element={<ForgotPass />} /> {/* ← move here */}
  </Route>
</Routes>
{/* Hello  */}
     
        <Routes>
           <Route path="dashboard" element={<Dashboard/>}>
             <Route index element={<DashHome/>}/>
             <Route path="createuser" element={<CreateUser/>}/>
             <Route path='assigntask' element={<AsignTask/>}/>
             <Route path='taskDetail' element={<TaskDetail/>}/>
           
           
           </Route>
           
        </Routes>
        <Routes>
        <Route path='userdashboard' element={<UserDashboard/>}>
        <Route index element={<UserDashHome/>}/>
        <Route path='mytask' element={<MyTask/>}/>
        <Route path='forgotPass' element={<ForgotPass/>}/>
        </Route>
        </Routes>
    

      </BrowserRouter>
  )
}

export default App
