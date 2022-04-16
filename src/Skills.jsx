import React from "react";

function Skills(props) {
  return (
    <div className="p-2" >

<p className="text-gray-600 font-bold font-custom bg-gray-200 tracking-wider py-2 sm:py-3 sm:px-6 px-4 sm:text-md text-sm inline-block rounded-md ">{props.children}</p>

</div>
  );
}

export default Skills;
