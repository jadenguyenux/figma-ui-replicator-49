
import React from "react";
import StatusIndicator from "./StatusIndicator";

export interface LogEntry {
  requestId: string;
  timestamp: string;
  statusCode: string;
  statusType: "success" | "warning" | "error";
  httpMethod: string;
  endpoint: string;
  platform: string;
  platformIcon: string;
}

interface TableRowProps {
  log: LogEntry;
}

const TableRow: React.FC<TableRowProps> = ({ log }) => {
  return (
    <div className="flex items-center border-b border-solid border-[#EBEDEF] min-h-[48px] w-full max-w-[1126px] hover:bg-[#F8F8F8] cursor-pointer max-md:max-w-full">
      <div className="flex items-center text-[#4A525F] text-sm font-medium w-[140px] px-4 py-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {log.requestId}
      </div>
      <div className="flex items-center text-[#4A525F] text-sm font-medium w-[206px] px-4 py-2">
        {log.timestamp}
      </div>
      <div className="flex items-center w-[98px] px-4 py-2">
        <StatusIndicator type={log.statusType} code={log.statusCode} />
      </div>
      <div className="flex items-center text-[#4A525F] text-sm font-medium w-[124px] px-4 py-2">
        {log.httpMethod}
      </div>
      <div className="flex items-center text-[#4A525F] text-sm font-medium min-w-60 w-64 px-4 py-2 overflow-hidden text-ellipsis">
        {log.endpoint}
      </div>
      <div className="flex items-center gap-2 w-[156px] px-4 py-2">
        <img
          src={log.platformIcon}
          className="w-4 h-4 object-contain"
          alt={log.platform}
        />
        <span className="text-[#4A525F] text-sm font-medium">
          {log.platform}
        </span>
      </div>
    </div>
  );
};

export default TableRow;
