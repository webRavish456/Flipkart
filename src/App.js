import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import Productpage from "./Productpage";
import Similar from "./Similar";

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element=<Home/>/>
        <Route path="/product" element=<Productpage/>/>
        <Route path="/similar" element=<Similar/>/>
        </Routes>
       
    </>
   
  )
 
}

export default App;
