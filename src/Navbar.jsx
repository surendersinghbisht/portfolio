import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi';


function Navbar(props) {
  return (
    <div className="bg-white flex justify-between sticky top-0 drop-shadow-2xl absolute  sm:h-20 " >
        <div className=" sm:p-4 flex sm:space-x-4 space-x-2 mt-4 ml-1  p-2 sm:items-center  ">
<img className="sm:w-12 sm:h-12 h-8 w-8 sm:ml-8 mb-2 ml-2 rounded-full sm:mt-1" src="./images/me.jpg" />
<p className="font-custom sm:mt-3 sm:mb-3 sm:text-lg text-sm font-semibold sm:font-extrabold mt-1  tracking-wider ">SURENDER SINGH</p>
</div>
<GiHamburgerMenu className="mt-8 mr-2 w-8 sm:hidden block  " onClick={props.onClick}  />
<div className="flex space-x-16 mr-16  hidden sm:block  items-center mt-8  ">
<button className="font-custom  text-base font-semibold hover:text-yellow-400 tracking-wider">HOME</button>
<button className="font-custom  text-base font-semibold hover:text-yellow-400 tracking-wider">ABOUT</button>
<button className="font-custom   text-base font-semibold hover:text-yellow-400 tracking-wider">PROJECTS</button>
<button className="font-custom  text-base font-semibold hover:text-yellow-400 tracking-wider">CONTACT</button>
</div>
    </div>
  );
}

export default Navbar;
