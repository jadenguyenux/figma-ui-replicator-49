
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
    <tr className="border-b border-solid border-[#EBEDEF] h-[60px] hover:bg-[#F8F8F8] cursor-pointer">
      <td className="px-6 py-4 text-[#4A525F] text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {log.requestId}
      </td>
      <td className="px-6 py-4 text-[#4A525F] text-sm">
        {log.timestamp}
      </td>
      <td className="px-6 py-4">
        <StatusIndicator type={log.statusType} code={log.statusCode} />
      </td>
      <td className="px-6 py-4 text-[#4A525F] text-sm font-medium">
        {log.httpMethod}
      </td>
      <td className="px-6 py-4 text-[#4A525F] text-sm font-medium min-w-60 overflow-hidden text-ellipsis">
        {log.endpoint}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src={log.platformIcon}
            className="w-4 h-4 object-contain"
            alt={log.platform}
          />
          <span className="text-[#4A525F] text-sm font-medium">
            {log.platform}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
