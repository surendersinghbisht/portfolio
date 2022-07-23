
import React from "react";
import Button from "./Button";
import {HashLink as Link} from 'react-router-hash-link';
import {IoIosArrowDown} from 'react-icons/io'



function Home() {
  return (
   <div id='Home'>  
    <div className="sm:h-screen h-full sm:p-28 p-4  bg-[url('https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg')]">
      <div className="space-y-10 sm:space-y-16 flex flex-col  items-center pb-14">
<p className="font-extrabold font-sans tracking-wide pt-20 sm:pt-6 text-4xl  sm:text-6xl text-center sm:text-center ">HEY, I'M SURENDER <span className="text-yellow-400">SINGH</span></p>
<p className="font-sans  text-lg sm:text-xl sm:px-20 tracking-wider text-center ">A <span className="text-yellow-400">Frontend</span> focused Web Developer building the Frontend of <span className="text-yellow-400">Websites</span> and Web Applications that leads to the success of the overall project.
</p>

<Link to='#Projects' smooth><Button>PROJECTS</Button></Link>
</div>
<div className="flex justify-center animate-bounce  sm:mt-16 ">
<Link to='#Aboutme' smooth><IoIosArrowDown className="h-8 w-8 "/></Link>
</div>
</div> 
    </div>
  );
}

export default Home;
