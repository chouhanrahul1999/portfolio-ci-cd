import { ArrowUpRight } from "lucide-react";

const HeroText = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "projects";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 md:mt-0 gap-6">
      <div className="text-white md:text-[15px] text-[12px] font-medium tracking-widest">
      DYNAMIC WEB EXPERIENCES WITH REACT & NEXT
      </div>
      <div>
        <div className="md:max-w-5xl text-center">
          <span className="text-white md:font-extrabold md:leading-15 leading-10 font-bold text-[48px] md:text-6xl ">
            Transforming Concepts into Seamless{" "}
          </span>{" "}
          <span className="text-[#CBACF9] md:leading-18 leading-10 font-bold text-[48px] md:font-extrabold md:text-6xl">
            User Experiences
          </span>
        </div>
        <div></div>
      </div>
      <div className="text-white text-center font-normal text-[16px] md:text-[24px] px-6 md:tracking-widest">
        Hi! I’m Rahul Singh, a full‑stack developer based in India
      </div>
      <button
        onClick={handleScrollToProjects}
        className="flex items-center justify-center gap-2 text-center w-[90vw] md:w-fit text-[16px] md:text-[18px] md:px-12 mt-2 md:mt-8 py-4 border border-[#272A3C] bg-gradient-to-r from-[#161A31] to-[#06091F] text-white font-semibold rounded-md md:rounded-xl shadow-md hover:bg-[#161A31] hover:border-[#CBACF9]/50 transition-all duration-300"
      >
        See my work{" "}
        <span>
          <ArrowUpRight />
        </span>
      </button>
    </div>
  );
};

export default HeroText;
