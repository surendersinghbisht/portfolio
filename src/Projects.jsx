import React from "react";
import Button from "./Button";
import P1 from "./P1";

function Projects() {

  return (
     
<div className="flex flex-col items-center space-y-4 pt-10 p-4 text-center sm:px-14">
<p className="font-extrabold font-custom tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center "> PROJECTS</p>
<p className="border-4 border-yellow-400  w-10  rounded-lg"></p>
<P1 className="">Here you will find some of the projects that I created with each project containing its own details</P1>

<div className="pt-20 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/todo.jpg" />
<div className="sm:flex-col sm:text-left  sm:space-y-8 space-y-8 ">
<p className="font-custom text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold font-custom">ToDo App</p>
<P1>ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.</P1>
<Button><a href="https://Assignment-33-Create-a-todo-app-SurenderSINGH8.codeyogiteam.repl.co"  target="_blank">CHECK OUT!</a></Button>
</div></div>
< hr />

<div className="pt-10 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/code.jpg" />
<div className="sm:flex-col sm:text-left sm:space-y-8  space-y-8">
<p className="font-custom text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold font-custom">CODEYOGI-Clone</p>
<P1>ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.</P1>
<div>
<a href="https://Assignment-33-Create-a-todo-app-SurenderSINGH8.codeyogiteam.repl.co" target="_blank"><Button>CHECK OUT!</Button></a>
</div></div></div>
< hr />

<div className="pt-10 space-y-8 sm:flex sm:space-x-10">
<img className="sm:h-80 sm:w-full" src="./images/jud.jpg" />
<div className="sm:flex-col sm:text-left sm:space-y-8 space-y-8">
<p className="font-custom text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold font-custom">Ask Jud</p>
<P1>Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want.</P1>
<div>
<a href="https://Assignment-34-Create-Ask-Jud-clone-SurenderSINGH8.codeyogiteam.repl.co" target="_blank"><Button>CHECK OUT!</Button></a>
</div></div></div>
< hr />
</div>
  );
}

export default Projects;
