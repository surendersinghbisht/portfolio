import React from "react";
import Button from "./Button";
import P1 from "./P1";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div id="Projects">
      <div className="flex flex-col items-center space-y-4 pt-10 p-4 text-center sm:px-14">
        <p className="font-extrabold font-custom tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center ">
          {" "}
          PROJECTS
        </p>
        <p className="border-4 border-yellow-400  w-10  rounded-lg"></p>
        <P1>
          Here you will find some of the projects that I created with each
          project containing its own details.
        </P1>

        <ProjectsList
          image="./public/todo.jpg"
          details=" ToDo List App is a kind of app that generally used to maintain our
            day-to-day tasks or list everything that we have to do."
          href="https://todoappbysurender.netlify.app/"
          heading="TODO APP"
        />

        <ProjectsList
          image="./public/atlas.jpg"
          details="World Atlas is an educational geography website . As the name would suggest, it offers perspectives on the world in the form of flags and details. I believe that it is an amazing planet that we share, and we are on a quest to prove it."
          href="https://worldatlasbysurender.netlify.app/countries"
          heading="WORLD ATLAS"
        />

        <ProjectsList
          image="./public/code.jpg"
          details="It is a clone of website app.codeYogi.io which i made by using my various skills."
          href=""
          heading="CODEYOGI CLONE"
        />

        <ProjectsList
          image="./public/jud.jpg"
          details=" Do you need to ask a question? Are you looking for answers? Jud
              offers you a space to ask anything you want."
          href="https://Assignment-34-Create-Ask-Jud-clone-SurenderSINGH8.codeyogiteam.repl.co"
          heading="ASK JUD"
        />
      </div>
    </div>
  );
}

export default Projects;
