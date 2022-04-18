
import React from "react";


function P1(props) {
  return (
   <div>
     <p className="font-custom text-gray-600 text-md sm:text-lg tracking-wide sm:text-bold  ">{props.children}</p>
</div> 
  );
}

export default P1;
