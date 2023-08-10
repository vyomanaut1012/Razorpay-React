import heroShape from "../images/hero-shape.svg"
import hero from "../images/hero.jpeg";
const Hero = () => {
    return (
            <div class="relative bg-deepBlue ">
                <div class="flex flex-col lg:flex-row  mx-auto w-10/12 max-w-[1080px]  font-mullish justify-between items-center">

                    <div class="text-white space-y-8 ">
                        <h1 class="text-[2.5rem] font-bold leading-[1.2] ">Power your finance, grow your business </h1>
                        <div class="bg-greenLight h-1 w-6"></div>
                        <p class="opacity-70 text-[1.125rem] ">Accept payments from customers. Automate payouts to vendors &
                            employees. Never run out of working capital.</p>
                        <button
                            class="py-3 px-5 bg-lightBlue hover:bg-lightBlue500 font-bold transition-all duration-200 rounded-md">Sign
                            Up Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>

                    <img src={hero} alt="sorry" width="680px"/>
                </div>

                <div class="bg-white w-[100.10%] right-0 left-0">
                    <img src={heroShape} alt="sorry" class="w-full object-fill"/>
                </div>
            </div>

    );
}

export default Hero;