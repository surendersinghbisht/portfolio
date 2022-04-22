import React from "react";
import P1 from "./P1";
import Button from "./Button";
import Myskills from "./Myskills";
import {HashLink as Link} from 'react-router-hash-link';

function Aboutme() {
  return (
    <div id='Aboutme'>
<div className="p-4 pt-20  sm:px-60">
  <div className="flex flex-col items-center space-y-4">
<p className="font-extrabold font-custom tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center ">ABOUT ME</p>
<p className="border-4 border-yellow-400  w-10  rounded-lg"></p></div>
<div className="text-center pt-8">
<P1 className=" sm:font-bold text-center sm:text-lg  ">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</P1>
</div></div>

<div className="sm:p-16 p-4 pt-8  pt-16 sm:pt-16">
<div className="sm:flex sm:space-x-20 ">
  <div className="flex flex-col">
  <div className="space-y-4 sm:max-w-6xl ">
  <p className="font-custom text-2xl  font-semibold text-left">Get to know me!</p>
  <P1 className="text-center sm:text-left pt-8">I'm a<span className="text-gray-600 font-bold font-custom"> Frontend Web Developer</span> building the Front-end of Websites and Web Applications for both web and mobile view that leads to the success of the overall project. Check out some of my work in the <span className="text-gray-600 font-bold font-custom">Projects</span> section.</P1>
  <P1>I discovered my passion for coding during my training time at <span className="text-gray-600 font-bold font-custom">CODEYOGI.</span></P1>
<P1 className="text-center sm:text-left">I'm open to <span className="text-gray-600 font-bold font-custom">Job</span> opportunities where I can contribute, learn and grow. You can find me at <span className="text-gray-600 font-bold font-custom">contact.</span>  </P1>
</div>
<div className="sm:mt-12 mt-10">
<Link to="#Social" smooth><Button >CONTACT</Button></Link>
</div></div>
<Myskills ></Myskills>
</div>
</div>
</div>
  );
}

export default Aboutme;
