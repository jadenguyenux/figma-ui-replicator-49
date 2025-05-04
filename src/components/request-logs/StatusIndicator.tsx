
import React from "react";

type StatusType = "success" | "warning" | "error";

interface StatusIndicatorProps {
  type: StatusType;
  code: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ type, code }) => {
  // Replace images with colored circles using CSS
  const getStatusColor = () => {
    switch (type) {
      case "success":
        return "bg-[#0B835E]"; // Green for success
      case "warning":
        return "bg-[#EDB246]"; // Yellow for warning
      case "error":
        return "bg-[#FB4830]"; // Red for error
      default:
        return "bg-[#0B835E]";
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor()}`} />
      <div className="text-[#4A525F] text-sm font-medium">
        {code}
      </div>
    </div>
  );
};

export default StatusIndicator;
