import featureDot from "../images/feature-section1-dottedrows.png"
import content from "../images/content-image.png"
import { Link } from "react-router-dom";
const Feature = () => {
    return (

        <div className="relative mt-[70px] overflow-hidden ">
            <img className="absolute inline-block -top-[8rem] left-[10rem] -z-10" src={featureDot}
                alt="sorry" loading="lazy" width="233" height="167" />


            <img src={featureDot} alt="sorry" loading="lazy" width="233" height="167"
                className="absolute inline-block top-[3rem] right-0 rotate-180" />


            <div className="relative max-w-[1080px] w-11/12 mx-auto pt-8">
                <h2 className=" font-mullish text-center text-6xl lg:text-3xl leading-[1.2] font-semibold ">Accept Payments with Razorpay Payment Suite</h2>
                <div className="bg-greenLight h-1 w-6 mt-4 mb-6 mx-auto"></div>

                <div className="flex flex-row mt-14 border bg-white p-10 py-12 rounded-md w-full max-w-[1080px]">
                    <div className="font-mullish flex flex-col  max-w-[500px]">
                        <h1 className="font-mullish text-[1.75rem] leading-10 font-semibold">Supercharge your business with the
                            all‑powerful
                            <span className="text-lightBlue">Payment Gateway</span>
                        </h1>
                        <ul className="space-y-2 mt-10">
                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">100+ Payment Methods</li>
                            </div>

                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">Industry Leading Success Rate</li>
                            </div>

                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">Superior Checkout Experience</li>
                            </div>

                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">Easy to Integrate</li>
                            </div>

                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">Instant Settlements from day 1</li>
                            </div>

                            <div className="flex flex-row">
                                <i className="fa-solid fa-check pt-3 text-greenLight fa-xl"></i>
                                <li className="ml-5">In-depth Reporting and Insights</li>
                            </div>

                        </ul>
                        <div className="flex flex-col-reverse mt-12 lg:flex-row lg:items-center ">
                            <button
                                className="px-6 py-4 bg-lightBlue hover:bg-lightBlue500 transition-all duration-200 text-lg font-mullish text-white rounded-md font-bold">
                                Sign Up Now<i className="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                            <div
                                className="flex items-center cursor-pointer group text-lightBlue500 hover:text-deepBlue transition-all duration-200 mb-8 lg:ml-8 lg:mt-6">
                                <Link href="#" className=" font-semibold text-lg">
                                    Know More
                                </Link>
                                <i className="fa-solid fa-chevron-right fa-2xs mt-1 pl-2"></i>
                            </div>
                        </div>
                    </div>
                    <img src={content} alt="sorry" width="600"
                        className="absolute lg:right-0 lg:top-[9.375rem] hidden md:top-[15rem] md:text-3xl md:right-0 md:max-w-[250px] md:block lg:max-w-[600px] lg:block" />
                </div>
            </div>
        </div>
    );
}

export default Feature;