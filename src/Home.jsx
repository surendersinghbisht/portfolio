
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";


function Home() {
  return (
   <div>
      <Navbar></Navbar>
    <div class="sm:h-screen h-full sm:p-28 p-4  bg-[url('https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg')]">
      <div className="space-y-16 flex flex-col items-center">
<p className="font-extrabold font-custom tracking-wide pt-20 text-4xl text-center sm:text-6xl text-center sm:text-center ">HEY, I'M SURENDER SINGH</p>
<p className="font-custom text-center text-lg sm:text-xl  tracking-wider text-center font-light">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
</p>
<Button >PROJECTS</Button>
</div>
</div> 
    </div>
  );
}

export default Home;
