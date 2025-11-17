const ProjectImpact = ({ impact }) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Impact & Results</h2>
        <p className="text-[#C1C2D3] text-lg">Real-world outcomes and measurable success</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Metrics */}
        <div className="bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-[#CBACF9] to-[#38BDF8] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-white">Key Metrics</h3>
          </div>
          <div className="space-y-4">
            {impact?.metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-[#161A31] border border-[#363749] rounded-lg">
                <span className="text-[#C1C2D3] text-sm">{metric.label}</span>
                <span className="text-[#CBACF9] font-bold">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Outcomes */}
        <div className="bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
          </div>
          <div className="space-y-4">
            {impact?.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#C1C2D3] text-sm leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImpact;