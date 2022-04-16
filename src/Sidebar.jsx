import React from "react";
import { ImCancelCircle } from "react-icons/im";


function Sidebar(props) {
  return (
   <div className="shadow-2xl">
<div className="sm:hidden block top-0 sticky flex justify-end">
<aside class="w-screen" aria-label="Sidebar">

<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
<ul class="space-y-2">
<ImCancelCircle className=" mt-1 font-semibold h-4  w-4 mr-2 w-8 sm:hidden block flex ml-80 mb-6 " onClick={props.onCancel}></ImCancelCircle>
<li>
<a href="#" class="flex items-center  p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white hover:text-yellow-500 dark:hover:bg-gray-700">
<span class=" font-bold ml-72">HOME</span>
</a>
</li>
<hr />
<li>
<a href="#" class="flex items-center p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span class="flex-1 text-right whitespace-nowrap hover:text-yellow-400 font-bold">ABOUT</span>
</a>
</li>
<hr />
<li>
<a href="#" class="flex items-center p-2 text-base font-custom text-gray-700 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span class="flex-1 text-right  whitespace-nowrap hover:text-yellow-400 font-bold">PROJECTS</span>
</a>
</li>
<hr />
<li>
<a href="#" class="flex items-center p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span class="flex-1 text-right whitespace-nowrap hover:text-yellow-400 font-bold font-bold">CONTACT</span>
</a>
</li>

</ul>
</div>
</aside>
</div>
</div>
  );
}

export default Sidebar;
