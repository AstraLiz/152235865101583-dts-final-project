import React from "react";
import User from "../Component/User";
import NavBar from "../Container/Navbar";
import Footer from "../Component/Footer";
export default function LoginPage() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          paddingTop:'2em',
          position: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
        }}
      >
        <NavBar/>
        <br/><br/>
        <User loginOrRegister={"login"} />
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    </div>
  );
}