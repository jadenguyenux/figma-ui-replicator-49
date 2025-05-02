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
    <div className="items-center border-b-[color:var(--Border-Primary,#EBEDEF)] flex min-h-12 w-full max-w-[1126px] flex-wrap border-b border-solid max-md:max-w-full">
      <div className="text-[#4A525F] text-sm font-medium self-stretch min-h-[33px] gap-2 whitespace-nowrap leading-none grow shrink w-[140px] pr-[var(--Spacing-system-Spacing-m,] my-auto pl-[}] pt-[8px)] pb-[16px;]">
        {log.requestId}
      </div>
      <div className="text-[#4A525F] text-sm font-medium self-stretch min-h-10 gap-2 leading-none grow shrink w-[206px] pr-[var(--Spacing-system-Spacing-m,] my-auto pl-[}] pt-[8px)] pb-[16px;]">
        {log.timestamp}
      </div>
      <div className="items-center self-stretch flex min-h-10 gap-2 grow shrink w-[98px] pr-[var(--Spacing-system-Spacing-m,] my-auto pl-[}] pt-[8px)] pb-[16px;]">
        <StatusIndicator type={log.statusType} code={log.statusCode} />
      </div>
      <div className="text-[#4A525F] text-sm font-medium self-stretch min-h-[33px] gap-2 whitespace-nowrap leading-none grow shrink w-[124px] pr-[var(--Spacing-system-Spacing-m,] my-auto pl-[}] pt-[8px)] pb-[16px;]">
        {log.httpMethod}
      </div>
      <div className="text-[#4A525F] text-sm font-medium self-stretch min-w-60 min-h-[33px] gap-2 whitespace-nowrap leading-none grow shrink w-64 pr-[var(--Spacing-system-Spacing-m,] my-auto pl-[}] pt-[8px)] pb-[16px;]">
        {log.endpoint}
      </div>
      <div className="items-center self-stretch flex gap-2 text-sm text-[#4A525F] font-medium whitespace-nowrap leading-none grow shrink w-[156px] pr-[var(--Spacing-system-Spacing-m,] pl-[var(--Spacing-system-Spacing-m,] my-auto py-[8px)]">
        <img
          src={log.platformIcon}
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
        <div className="text-[#4A525F] text-sm font-medium self-stretch my-auto">
          {log.platform}
        </div>
      </div>
    </div>
  );
};

export default TableRow;
