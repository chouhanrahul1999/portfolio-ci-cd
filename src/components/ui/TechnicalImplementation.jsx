import { Code, Terminal, Layers } from "lucide-react";

const TechnicalImplementation = ({ implementation }) => {
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-bold text-white mb-3 sm:mb-4">
          Technical Implementation
        </h2>
        <p className="text-[#C1C2D3] tracking-wide text-base sm:text-lg">
          Architecture decisions and code highlights
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
        {/* Architecture Section */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 h-full hover:border-[#CBACF9]/20 transition-all duration-300 w-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#CBACF9]/60 to-[#38BDF8]/60 rounded-lg flex items-center justify-center shadow-sm shadow-[#CBACF9]/10">
                <Layers size={16} sm:size={18} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Architecture
              </h3>
            </div>
            
            {/* Architecture Title Card */}
            <div className="relative mb-6">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/15 to-[#38BDF8]/15 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gradient-to-r from-[#0F1419] to-[#1A1B3A] border border-[#CBACF9]/15 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#CBACF9]/70 rounded-full animate-pulse"></div>
                  <span className="text-[#CBACF9]/80 text-xs font-medium uppercase tracking-wide">System Design</span>
                </div>
                <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                  {implementation?.architecture}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-[#CBACF9]/80 font-medium text-xs uppercase tracking-wide mb-4">Key Highlights</h4>
              <div className="space-y-3">
                {implementation?.highlights.map((highlight, index) => (
                  <div key={index} className="group/item">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/8 border border-white/8 hover:border-[#CBACF9]/15 transition-all duration-300">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#CBACF9]/70 to-[#38BDF8]/70 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-[#C1C2D3] text-xs sm:text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippet Section */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38BDF8]/10 to-[#CBACF9]/10 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-lg sm:rounded-xl p-6 sm:p-8 h-full hover:border-[#38BDF8]/20 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#38BDF8]/60 to-[#CBACF9]/60 rounded-lg flex items-center justify-center shadow-sm shadow-[#38BDF8]/10">
                <Terminal size={16} sm:size={18} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Code Snippet
              </h3>
            </div>
            
            {/* Code Title Card */}
            <div className="relative mb-6">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38BDF8]/15 to-[#CBACF9]/15 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gradient-to-r from-[#0F1419] to-[#1A1B3A] border border-[#38BDF8]/15 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#38BDF8]/70 rounded-full animate-pulse"></div>
                  <span className="text-[#38BDF8]/80 text-xs font-medium uppercase tracking-wide">Implementation</span>
                </div>
                <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                  Live code example showcasing key functionality
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div>
              <h4 className="text-[#38BDF8]/80 font-medium text-xs uppercase tracking-wide mb-4">Code Example</h4>
              <div className="bg-[#0A0A0A] border border-[#363749] rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] px-4 py-2 border-b border-[#363749]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#EF4444]/70 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#F59E0B]/70 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#10B981]/70 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-[#C1C2D3] whitespace-pre-wrap font-mono leading-relaxed">
                    <code>{implementation?.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalImplementation;