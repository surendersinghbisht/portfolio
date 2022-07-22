import P1 from "./P1";
import Button from "./Button";


function ProjectsList({ src, details, href, heading }) {
  return (
    <div className="">
      <div className="pt-20 space-y-8 sm:flex sm:space-x-10">
        <img className="sm:h-80 sm:w-1/2 rounded-xl shadow-lg m-6" src={src}  />
        <div className="sm:flex-col sm:text-left  sm:space-y-8 space-y-8 sm:w-full ">
          <p className="sm: w-full font-sans text-xl  font-semibold text-center sm:text-left sm:text-2xl sm:font-bold ">
        {heading}
          </p>
          <P1>{details}</P1>
          <div>
            <a href={href} target="_blank">
              <Button>CHECK OUT!</Button>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProjectsList;
