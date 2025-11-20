import { Shield } from "lucide-react";
import DemoSection from "./DemoSection";

const SecureAuthentication = ({ authData }) => {
  return (
    <DemoSection
      badge="Secure Access"
      title="Authentication & Onboarding"
      description="Production-grade security with comprehensive user authentication and onboarding flow"
      demonstrations={authData}
      icon={Shield}
    />
  );
};

export default SecureAuthentication;