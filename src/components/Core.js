// import { Link } from "react-router-dom";
import core from "../images/core-features-sectionBg.svg"
import activation from "../images/instant-activation-icon.svg"
const Core =()=>{
    return(
        <div className="mt-14 pb-52 bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${core})`}}>
        <div className="flex flex-col items-center space-y-4">
           <h2 className="text-white font-bold font-mullish text-xl mt-32">Features</h2>
           <div className="h-1 w-4 bg-greenLight"></div>
           <p className="text-white font-mullish flex flex-col items-center">
               <span> Empower your business with all the right tools to accept online </span>
               <span>payments and provide the best customer experience</span>
           </p>
        </div>
        <div className="relative max-w-[1080px] w-10/12 mx-auto ">
   
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
           {/* <!-- box-1  --> */}
           
   
   
          <div className="flex flex-col gap-3">
           <img src={activation} alt="sorry"
           width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
        
   
          {/* <!-- box 2 --> */}
   
          <div className="flex flex-col gap-3">
           <img src={activation} alt="sorry"
           width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
          {/* <!-- box 3 --> */}
   
          <div className="flex flex-col gap-3">
           <img  src={activation} alt="sorry"
           width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
          {/* <!-- box-4  --> */}
   
          <div className="flex flex-col gap-3">
           <img  src={activation} alt="sorry"
           width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
          {/* <!-- box5  --> */}
   
          <div className="flex flex-col gap-3">
           <img  src={activation} alt="sorry"
           width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
   
          {/* <!-- box-6  --> */}
   
          <div className="flex flex-col gap-3">
           <img  src={activation} alt="sorry"  width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
        
   
        {/* <!-- box-7  --> */}
        <div className="flex flex-col gap-3">
           <img  src={activation} alt="sorry"  width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
   
        {/* <!-- box-8  --> */}
        <div className="flex flex-col gap-3">
           <img src={activation} alt="sorry"  width="40px"/>
           <h2 className="text-white font-mullish font-bold text-lg">Instant Activation</h2>
           <p className="text-white font-mullish max-w-[220px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation</p>
          </div>
   
   
        </div>
   
   
       </div>
   
       </div>
    );
}

export default Core;