import HeroText from "../ui/HeroText";
import Navbar from "../ui/Navbar";
import { getImagePath } from "../../utils/imagePath";

const Hero = () => {
  const gridPattern = getImagePath("/media/icons/grid-pattern.svg");
  const spotlight = getImagePath("/media/icons/spotlight.svg");
  const spotlightRight = getImagePath("/media/icons/spotlightright.svg");

  return (
    <div  className="md:w-full sm:w-full  bg-[#000319]">
      <div className="bg-cover bg-center bg-no-repeat h-full w-screen" style={{ backgroundImage: `url(${gridPattern})` }}>
        <div className="flex justify-between items-start ">
          <div className="bg-cover bg-center bg-no-repeat h-0 w-o md:h-60 md:w-120" style={{ backgroundImage: `url(${spotlight})` }}></div>
          <div className="md:mt-12 mt-8">
            <Navbar />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-0 w-o md:h-60 md:w-120" style={{ backgroundImage: `url(${spotlightRight})` }}></div>
        </div>
        <div className="flex flex-row justify-center items-start ">
          <HeroText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
