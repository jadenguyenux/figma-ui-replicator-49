
import React, { useState } from "react";
import { Search, Info } from "lucide-react";

const FilterControls: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="flex gap-3 text-sm text-[#7C8598] font-medium leading-none ml-8 mt-6">
        <div className="justify-between items-center rounded border border-[color:var(--Border-Secondary,#DADDE2)] flex min-w-60 min-h-10 w-[426px] bg-white border-solid max-md:max-w-full px-4 py-3 hover:border-[#999] focus-within:border-[#999]">
          <div className="items-center self-stretch flex min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto p-0">
            <Search className="w-4 h-4 text-[#7C8598]" />
            <input 
              type="text" 
              placeholder="Filter by Connection ID, Request ID" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="text-[#7C8598] text-sm font-medium self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none" 
            />
          </div>
          <div className="self-stretch flex w-4 shrink-0 h-4 my-auto" />
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm text-[#4A525F] font-medium leading-none flex-wrap ml-8 mt-4 max-md:max-w-full">
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px] hover:border-[#999] cursor-pointer">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Time range
            </div>
            <Info className="w-4 h-4 text-[#7C8598]" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px] hover:border-[#999] cursor-pointer">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Status code
            </div>
            <Info className="w-4 h-4 text-[#7C8598]" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px] hover:border-[#999] cursor-pointer">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              HTTP method
            </div>
            <Info className="w-4 h-4 text-[#7C8598]" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col whitespace-nowrap bg-white my-auto p-4 border-solid py-[12px] hover:border-[#999] cursor-pointer">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Endpoint
            </div>
            <Info className="w-4 h-4 text-[#7C8598]" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col whitespace-nowrap bg-white my-auto p-4 border-solid py-[12px] hover:border-[#999] cursor-pointer">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Platform
            </div>
            <Info className="w-4 h-4 text-[#7C8598]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterControls;
