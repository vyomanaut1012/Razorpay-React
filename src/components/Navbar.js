import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import india from "../images/india-flag.svg";
const Navbar=()=>{
    return(
      <div className=" bg-deepBlue">
      <div className=" flex  justify-between mx-auto w-[1080px] items-center relative">

         <Link to="/" class="py-7 pr-7 cursor-pointer">
                <img src={logo} alt="sorry" width="125px" height="30px" />
         </Link>
         <ul className="lg:flex space-x-6 hidden">
                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Payment</Link>
                    <div className="bg-lightBlue hidden group-hover:block absolute w-full h-1 bottom-0"></div>
                </li>

                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/about">Banking+</Link>
                    <div className="bg-lightBlue hidden group-hover:block absolute w-full h-1 bottom-0"></div>
                </li>


                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Line of credit</Link>
                </li>


                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Payroll</Link>
                </li>

                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Resources</Link>
                    <div className="bg-lightBlue hidden group-hover:block absolute w-full h-1 bottom-0"></div>
                </li>

                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Support</Link>
                    <div className="bg-lightBlue hidden group-hover:block absolute w-full h-1 bottom-0"></div>
                </li>

                <li
                    className="text-white font-mullish hover:text-lightBlue cursor-pointer transition-all duration-200 relative py-7 group">
                    <Link to="/">Pricing</Link>
                    <div className="bg-lightBlue hidden group-hover:block absolute w-full h-1 bottom-0"></div>
                </li>
            </ul>

            <div className="lg:flex hidden space-x-6">

                <img src={india} alt="sww" width="33px" height="20px" />

                <button
                    class="py-3 px-5 border text-sm text-white font-mullish rounded-sm border-lightBlue font-bold">Log
                    In</button>
                <button
                    class="py-3 px-7 font-mullish text-base bg-white text-lightBlue300 hover:text-lightBlue500 rounded-sm font-bold">Sign
                    Up
                    <i class="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>
    </div> 
    </div>
    );
}

export default Navbar;