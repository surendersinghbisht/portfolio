import React from "react";
import {SiInstagram} from "react-icons/si"
import {AiOutlineHeart} from "react-icons/ai"


function Social() {

return(
    <div className="bg-black h-full p-4 sm:px- sm:py-8 pt-10" id='Social'>
<h1 className="sm:ml-4 font-sans text-white font-bold text-2xl pt-10 tracking-widest relative ">CONTACT</h1>

<div className="sm:flex sm:justify-between ">

  <div className="flex space-x-6 pt-6 sm:ml-4 ">
  <a href="https://www.linkedin.com/in/surender-singh-4a5a28237/" target="_blank"><img className="h-6 w-6" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"/></a>
<a href="https://twitter.com/surender7078" target="_blank"><img className="h-6 w-6" src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"/></a>
<a href="https://www.instagram.com/surenderbisht707/" target="_blank"><SiInstagram className="text-white h-6 w-6" /></a>
<a href="https://github.com/surendersinghbisht" target="_blank"><img className="  h-6 w-6" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"/></a>
</div>

<div className="pt-10 space-y-4 sm:pt-0 sm:-mt-8  sm:max-w-md  sm:ml-80 ">
<h1 className="text-white font-sans font-bold text-lg tracking-widest sm:text-2xl">SURENDER SINGH</h1>
<p className="text-white font-sans tracking-wide text-sm   ">A FullStack focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall project.</p>
</div>

</div>

<div className="pt-12">
<hr className="text-white "/></div>
{/* 
<h1 className="font-sans trecking-wider text-white text-center pt-4">Made with <span className="flex justify-center"><AiOutlineHeart/></span>at CODEYOGI</h1> */}
</div>

);
}

export default Social;
