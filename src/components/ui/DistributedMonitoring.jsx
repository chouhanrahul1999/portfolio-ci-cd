import { Network } from "lucide-react";
import DemoSection from "./DemoSection";

const DistributedMonitoring = ({ monitoringData }) => {
  return (
    <DemoSection
      badge="Scalable Architecture"
      title="Distributed Monitoring System"
      description="Multi-region website monitoring with Redis Streams and horizontal scaling capabilities"
      demonstrations={monitoringData}
      icon={Network}
    />
  );
};

export default DistributedMonitoring;