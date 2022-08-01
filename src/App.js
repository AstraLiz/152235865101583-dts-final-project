import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Detail from './Pages/Detail';
import Profile from './Pages/Profile';
import Search from './Container/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:BeritaID/:BeritaID2/:BeritaID3/:BeritaID4' element={<Detail/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profil' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;