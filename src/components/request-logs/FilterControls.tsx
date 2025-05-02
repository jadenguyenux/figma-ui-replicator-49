import React from "react";
const FilterControls: React.FC = () => {
  return <>
      <div className="flex gap-3 text-sm text-[#7C8598] font-medium leading-none ml-8 mt-6">
        <div className="justify-between items-center rounded border border-[color:var(--Border-Secondary,#DADDE2)] flex min-w-60 min-h-10 w-[426px] pr-[var(--Spacing-system-Spacing-m,] pl-[var(--Spacing-system-Spacing-m,] bg-[#FFF;}] border-solid max-md:max-w-full px-[16px] py-[12px]">
          <div className="items-center self-stretch flex min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto p-0">
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/9dac59372754da65ecd895392ee3160e985ecf6f?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
            <input type="text" placeholder="Filter by Connection ID, Request ID" className="text-[#7C8598] text-sm font-medium self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none" />
          </div>
          <div className="self-stretch flex w-4 shrink-0 h-4 my-auto" />
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm text-[#4A525F] font-medium leading-none flex-wrap ml-8 mt-4 max-md:max-w-full">
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px]">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Time range
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/8fe714ca0bd0986d15d839a241a000e92e462362?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px]">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Status code
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/2e7aa614e7fd98c28a89005a6f3d77c8b34aff4c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col bg-white my-auto p-4 border-solid py-[12px]">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              HTTP method
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/2e7aa614e7fd98c28a89005a6f3d77c8b34aff4c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col whitespace-nowrap bg-white my-auto p-4 border-solid py-[12px]">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Endpoint
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/2e7aa614e7fd98c28a89005a6f3d77c8b34aff4c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
          </div>
        </div>
        <div className="justify-center items-stretch rounded border border-[color:var(--Border-Primary,#EBEDEF)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.06)] self-stretch flex min-h-10 flex-col whitespace-nowrap bg-white my-auto p-4 border-solid py-[12px]">
          <div className="items-center flex gap-3 p-0">
            <div className="text-[#4A525F] text-sm font-medium self-stretch gap-2 my-auto">
              Platform
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/44dbfaeb793463163c4e0db4fbc4626259050948?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" />
          </div>
        </div>
      </div>
    </>;
};
export default FilterControls;