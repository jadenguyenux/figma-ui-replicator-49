import React from "react";
import { Home, Layers, Link, FileText, Settings, BookOpen, Wrench, ToggleRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Sidebar: React.FC = () => {
  return (
    <div className="items-stretch flex grow overflow-hidden w-full bg-[#F9FBFC] p-0">
      <div className="min-w-60 w-[249px] flex flex-col justify-between h-full">
        <div className="flex w-full justify-between flex-1">
          <div className="min-w-60 w-full flex-1 shrink basis-[0%] p-0">
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
                    alt="Account"
                  />
                </div>
              </div>
              {/* Menu items */}
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Home className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Dashboard
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                    <path fill="#4A525F" stroke="#4A525F" strokeWidth=".094" d="M5.25 12.797h4.5a1.452 1.452 0 0 1 1.453 1.453v4.5a1.452 1.452 0 0 1-1.453 1.453h-4.5a1.453 1.453 0 0 1-1.453-1.453v-4.5a1.453 1.453 0 0 1 1.453-1.453Zm9 0h4.5a1.452 1.452 0 0 1 1.453 1.453v4.5a1.452 1.452 0 0 1-1.453 1.453h-4.5a1.452 1.452 0 0 1-1.453-1.453v-4.5a1.452 1.452 0 0 1 1.453-1.453Zm-9.047 6h4.594v-4.594H5.203v4.594Zm9 0h4.594v-4.594h-4.594v4.594Zm-8.953-15h4.5a1.453 1.453 0 0 1 1.453 1.453v4.5a1.452 1.452 0 0 1-1.453 1.453h-4.5A1.453 1.453 0 0 1 3.797 9.75v-4.5l.007-.144a1.453 1.453 0 0 1 1.446-1.31Zm9 0h4.5a1.453 1.453 0 0 1 1.453 1.453v4.5a1.452 1.452 0 0 1-1.453 1.453h-4.5a1.452 1.452 0 0 1-1.453-1.453v-4.5a1.453 1.453 0 0 1 1.453-1.453Zm-9.047 6h4.594V5.203H5.203v4.594Zm9 0h4.594V5.203h-4.594v4.594Z"/>
                  </svg>
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Platforms
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Link className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Connections
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Layers className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Webhooks
                  </div>
                </div>
              </div>
              <div className="items-center rounded flex w-full text-sm bg-[#EBEDEF] mb-6 py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto pl-2">
                  <FileText className="w-5 h-5 shrink-0" />
                  <div className="text-[#1B1D22] text-sm font-medium leading-[24px]">
                    Request logs
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] whitespace-nowrap pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <Wrench className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Configuration
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full text-sm text-[#4A525F] pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
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
              <div className="items-center flex w-full pl-2 mb-6 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
                <div className="self-stretch flex w-full gap-3 flex-1 shrink basis-[0%] my-auto p-0">
                  <BookOpen className="w-5 h-5 shrink-0" />
                  <div className="text-[#4A525F] text-sm font-medium leading-[24px]">
                    Getting started
                  </div>
                </div>
              </div>
              <div className="items-center flex w-full whitespace-nowrap pl-2 hover:bg-[#EBEDEF] rounded-md py-2 cursor-pointer">
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
        
        {/* Production Mode Toggle and Rutter Logo - Fixed positioning at bottom */}
        <div className="w-full px-6 py-6 mt-auto">
          {/* Production Mode Toggle */}
          <div className="items-center flex w-full mb-6">
            <div className="flex items-center gap-3 w-full">
              <div className="relative">
                <Switch id="production-mode" className="bg-[#100218]" defaultChecked />
              </div>
              <label htmlFor="production-mode" className="text-[#4A525F] text-base font-medium leading-[24px] cursor-pointer">
                Production mode
              </label>
            </div>
          </div>
          
          {/* Rutter Logo */}
          <div className="flex w-full pt-2 pb-4">
            <svg width="81" height="20" viewBox="0 0 81 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.69946 19.3198L0 1.91974H3.46073L5.30296 15.4791L8.76369 1.91974H11.6518L15.1125 15.4791L16.9548 1.91974H20.4155L17.7161 19.3198H14.3514L10.4909 5.76046H9.92461L6.06413 19.3198H2.69946Z" fill="#100218"/>
              <path d="M28.9974 19.7443C26.915 19.7443 25.1687 19.0474 23.7587 17.6535C22.3486 16.2596 21.6436 14.532 21.6436 12.4708C21.6436 10.4097 22.3486 8.68213 23.7587 7.28821C25.1687 5.89429 26.915 5.19733 28.9974 5.19733C31.0798 5.19733 32.8261 5.89429 34.2362 7.28821C35.6462 8.68213 36.3513 10.4097 36.3513 12.4708C36.3513 14.532 35.6462 16.2596 34.2362 17.6535C32.8261 19.0474 31.0798 19.7443 28.9974 19.7443ZM28.9974 17.017C30.1584 17.017 31.1713 16.6334 32.0361 15.866C32.901 15.0987 33.3334 13.9134 33.3334 12.4708C33.3334 11.0283 32.901 9.84296 32.0361 8.91116C31.1713 8.04383 30.1584 7.60186 28.9974 7.60186C27.8364 7.60186 26.8235 8.04383 25.9586 8.91116C25.0938 9.84296 24.6614 11.0283 24.6614 12.4708C24.6614 13.9134 25.0938 15.0987 25.9586 15.866C26.8235 16.6334 27.8364 17.017 28.9974 17.017Z" fill="#100218"/>
              <path d="M44.5721 19.3198V7.81476H41.7802V5.62166H44.5721V0.911865H47.5899V5.62166H50.8063V7.81476H47.5899V19.3198H44.5721Z" fill="#100218"/>
              <path d="M58.6752 19.3198V7.81476H55.8834V5.62166H58.6752V0.911865H61.693V5.62166H64.9095V7.81476H61.693V19.3198H58.6752Z" fill="#100218"/>
              <path d="M72.3897 19.7443C70.3073 19.7443 68.561 19.0474 67.151 17.6535C65.7409 16.2596 65.0359 14.532 65.0359 12.4708C65.0359 10.4097 65.7409 8.68213 67.151 7.28821C68.561 5.89429 70.3073 5.19733 72.3897 5.19733C74.4722 5.19733 76.2185 5.89429 77.6285 7.28821C79.0386 8.68213 79.7436 10.4097 79.7436 12.4708C79.7436 14.532 79.0386 16.2596 77.6285 17.6535C76.2185 19.0474 74.4722 19.7443 72.3897 19.7443ZM72.3897 17.017C73.5508 17.017 74.5636 16.6334 75.4285 15.866C76.2934 15.0987 76.7258 13.9134 76.7258 12.4708C76.7258 11.0283 76.2934 9.84296 75.4285 8.91116C74.5636 8.04383 73.5508 7.60186 72.3897 7.60186C71.2287 7.60186 70.2158 8.04383 69.351 8.91116C68.4861 9.84296 68.0537 11.0283 68.0537 12.4708C68.0537 13.9134 68.4861 15.0987 69.351 15.866C70.2158 16.6334 71.2287 17.017 72.3897 17.017Z" fill="#100218"/>
              <path d="M79.7437 3.14096C79.7437 3.56855 79.6475 3.95461 79.4553 4.28913C79.2631 4.62364 79.0065 4.88499 78.6856 5.07318C78.3646 5.26138 77.9966 5.35547 77.5816 5.35547C77.1664 5.35547 76.7985 5.26138 76.4776 5.07318C76.1567 4.88499 75.9001 4.62364 75.7079 4.28913C75.5158 3.95461 75.4196 3.56855 75.4196 3.14096C75.4196 2.71338 75.5158 2.32731 75.7079 1.9928C75.9001 1.65828 76.1567 1.39694 76.4776 1.20874C76.7985 1.02055 77.1664 0.926453 77.5816 0.926453C77.9966 0.926453 78.3646 1.02055 78.6856 1.20874C79.0065 1.39694 79.2631 1.65828 79.4553 1.9928C79.6475 2.32731 79.7437 2.71338 79.7437 3.14096Z" fill="#100218"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-px shrink-0 h-full bg-[#EBEDEF]" />
    </div>
  );
};

export default Sidebar;
