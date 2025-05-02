import React from "react";

type StatusType = "success" | "warning" | "error";

interface StatusIndicatorProps {
  type: StatusType;
  code: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ type, code }) => {
  const getStatusImage = () => {
    switch (type) {
      case "success":
        return "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/bac3c321179fc773030094cb5b03cb4a2d66eb8a?placeholderIfAbsent=true"; // Green dot
      case "warning":
        return "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/2f083121b9555ad730ebe8d17950e448cad72531?placeholderIfAbsent=true"; // Yellow dot
      case "error":
        return "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/7ac46134508180c3a11b5db666827f5ff090f38a?placeholderIfAbsent=true"; // Red dot
      default:
        return "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/bac3c321179fc773030094cb5b03cb4a2d66eb8a?placeholderIfAbsent=true";
    }
  };

  return (
    <div className="items-center self-stretch flex min-h-10 gap-2 grow shrink">
      <div className="self-stretch flex items-center gap-2.5 w-1.5 my-auto">
        <img
          src={getStatusImage()}
          className={`aspect-[1] object-contain w-1.5 self-stretch my-auto ${
            type === "success"
              ? "fill-[#0B835E]"
              : type === "warning"
                ? "fill-[#EDB246]"
                : "fill-[#FB4830]"
          }`}
        />
      </div>
      <div className="text-[#4A525F] text-sm font-medium leading-none self-stretch my-auto">
        {code}
      </div>
    </div>
  );
};

export default StatusIndicator;
