import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {HashLink as Link } from 'react-router-hash-link';
import Sidebar from "./Sidebar";

function Navbar() {

  const[sideBarShow, setSideBarShow] =React.useState(false);


  return (
    <div className=" bg-white sticky top-0 drop-shadow-2xl sm:h-20 p-4 sm:p-0  ">
      <div className="sm:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className=" sm:p-4 flex items-center sm:space-x-4 space-x-2  ">
            <img
              className="sm:w-12 sm:h-12 h-8 w-8 sm:ml-8  ml-2 rounded-full sm:mt-1"
              src="/images/me.jpg"
            />

            <p className="font-sans sm:mt-3 sm:mb-3 sm:text-lg text-sm font-bold sm:font-extrabold mt-1  tracking-wider ">
              SURENDER SINGH
            </p>
          </div>
          <GiHamburgerMenu
            className=" mr-2 w-8 sm:hidden block "
            onClick={() => setSideBarShow(true)}
          />
        </div>

        <div className=" sm:space-x-16 mr-16  hidden sm:block    ">
          <div className=" space-x-10 ">
            <Link
              to="#Home"
              smooth
              className="font-sans  text-base font-bold hover:text-yellow-400 tracking-wider"
            >
              HOME
            </Link>
            <Link
              to="#Aboutme"
              smooth
              className=" font-sans  text-base font-bold hover:text-yellow-400 tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              to="#Projects"
              smooth
              className="font-custom   text-base font-bold hover:text-yellow-400 tracking-wider"
            >
              PROJECTS
            </Link>
            <Link
              to="#Social"
              smooth
              className="font-custom  text-base font-bold hover:text-yellow-400 tracking-wider"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      {sideBarShow && (
        <div>
          <Sidebar onCancel={() => setSideBarShow(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
