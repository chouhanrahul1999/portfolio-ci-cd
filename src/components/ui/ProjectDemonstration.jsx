import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectDemonstration = ({ demonstrations }) => {
  const [currentSignupImage, setCurrentSignupImage] = useState(0);
  const [currentDashboardImage, setCurrentDashboardImage] = useState(0);
  
  if (!demonstrations || demonstrations.length === 0) {
    return null;
  }
  
  // Auto-rotate signup images for first demo if available
  useEffect(() => {
    const firstDemo = demonstrations[0];
    if (firstDemo?.signupImages && firstDemo.signupImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSignupImage((prev) => (prev + 1) % firstDemo.signupImages.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  // Auto-rotate dashboard images for second demo if available
  useEffect(() => {
    const secondDemo = demonstrations[1];
    if (secondDemo?.dashboardImages && secondDemo.dashboardImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentDashboardImage((prev) => (prev + 1) % secondDemo.dashboardImages.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 bg-[#CBACF9] rounded-full animate-pulse"></div>
          <span className="text-[#CBACF9] text-sm font-medium">Interactive Experience</span>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-wide font-bold bg-gradient-to-r from-white to-[#CBACF9] bg-clip-text text-transparent mb-4">
          Experience My Application
        </h2>
        <p className="text-[#C1C2D3] tracking-wide text-lg max-w-2xl mx-auto">
          Step through the user journey and see how each feature works in real-time
        </p>
      </div>
      <div className="space-y-16">
        {demonstrations.map((demo, index) => (
          <div key={index} className="group relative">
            {/* Step connector line */}
            {index < demonstrations.length - 1 && (
              <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-[#CBACF9]/30 to-transparent transform -translate-x-1/2 z-10"></div>
            )}
            
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CBACF9]/15 to-[#38BDF8]/15 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-3xl overflow-hidden group-hover:border-[#CBACF9]/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#CBACF9]/10">
              <div
                className={`grid ${
                  (index === 0 && demo.signupImages) || (index === 1 && demo.dashboardImages) 
                    ? "lg:grid-cols-[1fr_1.3fr]" 
                    : "lg:grid-cols-2"
                } gap-8 p-8`}
              >
                {/* Image Section */}
                <div className={`${index === 0 ? "lg:order-2" : index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group/image cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#CBACF9]/25 to-[#38BDF8]/25 rounded-2xl blur-lg opacity-0 group-hover/image:opacity-40 transition-all duration-500"></div>
                    <div className="relative">
                      {/* Browser mockup */}
                      <div className="bg-[#1a1a2e] rounded-t-xl border border-[#363749] border-b-0">
                        <div className="flex items-center gap-2 px-4 py-3">
                          <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
                          <div className="flex-1 bg-[#0a0a0a] rounded mx-4 px-3 py-1">
                            <span className="text-[#C1C2D3]/60 text-xs">{demo.url || 'localhost:3000'}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screen content */}
                      <div className={`${(index === 0 && demo.signupImages) || (index === 1 && demo.dashboardImages) ? 'aspect-[5/3]' : 'aspect-video'} bg-gradient-to-br from-[#0F1629] to-[#16213e] rounded-b-xl border border-[#363749] border-t-0 overflow-hidden group-hover/image:border-[#CBACF9]/30 transition-all duration-500`}>
                        {/* Show signup images for first demo if available */}
                        {index === 0 && demo.signupImages ? (
                          <div className="relative w-full h-full">
                            {demo.signupImages.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                  imgIndex === currentSignupImage 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-0 scale-105'
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`Signup step ${imgIndex + 1}`}
                                  className="w-full h-full object-contain object-top"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            ))}
                            
                            {/* Image indicators */}
                            {demo.signupImages.length > 1 && (
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {demo.signupImages.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setCurrentSignupImage(imgIndex)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      imgIndex === currentSignupImage 
                                        ? 'bg-[#CBACF9] scale-125' 
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ) : index === 1 && demo.dashboardImages ? (
                          <div className="relative w-full h-full">
                            {demo.dashboardImages.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                  imgIndex === currentDashboardImage 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-0 scale-105'
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`Dashboard view ${imgIndex + 1}`}
                                  className="w-full h-full object-contain object-top"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            ))}
                            
                            {/* Image indicators */}
                            {demo.dashboardImages.length > 1 && (
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {demo.dashboardImages.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setCurrentDashboardImage(imgIndex)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      imgIndex === currentDashboardImage 
                                        ? 'bg-[#CBACF9] scale-125' 
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#CBACF9]/8 to-[#38BDF8]/8 flex items-center justify-center relative">
                            {/* Simulated UI elements */}
                            <div className="absolute inset-4 border border-[#CBACF9]/20 rounded-lg opacity-30"></div>
                            <div className="absolute top-8 left-8 right-8 h-2 bg-[#CBACF9]/20 rounded opacity-40"></div>
                            <div className="absolute top-12 left-8 w-1/3 h-1 bg-[#38BDF8]/30 rounded opacity-50"></div>
                            
                            <div className="text-center transform group-hover/image:scale-102 transition-all duration-500 z-10">
                              <div className="relative mb-4">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#CBACF9]/40 to-[#38BDF8]/40 rounded-2xl blur opacity-40 group-hover/image:opacity-55 transition-opacity duration-300"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-[#CBACF9]/60 to-[#38BDF8]/60 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                                  <Play size={28} className="text-white/90 ml-1 group-hover/image:scale-105 transition-transform duration-300" />
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-white font-medium group-hover/image:text-[#CBACF9]/90 transition-colors duration-300">
                                  Try It Live
                                </p>
                                <p className="text-[#C1C2D3]/70 text-xs">
                                  Click to interact
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                </div>
                
                {/* Text Content Section */}
                <div className={`${index === 0 ? "lg:order-1" : index % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center space-y-6`}>
                  {/* Step indicator */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CBACF9]/40 to-[#38BDF8]/40 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-102 transition-transform duration-300">
                        <span className="text-white/90 font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#CBACF9]/80 text-xs font-medium uppercase tracking-wide">Step {index + 1}</span>
                        <div className="w-1 h-1 bg-[#CBACF9]/60 rounded-full"></div>
                        <span className="text-[#C1C2D3]/60 text-xs">{demo.userAction || 'User Action'}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#CBACF9]/90 transition-colors duration-300">
                        {demo.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Technologies Used - in text section */}
                  {demo.technologies && (
                    <div>
                      <h5 className="text-[#38BDF8]/80 font-medium text-xs uppercase tracking-wide mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {demo.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded text-[#38BDF8] text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* User Journey */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-lg blur opacity-40"></div>
                      <div className="relative bg-gradient-to-r from-[#0F1419] to-[#1A1B3A] border border-[#CBACF9]/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#CBACF9]/15 rounded-lg flex items-center justify-center mt-0.5">
                            <Play size={14} className="text-[#CBACF9]/70" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">What happens here?</h4>
                            {demo.description.includes('•') ? (
                              <div className="space-y-1">
                                {demo.description.split('•').filter(item => item.trim()).map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-sm">
                                    <div className="w-1 h-1 bg-[#CBACF9]/60 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-[#C1C2D3] leading-relaxed">{item.trim()}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-[#C1C2D3] text-sm leading-relaxed">{demo.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Demo Details */}
                  <div className="space-y-3">
                    {/* Expected outcome */}
                    {demo.outcome && (
                      <div className="p-3 bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 bg-green-400/70 rounded-full"></div>
                          <span className="text-green-400/80 text-xs font-medium uppercase tracking-wide">Expected Result</span>
                        </div>
                        <p className="text-green-100/60 text-xs leading-relaxed">{demo.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDemonstration;