import React from "react";


function Navbar() {
  return (
    <div className="bg-white flex justify-between sticky top-0 shadow-lg" >
        <div className=" sm:p-4 flex sm:space-x-4 space-x-2 mt-4 ml-1 p-2  ">
<img className="sm:w-12 sm:h-12 h-8 w-8 sm:ml-8 mb-2 ml-2 rounded-full" src="./images/me.jpg" />
<p className="font-custom sm:mt-3 sm:text-lg text-sm font-semibold sm:font-extrabold mt-1  tracking-wider ">SURENDER SINGH</p>
</div>
<div className="flex space-x-20 mr-16 mb-1 hidden sm:block sm:mt-8 ">
<button className="font-custom mt-3 text-base font-semibold hover:text-yellow-500">HOME</button>
<button className="font-custom mt-3 text-base font-semibold hover:text-yellow-500">ABOUT</button>
<button className="font-custom mt-3  text-base font-semibold hover:text-yellow-500">PROJECTS</button>
<button className="font-custom mt-3 text-base font-semibold hover:text-yellow-500">CONTACT</button>
</div>
    </div>
  );
}

export default Navbar;
