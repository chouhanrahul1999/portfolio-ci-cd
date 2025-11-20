const SectionHeader = ({ badge, title, description }) => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
        <div className="w-2 h-2 bg-[#CBACF9] rounded-full animate-pulse"></div>
        <span className="text-[#CBACF9] text-sm font-medium">
          {badge}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl tracking-wide font-bold bg-gradient-to-r from-white to-[#CBACF9] bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      <p className="text-[#C1C2D3] tracking-wide text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;