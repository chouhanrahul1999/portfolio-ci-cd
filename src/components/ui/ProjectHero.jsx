import { ArrowLeft, Code, Play, Zap, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectHero = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#000319]">
      <div className="bg-[url('/media/icons/grid-pattern.svg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000319]/10 to-[#000319]"></div>
        <div className="absolute top-0 left-0 bg-[url('/media/icons/spotlight.svg')] bg-cover bg-center bg-no-repeat h-0 w-0 md:h-60 md:w-120"></div>
        <div className="absolute top-0 right-0 bg-[url('/media/icons/spotlightright.svg')] bg-cover bg-center bg-no-repeat h-0 w-0 md:h-60 md:w-120"></div>
        <div className="relative container mx-auto px-4 pt-12 pb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-white hover:text-[#CBACF9] transition-all duration-300 mb-12 rounded-lg px-4 py-2"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>

          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-[#CBACF9]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
              <Code size={14} className="text-[#CBACF9]/80" />
              <span className="text-[#CBACF9]/80 text-xs font-semibold tracking-wide uppercase">
                Featured Project
              </span>
              <div className="w-1.5 h-1.5 bg-[#CBACF9] rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-5xl -tracking-tight font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg -tracking-tight md:text-xl font-normal text-[#C1C2D3] max-w-4xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Overview */}
          
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#CBACF9]/40 via-[#38BDF8]/30 to-[#6366F1]/40 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-[#0C0E23] via-[#0F1419] to-[#161A31] border border-[#363749] rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-8 border border-[#363749]">
                      <div className="w-full h-64 bg-gradient-to-br from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                        <Play size={48} className="text-[#CBACF9]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl -tracking-tight  font-semibold text-white mb-6">
                      Project Overview
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="text-[#CBACF9] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-lg font-semibold">
                            Performance Focused
                          </h3>
                          <p className="text-[#C1C2D3] text-sm">
                            Optimized for speed and efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="text-[#38BDF8] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-lg font-semibold">
                            Security First
                          </h3>
                          <p className="text-[#C1C2D3] text-sm">
                            Built with security best practices
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sparkles className="text-[#6366F1] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-lg font-semibold">
                            User Experience
                          </h3>
                          <p className="text-[#C1C2D3] text-sm">
                            Intuitive and engaging interface design
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
