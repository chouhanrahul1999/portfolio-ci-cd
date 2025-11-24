import ExperienceCard from "../ui/ExperanceCard";
import { getImagePath } from "../../utils/imagePath";

const Experience = () => {
  return (
    <div id="experience" className="w-full  bg-[#000319] flex flex-col  items-center pt-24  ">
      <div className="lg:text-[48px] md:text-[44px] text-[30px] font-bold">
        <span className="text-white">My </span>
        <span className="text-[#CBACF9]"> work experience </span>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12 gap-6 pt-12 ">
        <ExperienceCard
          img={getImagePath("/media/icons/group1.svg")}
          heading="Frontend Developer Intern"
          para="Played a key role in building a web‑based platform at Wyreflow Technology using React, improving interactivity and UX."
        />
        <ExperienceCard
          img={getImagePath("/media/icons/group2.svg")}
          heading="Personal Projects"
          para="Built a real‑time whiteboard, a payments app, and a knowledge hub—end‑to‑end (React, Node, SQL/NoSQL) with auth and CI/CD."
        />
        <ExperienceCard
          img={getImagePath("/media/icons/group3.svg")}
          heading="Team Lead"
          para="Led the frontend team at Wyreflow Technology; established architecture and standards, mentored engineers, and delivered features on schedule."
        />
        <ExperienceCard
          img={getImagePath("/media/icons/group4.svg")}
          heading="Freelance Dev Project"
          para="I haven't taken on any freelance projects yet, but I'm genuinely excited and motivated to start contributing."
        />
      </div>
    </div>
  );
};

export default Experience;
