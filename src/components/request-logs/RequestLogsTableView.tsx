
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import FilterControls from "./FilterControls";
import LogsTable from "./LogsTable";

const RequestLogsTableView: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white w-full">
      <div className="flex max-md:flex-col max-md:items-stretch h-screen">
        <div className="w-[249px] max-md:w-full">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="content-start flex-wrap border-b-[color:var(--Border-Secondary,#DADDE2)] flex w-full p-8 border-b border-solid max-md:max-w-full max-md:px-5">
              <div className="text-[#4A525F] text-3xl font-extrabold leading-[1.4] self-stretch flex-1 shrink basis-[0%] min-w-60 h-[30px] gap-2.5 grow">
                Request logs
              </div>
              <div className="text-[#7C8598] text-xs font-medium leading-[20px] self-center">
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
