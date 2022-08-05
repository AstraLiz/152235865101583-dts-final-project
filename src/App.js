import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Detail from './Pages/Detail';
import Profile from './Pages/Profile';
import Search from './Container/Search';
import PasswordReset from './Pages/PasswordReset';
import Splash from "./Component/SplashScreen"
import {useState} from "react";
import { ThemeProvider } from "styled-components";

// eslint-disable-next-line react-hooks/rules-of-hooks
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:NewsID/:NewsID2/:NewsID3/:NewsID4' element={<Detail/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profil' element={<Profile/>}/>
        <Route path='/passwordreset' element={<PasswordReset/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;



// import Splash from "./Component/SplashScreen"

        
            
// export default App