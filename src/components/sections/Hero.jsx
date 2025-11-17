import HeroText from "../ui/HeroText";
import Navbar from "../ui/Navbar";

const Hero = () => {
  return (
    <div  className="md:w-full sm:w-full  bg-[#000319]">
      <div className="bg-[url('/media/icons/grid-pattern.svg')] bg-cover bg-center bg-no-repeat h-full w-screen">
        <div className="flex justify-between items-start ">
          <div className="bg-[url('/media/icons/spotlight.svg')] bg-cover bg-center bg-no-repeat h-0 w-o md:h-60 md:w-120"></div>
          <div className="md:mt-12 mt-8">
            <Navbar />
          </div>
          <div className="bg-[url('/media/icons/spotlightright.svg')] bg-cover bg-center bg-no-repeat h-0 w-o md:h-60 md:w-120"></div>
        </div>
        <div className="flex flex-row justify-center items-start ">
          <HeroText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
