import { BarChart3 } from "lucide-react";
import DemoSection from "./DemoSection";

const RealtimeDashboard = ({ dashboardData }) => {
  return (
    <DemoSection
      badge="Real-time Analytics"
      title="Live Dashboard Experience"
      description="Monitor real-time data and analytics with interactive visualizations"
      demonstrations={dashboardData}
      icon={BarChart3}
    />
  );
};

export default RealtimeDashboard;