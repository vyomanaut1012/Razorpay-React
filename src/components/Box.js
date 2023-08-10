import paymentIcon from "../images/payment-link-icon.svg"
import paymentPageIcon from "../images/payment-pages-icon.svg"
import {BoxSec} from "../SVGcomponent/BoxSec";
import { Link } from "react-router-dom";
const Box = () => {
    return (
        <div className="relative max-w-[1080px] w-11/12 mx-auto pt-8">

            <div className="grid grid-cols-1 w-full py-10 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* <!-- box 1 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500  absolute top-3 right-3 z-[8]" />



                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Links
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Share payment link via an email, SMS, messenger,
                                chatbot etc. and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="/">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                       
                    </div>
                    <BoxSec/>
                </div>

                {/* <!-- box 2 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentPageIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500 transition-all duration-200  absolute top-3 right-3 z-[8]" />

                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Pages
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Take your store online instantly with zero coding..
                                and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="#">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                       
                    </div>
                    <BoxSec />
                </div>

                {/* box-3  */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentPageIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500 transition-all duration-200  absolute top-3 right-3 z-[8]" />

                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Pages
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Take your store online instantly with zero coding..
                                and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="#">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                    </div>
                    <BoxSec />
                </div>



                {/* <!-- box 4 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentPageIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500 transition-all duration-200  absolute top-3 right-3 z-[8]" />

                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Pages
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Take your store online instantly with zero coding..
                                and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="#">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                    </div>
                    <BoxSec />
                </div>



                {/* <!-- box 5 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentPageIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500 transition-all duration-200  absolute top-3 right-3 z-[8]" />

                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Pages
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Take your store online instantly with zero coding..
                                and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="#">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                          
                        </div>
                    </div>
                    <BoxSec/>
                    
                </div>

                {/* <!-- box 6 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={paymentPageIcon} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500 transition-all duration-200  absolute top-3 right-3 z-[8]" />

                    <div className=" absolute z-[100] w-full h-full flex flex-col  justify-center">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-deepBlue text-[1.375rem] font-semibold leading-[1.2] mt-8">Payment Pages
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6">Take your store online instantly with zero coding..
                                and get paid immediately</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link to="#">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                   
                    </div>
                    <BoxSec/>
                </div>


            </div>
        </div>
    )
}

export default Box;