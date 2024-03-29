import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Courses from "./components/Courses";
import PAP from "./components/PAP";
import Login from "./components/Login";
import Error from "./components/Error";
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
// import NavBar from './components/NavBar2';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pap" element={<PAP/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App