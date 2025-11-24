import JobCard from "../ui/JobCard";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiPrisma, SiTurborepo, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiWebstorm } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { getImagePath } from "../../utils/imagePath";


const Projects = () => {
  return (
    <div id="projects" className=" w-full bg-[#000319]">
      <div className="flex justify-center items-center flex-col lg:pt-24 pt-12 ">
        <div className="text-center px-8 leading-8">
          <span className="lg:text-[48px] md:text-[44px] text-[30px] font-bold  text-white">
            A small selection of{" "}
          </span>
          <span className="text-[30px] md:text-[44px] lg:text-[48px] font-bold text-[#CBACF9] pl-3">
            recent projects
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 pt-16">
          <JobCard
            img={getImagePath("/media/screenshots/betteruptime.svg")}
            h1={"BetterUptime - Web Monitoring App"}
            p={
              "Event-driven microservices with Redis Streams and Kafka for multi-region website monitoring. Features 3-minute detection, real-time notifications, and scalable worker architecture with PostgreSQL and Docker deployment."
            }
            icon1={<RiNextjsFill size={24} color="FFFFFF" />}
            icon2={<SiRedis size={24} color="3178C6" />}
            icon3={<FaDocker size={24} color="38BDF8" />}
            icon4={<SiApachekafka size={24} color="ffffff" />}
            projectId="betteruptime"
          />

          <JobCard
            img={getImagePath("/media/screenshots/excelidrawapp.svg")}
            h1={"Excelidraw- A Whiteboard App"}
            p={
              "Built Excelidraw, a real-time collaborative whiteboard app with HTTP and WebSocket backends, a Next.js frontend, and PostgreSQL using Prisma ORM. Managed the project in a Turborepo monorepo for efficient development."
            }
            icon1={<RiNextjsFill size={24} color="FFFFFF" />}
            icon2={<BiLogoTypescript size={24} color="3178C6" />}
            icon3={<SiExpress size={24} color="38BDF8" />}
            icon4={<SiWebstorm size={24} color="#FF6B6B" />}
            projectId="excelidraw"
          />

          <JobCard
            img={getImagePath("/media/screenshots/zapier.svg")}
            h1={"Zapier - Workflow Automation App"}
            p={
              "Full-stack microservices platform with visual workflow builder, event-driven processing via Kafka, and distributed worker architecture. Features drag-and-drop UI, webhook triggers, and scalable action execution with PostgreSQL."
            }
            icon1={<FaReact size={24} color="FFFFFF" />}
            icon2={<BiLogoTypescript size={24} color="3178C6" />}
            icon3={<BiLogoPostgresql size={24} color="38BDF8" />}
            icon4={<SiApachekafka size={24} color="ffffff" />}
            projectId="zapier-clone"
          />
          <JobCard
            img={getImagePath("/media/icons/crtd.svg")}
            h1={"CRTD Technology Web Application"}
            p={
              "Developed and deployed a Web for CRTD Technology in MERN. Implemented backend in node-js, frontend using React, and database features using mongodb. Automated deployment on a VM using a CI/CD pipeline."
            }
            icon1={<FaReact size={24} color="38BDF8" />}
            icon2={<FaNodeJs size={24} color="ffffff" />}
            icon3={<SiMongodb size={24} color="00684A" />}
            icon4={<DiNodejs size={24} color="38BDF8" />}
            projectId="crtd-technology"
          />

          <JobCard
            img={getImagePath("/media/icons/paytm.svg")}
            h1={"Digital payment application"}
            p={
              "A digital payment application built with Next.js, TypeScript, and PostgreSQL, featuring secure authentication, P2P transfers, and real-time transaction tracking and interaction with bank."
            }
            icon1={<RiNextjsFill size={24} color="FFFFFF" />}
            icon2={<BiLogoTypescript size={24} color="3178C6" />}
            icon3={<BiLogoPostgresql size={24} color="38BDF8" />}
            icon4={<SiPrisma size={24} color="38BDF8" />}
            projectId="digital-payment"
          />
          <JobCard
            img={getImagePath("/media/icons/brainly.svg")}
            h1={"Brainly - Knowledge Hub"}
            p={
              "Brainly organizes learning content (YouTube/Twitter) into personal knowledge bases. Features dashboard with stats, content management, and sharing. Built with React, TypeScript, Node.js. Shows full-stack skills."
            }
            icon1={<FaReact size={24} color="38BDF8" />}
            icon2={<BiLogoTypescript size={24} color="3178C6" />}
            icon3={<SiMongodb size={24} color="00684A" />}
            icon4={<SiExpress size={24} color="38BDF8" />}
            projectId="brainly"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
