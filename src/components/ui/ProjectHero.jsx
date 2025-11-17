import { ArrowLeft, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectHero = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000319]/50 to-[#000319]"></div>
      <div className="relative container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white hover:text-[#CBACF9] transition-colors mb-8 bg-[#0C0E23]/50 backdrop-blur-sm border border-[#363749] rounded-lg px-4 py-2"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CBACF9]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
            <Code size={16} className="text-[#CBACF9]" />
            <span className="text-[#CBACF9] text-sm font-medium">Featured Project</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#C1C2D3] max-w-4xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;