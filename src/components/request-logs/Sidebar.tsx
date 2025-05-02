
import React from "react";
import { Home, Layers, Link, FileText, Settings, BookOpen, Wrench, ToggleLeft } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="items-stretch flex grow overflow-hidden w-full bg-[#F9FBFC] p-0">
      <div className="min-w-60 w-[249px]">
        <div className="flex w-full justify-between flex-1 h-full">
          <div className="min-w-60 min-h-[1024px] w-full flex-1 shrink basis-[0%] p-0">
            <div className="w-full font-medium gap-[24px] pt-8 pb-4 px-6">
              <div className="items-center flex w-full whitespace-nowrap mb-8">
                <div className="self-stretch flex w-full gap-[40px_66px] justify-between flex-1 shrink basis-[0%] my-auto">
                  <div>
                    <div className="text-[#4A525F] text-lg font-medium leading-[24px]">
                      Account
                    </div>
                    <div className="text-[#1B1D22] text-xs font-medium leading-[20px]">
                      david@notch.com
                    </div>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/96095f8e98f82da2486752181dbb7ef303d97417?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 shrink-0"
                  />
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Home className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Dashboard
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Layers className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Platforms
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Link className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Connections
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Layers className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Webhooks
                  </div>
                </div>
              </div>
              <div className="items-center rounded flex w-full text-sm bg-[#EBEDEF] mb-6 py-2">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto pl-2">
                  <FileText className="w-5 h-5 shrink-0" />
                  <div className="text-[#1B1D22] text-sm font-medium leading-[24px]">
                    Request logs
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Wrench className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Configuration
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Link className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Rutter Link
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-6">
              <div className="flex min-h-px w-full bg-[#EBEDEF]" />
            </div>
            <div className="w-full text-sm text-[#4A525F] font-medium gap-6 pt-8 pb-4 px-6">
              <div className="items-center flex w-full pl-2 mb-6">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <BookOpen className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Getting started
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full whitespace-nowrap pl-2">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Settings className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-6 mt-4">
          <div className="flex min-h-px w-full bg-[#EBEDEF]" />
        </div>
        <div className="flex flex-col w-full max-w-[249px] pt-8 pb-8 px-6">
          <div className="flex flex-col w-full gap-6">
            <div className="items-center flex w-full pl-2 mb-6">
              <div className="items-center self-stretch flex w-full gap-3 flex-1 shrink basis-[0%]">
                <div className="self-stretch flex gap-2 w-10">
                  <div className="w-10">
                    <div className="flex flex-col justify-center bg-[#100218] px-1 py-0.5 rounded-[40px]">
                      <ToggleLeft className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-[#4A525F] text-base font-medium leading-[24px]">
                  Production mode
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col pb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/33637e96a7e01e4c04762c49350fcf3dd088e91a?placeholderIfAbsent=true"
                className="aspect-[5] object-contain w-[120px] max-w-full"
                alt="Rutter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-px shrink-0 h-[1024px] bg-[#EBEDEF]" />
    </div>
  );
};

export default Sidebar;
