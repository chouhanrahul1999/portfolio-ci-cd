import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiPrisma, SiTurborepo, SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const iconMap = {
  FaReact,
  FaNodeJs,
  SiMongodb,
  SiExpress,
  RiNextjsFill,
  BiLogoTypescript,
  BiLogoPostgresql,
  SiTurborepo,
  SiPrisma,
  SiTypescript
};

const TechStack = ({ techStack }) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Stack</h2>
        <p className="text-[#C1C2D3] text-lg">Powered by modern technologies</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStack.map((tech, index) => {
          const IconComponent = iconMap[tech.iconType];
          return (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9] to-[#38BDF8] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-[#0C0E23] border border-[#363749] rounded-xl p-6 text-center hover:border-[#CBACF9]/50 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {IconComponent && <IconComponent size={32} color={tech.color} />}
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;