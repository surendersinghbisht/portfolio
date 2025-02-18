import React from "react";
import Button from "./Button";
import P1 from "./P1";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div id="Projects">
      <div className="flex flex-col items-center space-y-4 sm:space-y-8 pt-10 p-4 text-center sm:px-14">
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
          src="/images/jobportal.png"
          details=" Hirrd, a full-stack job portal designed to streamline the hiring process! This project was built using cutting-edge technologies to provide a seamless experience for both recruiters and job seekers."
          href="https://hirrd-one-nu.vercel.app/"
          heading="HIRRD - job portal"
        />
        
        <ProjectsList
          src="/images/todo.jpg"
          details=" Chess.com clone would involve building a website or app that replicates key features of Chess.com."
          href="https://chess-com-clone-l6dm.onrender.com/"
          heading="CHESS.COM CLONE"
        />

        <ProjectsList
          src="/images/atlas.jpg"
          details="World Atlas is an educational geography website . As the name would suggest, it offers perspectives on the world in the form of flags and details. I believe that it is an amazing planet that we share, and we are on a quest to prove it."
          href="https://worldatlasbysurender.netlify.app/"
          heading="WORLD ATLAS"
        />

        <ProjectsList
          src="/images/show.png"
          details="As the name would suggest, it offers you to find the deatails of your favorite shows. I used redux and redux saga to build this project."
          href="https://showsfinderapp.netlify.app/"
          heading="SHOW FINDER"
        />

        <ProjectsList
          src="/images/jud.jpg"
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
