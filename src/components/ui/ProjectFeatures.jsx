import { Zap, Shield, Database, Workflow, Search, Share, Users, Code2, Smartphone, Lock, BarChart3, Settings, Globe, Bell, Activity, Layers, Palette, GitBranch, Webhook } from "lucide-react";

const featureIcons = {
  "Responsive Design": { icon: Smartphone, color: "#06B6D4" },
  "RESTful API": { icon: Code2, color: "#10B981" },
  "Database Integration": { icon: Database, color: "#8B5CF6" },
  "CI/CD Pipeline": { icon: Workflow, color: "#F59E0B" },
  "Real-time Collaboration": { icon: Users, color: "#EF4444" },
  "Drawing Tools": { icon: Settings, color: "#6366F1" },
  "Room Management": { icon: Share, color: "#EC4899" },
  "Data Persistence": { icon: Database, color: "#8B5CF6" },
  "Secure Authentication": { icon: Lock, color: "#F59E0B" },
  "P2P Transfers": { icon: Zap, color: "#FBBF24" },
  "Bank Integration": { icon: Shield, color: "#10B981" },
  "Transaction History": { icon: BarChart3, color: "#06B6D4" },
  "Content Organization": { icon: Database, color: "#8B5CF6" },
  "Dashboard Analytics": { icon: BarChart3, color: "#06B6D4" },
  "Content Management": { icon: Settings, color: "#6366F1" },
  "Sharing System": { icon: Share, color: "#EC4899" },
  "Performance Focused": { icon: Zap, color: "#FBBF24" },
  "Security First": { icon: Shield, color: "#10B981" },
  "Multi-Region Monitoring": { icon: Globe, color: "#06B6D4" },
  "Dual Event Streaming": { icon: Activity, color: "#8B5CF6" },
  "Multi-Channel Alerts": { icon: Bell, color: "#EF4444" },
  "Scalable Architecture": { icon: Layers, color: "#10B981" },
  "Visual Workflow Builder": { icon: Palette, color: "#EC4899" },
  "Event-Driven Architecture": { icon: Activity, color: "#8B5CF6" },
  "Microservices Design": { icon: GitBranch, color: "#10B981" },
  "Webhook Integration": { icon: Webhook, color: "#F59E0B" }
};

const ProjectFeatures = ({ features }) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl tracking-wide md:text-4xl font-bold text-white mb-4">
          Key Features
        </h2>
        <p className="text-[#C1C2D3] tracking-wide text-lg">
          What makes this project special
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-xl p-8 h-full hover:border-[#CBACF9]/20 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                {(() => {
                  const iconData = featureIcons[feature.title] || { icon: Settings, color: "#CBACF9" };
                  const IconComponent = iconData.icon;
                  return <IconComponent size={18} style={{ color: iconData.color }} className="transition-all duration-300" />;
                })()}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#C1C2D3] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFeatures;
