
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import FilterControls from "./FilterControls";
import LogsTable from "./LogsTable";

const RequestLogsTableView: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white w-full">
      <div className="flex max-md:flex-col max-md:items-stretch h-screen">
        <div className="w-[250px] max-md:w-full border-r border-[#EBEDEF]">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="flex justify-between items-center border-b-[color:var(--Border-Secondary,#DADDE2)] p-8 border-b border-solid max-md:max-w-full max-md:px-5">
              <div className="text-[#4A525F] text-[28px] font-bold leading-[1.4]">
                Request logs
              </div>
              <div className="text-[#7C8598] text-xs font-medium leading-[20px]">
                Logs are retained for 30 days
              </div>
            </div>

            <FilterControls />
            <LogsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLogsTableView;
