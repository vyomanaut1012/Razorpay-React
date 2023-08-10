import companies from "../images/comanies.png";
const LastSection=()=>{
    return(

     
        <div className="-z-[100] mt-16 lg:-mt-[60px] bg-[#f5f8fe]">
        
        <div className="relative max-w-[1080px] w-11/12 mx-auto  ">
           <div className="flex lg:flex-row flex-col justify-between items-center">
    
           <div className="flex flex-col gap-6 justify-start">
            <div className="font-mullish max-w-[440px] ">
                <h2 className="text-2xl font-bold">Join the 50,00,000 businesses using Razorpay</h2>
                <div className="w-6 h-1 bg-greenLight"></div>
                <p className="mt-4 opacity-80">We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.</p>
                <p className="opacity-80">Focus on your business while we handle the complexities of payments for you.</p>
               
            </div>
            <div>
            <button
            className="py-3 px-4 bg-lightBlue hover:bg-lightBlue500 text-white font-bold transition-all duration-200 rounded-md">Sign Up Now <i className="fa-solid fa-arrow-right ml-2"></i>
           </button>
        </div>
        </div>
            <div className=" overflow-y-hidden h-[500px] w-[500px] relative">
                {/* <div style="background: linear-gradient(180deg, #f4f8ff, #fff0)"
                     className="absolute w-[450px] h-[150px] top-0 z-50">    
                </div> */}
        
                <img src={companies} alt="sorry"  width="480px"
                     className="absolute  h-auto object-cover  "/>
    
                {/* <div style="background: linear-gradient(0deg, #f4f8ff, #fff0)"
                     className="absolute w-full h-[150px] bottom-0 z-50">
                </div> */}
            </div>
           </div>
           
        </div>
    
           
        </div>
    )
}

export default LastSection;