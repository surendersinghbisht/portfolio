import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";



function App() {

const[sideBarShow, setSideBarShow] =React.useState(false);

  return (
    <div>    
<Navbar onClick={()=>setSideBarShow(true)}  ></Navbar>

<Home></Home>
<Aboutme></Aboutme>



{sideBarShow &&
<div className="absolute right-0 top-6" >
<Sidebar onCancel={()=>setSideBarShow(false)}/>
</div>
}


</div>
  );
}

export default App;
