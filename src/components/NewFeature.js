import { Link } from "react-router-dom";
import Razor from "../images/razorpayXicon.svg"
import bg from "../images/instant-settlement-bg.svg";
import bgHover from "../images/instant-settlement-bghover.svg"; 
import dot from "../images/feature-section1-dottedrows.png"
// import { useState } from "react";
const NewFeature =()=>{
    // let url=bg;
    // const MouseOver=()=>{
    //     url=bgHover;
    // }
    // const Mouseout=()=>{
    //     url=bg;
    // }
    return(
        <div className="bg-white relative">
        <div className="relative mx-auto max-w-[1080px] w-11/12 pt-4">
            <img src={dot} alt="sorry"
                 className="absolute -top-[83px] right-[495px] -z-[1]"/>
            <img src={dot} alt=""
                 className="absolute -top-[83px] left-[841px] -z-[1] "/>
 

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center relative z-10 cursor-pointer">
                <div className="flex flex-col gap-4 text-4xl font-mullish font-extrabold ">
                    <span className="text-deepBlue ">New in the</span>
                    <span className="text-lightBlue500">Razorpay</span>
                    <span className="text-deepBlue">Product Suite</span>
                </div>
 
                {/* <!-- card 1 --> */}
                <div className="font-mullish flex flex-col gap-4 border drop-shadow-xl px-6 py-6 rounded-md  transition-all duration-200 hover:scale-105 " style={{ backgroundImage: `url(${bg})`, hover:{backgroundImage: `url(${bgHover})`}}} 
                >
                    <img src={Razor} alt="sorry"
                         className="bg-lightBlue rounded-full" width="38px"/>
                    <h2 className="font-bold text-lg">Corporate Cards</h2>
                    <p className="text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                <Link to="/"
                    className="text-lightBlue500 font-bold  hover:text-lightBlue300 transition-all duration-200">
                    Know More
                    <i className="fa-solid fa-chevron-right fa-3xs mt-1 pl-2"></i>
                </Link>
                </div>






                <div className="font-mullish flex flex-col gap-4 border drop-shadow-xl px-6 py-6 rounded-md  transition-all duration-200 hover:scale-105 " style={{ backgroundImage: `url(${bg})`, hover:{backgroundImage: `url(${bgHover})`}}} 
                >
                    <img src={Razor} alt="sorry"
                         className="bg-lightBlue rounded-full" width="38px"/>
                    <h2 className="font-bold text-lg">Corporate Cards</h2>
                    <p className="text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                <Link to="/"
                    className="text-lightBlue500 font-bold  hover:text-lightBlue300 transition-all duration-200">
                    Know More
                    <i className="fa-solid fa-chevron-right fa-3xs mt-1 pl-2"></i>
                </Link>
                </div>





                <div className="font-mullish flex flex-col gap-4 border drop-shadow-xl px-6 py-6 rounded-md  transition-all duration-200 hover:scale-105 " style={{ backgroundImage: `url(${bg})`, hover:{backgroundImage: `url(${bgHover})`}}} 
                >
                    <img src={Razor} alt="sorry"
                         className="bg-lightBlue rounded-full" width="38px"/>
                    <h2 className="font-bold text-lg">Corporate Cards</h2>
                    <p className="text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                <Link to="/"
                    className="text-lightBlue500 font-bold  hover:text-lightBlue300 transition-all duration-200">
                    Know More
                    <i className="fa-solid fa-chevron-right fa-3xs mt-1 pl-2"></i>
                </Link>
                </div>







                <div className="font-mullish flex flex-col gap-4 border drop-shadow-xl px-6 py-6 rounded-md  transition-all duration-200 hover:scale-105 " style={{ backgroundImage: `url(${bg})`, hover:{backgroundImage: `url(${bgHover})`}}} 
                >
                    <img src={Razor} alt="sorry"
                         className="bg-lightBlue rounded-full" width="38px"/>
                    <h2 className="font-bold text-lg">Corporate Cards</h2>
                    <p className="text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                <Link to="/"
                    className="text-lightBlue500 font-bold  hover:text-lightBlue300 transition-all duration-200">
                    Know More
                    <i className="fa-solid fa-chevron-right fa-3xs mt-1 pl-2"></i>
                </Link>
                </div>





                <div className="font-mullish flex flex-col gap-4 border drop-shadow-xl px-6 py-6 rounded-md  transition-all duration-200 hover:scale-105 " style={{ backgroundImage: `url(${bg})`, hover:{backgroundImage: `url(${bgHover})`}}} 
                >
                    <img src={Razor} alt="sorry"
                         className="bg-lightBlue rounded-full" width="38px"/>
                    <h2 className="font-bold text-lg">Corporate Cards</h2>
                    <p className="text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month</p>
                <Link to="/"
                    className="text-lightBlue500 font-bold  hover:text-lightBlue300 transition-all duration-200">
                    Know More
                    <i className="fa-solid fa-chevron-right fa-3xs mt-1 pl-2"></i>
                </Link>
                </div>



               
            </div>
        </div>
    </div>
    );
}

export default NewFeature;