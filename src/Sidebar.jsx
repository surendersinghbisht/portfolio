import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { HashLink as Link } from "react-router-hash-link";

function Sidebar({ onCancel }) {
  return (
    <>
      <div className="shadow-2xl  w-full block sm:hidden  bg-white dark:bg-white ">
        <div className="sm:hidden flex justify-end sticky">
          <aside aria-label="Sidebar ">
            <div className="overflow-y-auto py-4 px-3 rounded ">
              <ul className="space-y-2">
                <ImCancelCircle
                  className=" mt-2 font-semibold h-4  w-4 mr-2  sm:hidden block  ml-80 mb-6 "
                  onClick={onCancel}
                ></ImCancelCircle>
                <li>
                  <a className="flex items-center  p-2 text-base font-sans text-gray-700 rounded-lg  hover:text-yellow-500 ">
                    <Link to="#Home" smooth className=" font-bold ml-72">
                      HOME
                    </Link>
                  </a>
                </li>
                <hr />
                <li>
                  <a className="flex items-center p-2 text-base font-sans text-gray-700 rounded-lg  ">
                    <Link
                      to="#Aboutme"
                      smooth
                      className="flex-1 text-right whitespace-nowrap hover:text-yellow-400 font-bold"
                    >
                      ABOUT
                    </Link>
                  </a>
                </li>
                <hr />
                <li>
                  <a className="flex items-center p-2 text-base font-sans text-gray-700  rounded-lg ">
                    <Link
                      to="#Projects"
                      smooth
                      className="flex-1 text-right  whitespace-nowrap hover:text-yellow-400 font-bold"
                    >
                      PROJECTS
                    </Link>
                  </a>
                </li>
                <hr />
                <li>
                  <a className="flex items-center p-2 text-base font-sans text-gray-700 rounded-lg  ">
                    <Link
                      to="#Social"
                      smooth
                      className="flex-1 text-right whitespace-nowrap hover:text-yellow-400  font-bold"
                    >
                      CONTACT
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
