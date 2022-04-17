import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Contact from "./Contact"
import Social from "./Social";


function App() {

const[sideBarShow, setSideBarShow] =React.useState(false);

  return (
    <div>    
<Navbar onClick={()=>setSideBarShow(true)}  ></Navbar>

<Home></Home>
<Aboutme></Aboutme>


{sideBarShow &&
<div >
<Sidebar  onCancel={()=>setSideBarShow(false)}/>
</div>
}
<Social></Social>
</div>
  );
}

export default App;
