import { Play, Zap, Shield, Code } from "lucide-react";
import { useParams } from "react-router-dom";
import ProjectHero from "../ui/ProjectHero";
import TechStack from "../ui/TechStack";
import ProjectImpact from "../ui/ProjectImpact";
import ProjectCTA from "../ui/ProjectCTA";

const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams();
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <div className="text-white p-8">Project not found: {projectId}</div>;
  }

  return (
    <div className="w-full bg-[#000319] min-h-screen">
      <div className="bg-[url('/src/assets/grid-pattern.svg')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
        <ProjectHero project={project} />

        <div className="container mx-auto px-4">
          {/* Project Showcase */}
          <div className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#CBACF9] to-[#38BDF8] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0C0E23] border border-[#363749] rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-8 border border-[#363749]">
                      <div className="w-full h-64 bg-gradient-to-br from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                        <Play size={48} className="text-[#CBACF9]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="text-[#CBACF9] mt-1" size={20} />
                        <div>
                          <h3 className="text-white font-semibold">Performance Focused</h3>
                          <p className="text-[#C1C2D3] text-sm">Optimized for speed and efficiency</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="text-[#38BDF8] mt-1" size={20} />
                        <div>
                          <h3 className="text-white font-semibold">Security First</h3>
                          <p className="text-[#C1C2D3] text-sm">Built with security best practices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TechStack techStack={project.techStack} />

          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-[#C1C2D3] text-lg">What makes this project special</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-xl p-8 h-full hover:border-[#CBACF9]/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#CBACF9]/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-[#CBACF9] rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-[#C1C2D3] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Implementation</h2>
              <p className="text-[#C1C2D3] text-lg">Architecture decisions and code highlights</p>
            </div>
            <div className="bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="text-[#CBACF9]" size={24} />
                      <h3 className="text-2xl font-bold text-white">Architecture</h3>
                    </div>
                    <div className="bg-[#161A31] border border-[#363749] rounded-lg p-4 mb-6">
                      <p className="text-[#CBACF9] font-semibold">{project.implementation?.architecture}</p>
                    </div>
                    <div className="space-y-3">
                      {project.implementation?.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#38BDF8] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-[#C1C2D3] text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-6 h-6 bg-[#38BDF8] rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Code Snippet</h3>
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#363749] rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-[#C1C2D3] whitespace-pre-wrap font-mono leading-relaxed">
                        <code>{project.implementation?.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Demonstration */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Walkthrough</h2>
              <p className="text-[#C1C2D3] text-lg">Key features and functionality in action</p>
            </div>
            <div className="space-y-12">
              {project.demonstrations?.map((demo, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-2xl overflow-hidden group-hover:border-[#CBACF9]/30 transition-all duration-300">
                    <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 p-8`}>
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-4`}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#CBACF9] to-[#38BDF8] rounded-lg flex items-center justify-center text-black font-bold text-sm">
                            {index + 1}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                        </div>
                        <p className="text-[#C1C2D3] text-lg leading-relaxed">{demo.description}</p>
                        <div className="flex items-center gap-2 text-[#CBACF9] text-sm">
                          <div className="w-2 h-2 bg-[#CBACF9] rounded-full"></div>
                          <span>Interactive Feature</span>
                        </div>
                      </div>
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="relative group/image">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/40 to-[#38BDF8]/40 rounded-xl blur opacity-0 group-hover/image:opacity-100 transition duration-300"></div>
                          <div className="relative aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl border border-[#363749] overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-[#CBACF9]/10 to-[#38BDF8]/10 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#CBACF9] to-[#38BDF8] rounded-xl mx-auto mb-3 flex items-center justify-center">
                                  <Play size={24} className="text-white ml-1" />
                                </div>
                                <p className="text-[#C1C2D3] text-sm">Demo Screenshot</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ProjectImpact impact={project.impact} />
          <ProjectCTA githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;