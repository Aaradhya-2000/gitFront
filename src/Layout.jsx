import Footer from "./components/Footer"
import Header from "./components/header"

import { Outlet } from "react-router-dom"
const Layout =()=>{
    return(
        <>
        <Header/>
        <div id="container">
          <Outlet/>
          </div>
          <Footer/>
        
        </>
    )
}

export default Layout