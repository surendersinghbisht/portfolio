import React from "react";
import Button from "./Button";
import P1 from "./P1";
import {HashLink as Link} from 'react-router-hash-link';

function Projects() {

  return (
   <div id='Projects'> 
<div className="flex flex-col items-center space-y-4 pt-10 p-4 text-center sm:px-14">
<p className="font-extrabold font-custom tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center "> PROJECTS</p>
<p className="border-4 border-yellow-400  w-10  rounded-lg"></p>
<P1 >Here you will find some of the projects that I created with each project containing its own details</P1>

<div className="pt-20 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/todo.jpg" />
<div className="sm:flex-col sm:text-left  sm:space-y-8 space-y-8 sm:w-full ">
<p className="sm: w-full font-sans text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold ">ToDo App</p>
<P1>ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.</P1>
<div>
<a href="https://Assignment-33-Create-a-todo-app-SurenderSINGH8.codeyogiteam.repl.co"  target="_blank"><Button>CHECK OUT!</Button></a>
</div></div></div>
< hr />

<div className="pt-10 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/code.jpg" />
<div className="sm:flex-col sm:text-left sm:space-y-8  space-y-8 sm:w-full">
<p className=" font-sans text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold ">CODEYOGI-Clone</p>
<P1>It is a clone of <a href="https://app.codeyogi.io " target="_blank" className="underline text-blue-500">https://app.codeyogi.io</a> which i build by using my various skills .</P1>
<div>
<a href="https://Assignment-33-Create-a-todo-app-SurenderSINGH8.codeyogiteam.repl.co" target="_blank"><Button>CHECK OUT!</Button></a>
</div></div></div>
< hr />

<div className="pt-10 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/jud.jpg" />
<div className="sm:flex-col sm:text-left sm:space-y-8 space-y-8 sm:w-full">
<p className="font-sans text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold ">Ask Jud</p>
<P1>Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want.</P1>
<div>
<a href="https://Assignment-34-Create-Ask-Jud-clone-SurenderSINGH8.codeyogiteam.repl.co" target="_blank"><Button>CHECK OUT!</Button></a>
</div></div></div>
< hr />
</div></div> 
  );
}

export default Projects;
