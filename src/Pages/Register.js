import React from 'react'
import User from '../Component/User'
import NavBar from "../Container/Navbar";
import Footer from "../Component/Footer";
export default function RegisterPage() {
  return (
    <div style={{
        width: "100%",

          margin: "auto",paddingTop:'2em',
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
  
      }}>
        <NavBar/>
        <br/><br/>
        <User loginOrRegister={"register"} />
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
        
      </div>
  )
}