import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiApachekafka,
  SiNginx,
  SiDigitalocean
} from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

const TechBanner = () => {
  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: BiLogoJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" }
  ];

  return (
    <div className="w-full overflow-hidden bg-transparent py-6 md:py-10 mt-8 md:mt-12 relative">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 w-[80px] md:w-[180px] h-full gradient-fade-left z-10 pointer-events-none"></div>
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 w-[80px] md:w-[180px] h-full gradient-fade-right z-10 pointer-events-none"></div>
      <div className="flex animate-scroll-right">
        {/* First set */}
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-6 mx-6 md:mx-16 whitespace-nowrap">
            <tech.icon className="text-2xl md:text-5xl" style={{ color: tech.color }} />
            <span className="text-white font-bold text-lg md:text-3xl">{tech.name}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {techStack.map((tech, index) => (
          <div key={`duplicate-${index}`} className="flex items-center gap-3 md:gap-6 mx-6 md:mx-16 whitespace-nowrap">
            <tech.icon className="text-2xl md:text-5xl" style={{ color: tech.color }} />
            <span className="text-white font-bold text-lg md:text-3xl">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBanner;