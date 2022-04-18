import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Social from "./Social";
import Projects from "./Projects";


function App() {

const[sideBarShow, setSideBarShow] =React.useState(false);

  return (
    <div>    
<Navbar onClick={()=>setSideBarShow(true)}  ></Navbar>

<Home></Home>
<Aboutme></Aboutme>
<Projects></Projects>
<Social></Social>

{sideBarShow &&
<div >
<Sidebar  onCancel={()=>setSideBarShow(false)}/>
</div>
}
</div>
  );
}

export default App;
