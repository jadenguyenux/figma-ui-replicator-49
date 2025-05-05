
import React, { useState } from "react";
import { Search, PlusCircle } from "lucide-react";

const FilterControls: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-8 py-6">
      {/* Search bar */}
      <div className="flex w-full items-center">
        <div className="relative w-full max-w-[550px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-[#7C8598]" />
          </div>
          <input
            type="text"
            className="bg-white border border-[#DADDE2] text-[#7C8598] text-sm rounded w-full pl-10 p-2.5 focus:border-[#999] focus:outline-none"
            placeholder="Filter by Connection ID, Request ID"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex mt-5 gap-3 flex-wrap">
        <FilterPill label="Time range" />
        <FilterPill label="Status code" />
        <FilterPill label="Endpoint" />
        <FilterPill label="HTTP method" />
        <FilterPill label="Platform" />
        <button className="text-[#7C8598] text-sm font-medium ml-2 hover:text-[#4A525F] hover:underline">
          Reset filters
        </button>
      </div>
    </div>
  );
};

interface FilterPillProps {
  label: string;
}

const FilterPill: React.FC<FilterPillProps> = ({ label }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-3 py-2 rounded border border-[#DADDE2] bg-white text-[#4A525F] text-sm font-medium hover:border-[#999] cursor-pointer">
      {label}
      <PlusCircle className="w-4 h-4 text-[#7C8598]" />
    </button>
  );
};

export default FilterControls;
