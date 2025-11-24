import { FaNodeJs, FaReact, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiPrisma, SiTurborepo, SiTypescript, SiExpress, SiPostgresql, SiJavascript, SiTailwindcss, SiRedux, SiRedis, SiDocker, SiApachekafka, SiShadcnui, SiWebstorm } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const iconMap = {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  RiNextjsFill,
  SiTurborepo,
  SiPrisma,
  SiTypescript,
  SiRedis,
  SiDocker,
  SiApachekafka,
  SiShadcnui,
  SiWebstorm
};

const TechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl -tracking-tight font-bold text-white mb-3 sm:mb-4">Technology Stack</h2>
        <p className="text-[#C1C2D3] tracking-wider text-base sm:text-lg">Powered by modern technologies</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {techStack.map((tech, index) => {
          const IconComponent = iconMap[tech.iconType];
          return (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9] to-[#38BDF8] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-[#0C0E23] border border-[#363749] rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-[#CBACF9]/50 transition-all duration-300">
                <div className="mb-3 sm:mb-4 flex justify-center">
                  {IconComponent && <IconComponent size={24} sm:size={28} lg:size={32} color={tech.color} />}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;