import { Github, ExternalLink } from "lucide-react";

const ProjectCTA = ({ githubUrl, liveUrl }) => {
  return (
    <div className="text-center pb-20">
      <div className="bg-gradient-to-r from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-6">Explore the Project</h2>
        <p className="text-[#C1C2D3] mb-8 max-w-2xl mx-auto">Check out the source code and see the project in action</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#0C0E23] border border-[#363749] text-white px-8 py-4 rounded-xl hover:bg-[#161A31] hover:border-[#CBACF9]/50 transition-all duration-300 font-semibold"
          >
            <Github size={20} />
            View Source Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#CBACF9] to-[#38BDF8] text-black px-8 py-4 rounded-xl hover:from-[#B794F6] hover:to-[#2563EB] transition-all duration-300 font-semibold"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;