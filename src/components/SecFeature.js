import { Link } from "react-router-dom"
import banking from "../images/buisness-banking.png"
import RazerWhite from "../images/asset 44.svg";
import flame from "../images/x-flame-1.png"
import FeaSec from "../images/feature-section-2BG.svg"
import {BoxSec2, Arrow} from "../SVGcomponent/BoxSec";
import Payment from "../images/payment-link-icon.svg"
const Feature = ()=>{

    // const color="#181C2E";
    return(
           
    <div className="bg-no-repeat pb-[32rem] mt-14 pt-[15.5rem] bg-cover"
    style={{backgroundImage: `url(${FeaSec})`}}>

    <div className="overflow-hidden">
        <img src={flame} alt="sorry" width="200px" className="absolute"/>
    </div>

    <div className="relative max-w-[1080px] w-11/12 mx-auto ">

        <div className="font-mullish  flex flex-col  items-center">
            <h2 className=" text-white text-5xl  lg:text-2xl font-bold ">Explore RazorpayX powered Business Banking</h2>
            <div className="w-6 h-1 bg-greenLight mt-4"></div>
        </div>

        <div className=" border px-10 py-12 border-slate-700 rounded-md mt-16">
            <div className="flex flex-col font-mullish justify-center gap-4 space-y-6 max-w-[550px]">
                <h2 className="text-3xl text-white font-semibold leading-[1.5]">Manage your company’s finances and
                    supercharge your business banking with
                    <img src={RazerWhite} alt="sorry" width="185px" className="inline"/>
                </h2>

                <ul className="text-white opacity-80 space-y-2 mt-7 ">
                    <li>
                        <i className="fa-solid fa-check pt-3 text-greenLight fa-xl mr-5"></i>
                        Open a fully digital current account
                    </li>


                    <li>
                        <i className="fa-solid fa-check pt-3 text-greenLight fa-xl mr-5"></i>
                        Automate payables & compliment payments
                    </li>


                    <li>
                        <i className="fa-solid fa-check pt-3 text-greenLight fa-xl mr-5"></i>
                        Simplify and track spends with Corporate cards
                    </li>


                    <li>
                        <i className="fa-solid fa-check pt-3 text-greenLight fa-xl mr-5"></i>
                        View financial insights at a glance
                    </li>
                </ul>
                <div>
                    <button
                        className="px-5 py-3 font-semibold text-white bg-lightBlue hover:bg-lightBlue500 transition-all duration-200 rounded-md">Sign
                        Up <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                    <Link href="#"
                        className="text-lightBlue500 font-bold ml-4 hover:text-lightBlue300 transition-all duration-200">
                        Know More
                        <i className="fa-solid fa-chevron-right fa-2xs mt-1 pl-2"></i>
                    </Link>
                </div>

            </div>
            <div className="absolute top-[9.375rem] right-[1.35rem] hidden lg:block">
                <img src={banking} alt="sorry" width="570px"/>
            </div>
        </div>





        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full py-10 gap-4">
                {/* <!-- box 1 --> */}

                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={Payment} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500  absolute top-3 right-3 z-[8]"/>
                     <div className=" absolute z-[100] w-full h-full flex flex-col  ">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-white text-[1.375rem] font-semibold leading-[1.2] mt-8">Current Account
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6 text-white text-opacity-70">Current accounts for fast-growing businesses, supported by the best-in-className technology</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link href="/">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                        
                    </div>
                    <BoxSec2/>
                </div>


                {/* box-2  */}


                <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={Payment} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500  absolute top-3 right-3 z-[8]"/>
                     <div className=" absolute z-[100] w-full h-full flex flex-col  ">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-white text-[1.375rem] font-semibold leading-[1.2] mt-8">Current Account
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6 text-white text-opacity-70">Current accounts for fast-growing businesses, supported by the best-in-className technology</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link href="/">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                        
                    </div>
                    <BoxSec2/>
                </div>


                          {/* box-3   */}

                          <div className="w-full min-h-[15rem] relative cursor-pointer ">

                    <img src={Payment} alt="sorry" width="50"
                        className="rounded-full  bg-lightBlue500  absolute top-3 right-3 z-[8]"/>
                     <div className=" absolute z-[100] w-full h-full flex flex-col  ">
                        <div className="font-mullish mx-auto">
                            <h2 className="text-white text-[1.375rem] font-semibold leading-[1.2] mt-8">Current Account
                            </h2>
                            <p className="opacity-70 max-w-[18rem] mt-6 text-white text-opacity-70">Current accounts for fast-growing businesses, supported by the best-in-className technology</p>
                        </div>

                        <div
                            className="text-lightBlue500 hover:text-lightBlue flex flex-row items-center font-mullish font-bold mt-8 ml-9">
                            <Link href="/">
                                Know More
                            </Link>
                            <i className="fa-solid fa-chevron-right fa-2xs mt-[0.125rem] pl-2"></i>
                        </div>
                        
                    </div>
                    <BoxSec2/>
                </div>
            </div>

        

            <div class="flex lg:flex-row flex-col justify-center items-center border py-8 font-mullish rounded-md border-gray-700">
                <h2 class="text-white font-semibold text-xl mr-5">Check out the live demo to learn how RazorpayX works. No sign-up required!</h2>
                <button class="py-3 pl-5 pr-24 rounded-md bg-lightBlue500 hover:bg-lightBlue transition-all duration-200 text-white  font-bold ">Check out the demo
                    <div class="w-12 h-[60px] bg-greenLight absolute right-[270px] top-[1295px] lg:right-12 lg:top-[950px] skew-x-[20deg] flex  justify-center items-center">
                                    {/* <!--arrow--> */}
                                 <Arrow/>
                     </div>
                </button>
             </div>


        </div>
        </div>
     
 
    )
}

export default Feature;