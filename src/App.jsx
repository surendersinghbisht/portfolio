import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Social from "./Social";
import Projects from "./Projects";
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
    <div>    
<Navbar ></Navbar>
<Home></Home>
<Aboutme></Aboutme>
<Projects></Projects>
<Social></Social>
</div>
</BrowserRouter>
  );
}

export default App;
