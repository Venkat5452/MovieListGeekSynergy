import React from "react";
import { Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logout from "./components/Logout";
function App() {
  return (
    <>
    <Header/>
    <div className="container text-center mb-2">
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Logout" element={<Logout/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
