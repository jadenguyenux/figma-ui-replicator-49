
import React, { useState } from "react";
import TableRow from "./TableRow";
import type { LogEntry } from "./TableRow";

const mockLogs: LogEntry[] = [
  {
    requestId: "d203f21f-15e2...",
    timestamp: "2024-04-30 13:26:22 EDT",
    statusCode: "400",
    statusType: "warning",
    httpMethod: "POST",
    endpoint: "/accounting/bill_payments",
    platform: "Wave",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/59dbaf60a4f62e894cbac12a2404aeb8bdb9827b?placeholderIfAbsent=true",
  },
  {
    requestId: "7hfrhduc-33de...",
    timestamp: "2024-04-30 09:35:15 EDT",
    statusCode: "200",
    statusType: "success",
    httpMethod: "GET",
    endpoint: "/accounting/vendors",
    platform: "Wave",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/76f0b6bc67678821a21e5b1fee521c9edc49484a?placeholderIfAbsent=true",
  },
  {
    requestId: "7603f21f-fe33...",
    timestamp: "2024-04-30 16:25:44 EDT",
    statusCode: "200",
    statusType: "success",
    httpMethod: "POST",
    endpoint: "/accounting/expenses",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/00d0ceb4909d6a4b54adb01e3d63dfbcf556d876?placeholderIfAbsent=true",
  },
  {
    requestId: "d203f21f-11sw...",
    timestamp: "2024-04-29 15:56:59 EDT",
    statusCode: "401",
    statusType: "warning",
    httpMethod: "GET",
    endpoint: "/accounting/accounts",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/0c24fdab6c6a231d3161ec831ce64659f0a66486?placeholderIfAbsent=true",
  },
  {
    requestId: "fgrhgj78-15e2...",
    timestamp: "2024-04-29 14:37:23 EDT",
    statusCode: "500",
    statusType: "error",
    httpMethod: "POST",
    endpoint: "/accounting/invoices",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/09368ea77cdcf788b9212fac0ad14176e0204086?placeholderIfAbsent=true",
  },
  {
    requestId: "fhgye890-15e2...",
    timestamp: "2024-04-29 12:11:35 EDT",
    statusCode: "200",
    statusType: "success",
    httpMethod: "DELETE",
    endpoint: "/products",
    platform: "Square",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/f23c6c65b5105c8b3064c32192417a9346f8ad10?placeholderIfAbsent=true",
  },
  {
    requestId: "fhgyt48d-cc45...",
    timestamp: "2024-04-28 08:25:48 EDT",
    statusCode: "451",
    statusType: "warning",
    httpMethod: "GET",
    endpoint: "/accounting/bills",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/0ff97e7fb5c48abe4f7d717f4a6d236dc187bca2?placeholderIfAbsent=true",
  },
  {
    requestId: "a81bc81b-edhc...",
    timestamp: "2024-04-28 05:15:20 EDT",
    statusCode: "450",
    statusType: "warning",
    httpMethod: "POST",
    endpoint: "/accounting/invoice_payments",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/57d2cd2dcebbd9f5dd3c33437004ca90bc65ba8e?placeholderIfAbsent=true",
  },
  {
    requestId: "fhr64jsk-54fg...",
    timestamp: "2024-04-28 15:25:10 EDT",
    statusCode: "200",
    statusType: "success",
    httpMethod: "GET",
    endpoint: "/accounting/vendors",
    platform: "QuickBooks",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/03647671b82e043ddf643c83dfc0a790c3987d41?placeholderIfAbsent=true",
  },
  {
    requestId: "d203f21f-23sd...",
    timestamp: "2024-04-28 16:25:34 EDT",
    statusCode: "200",
    statusType: "success",
    httpMethod: "PATCH",
    endpoint: "/accounting/invoice_payments",
    platform: "Wave",
    platformIcon: "https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/739eaaa04a02fffcc0a63a4e2fb31fa60db4d62e?placeholderIfAbsent=true",
  },
];

const LogsTable: React.FC = () => {
  const [itemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("Newest first");
  const [lastUpdated] = useState("2024-04-30 13:27:22");

  const handleRefresh = () => {
    // In a real app, this would fetch new data
    console.log("Refreshing data...");
  };

  return (
    <>
      <div className="border shrink-0 h-px bg-[#EBEDEF] mt-[23px] border-[rgba(235,237,239,1)] border-solid max-md:max-w-full" />
      <div className="flex w-full max-w-[1126px] items-stretch gap-5 text-sm font-medium leading-none flex-wrap justify-between mt-[22px] mx-8 max-md:max-w-full max-md:mr-2.5">
        <div className="items-center flex gap-4 my-auto">
          <div className="text-[#7C8598] text-sm font-medium self-stretch gap-2 my-auto">
            Last updated: {lastUpdated}
          </div>
          <button
            className="items-center self-stretch flex gap-1 text-[#4A525F] my-auto"
            onClick={handleRefresh}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/4917edefa4d9ebda05d2b74f0da9001847b00e73?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
            <div className="text-[#4A525F] text-sm font-medium self-stretch my-auto">
              Refresh
            </div>
          </button>
        </div>
        <div className="items-center flex gap-4">
          <div className="self-stretch flex gap-4 my-auto">
            <div className="items-center flex gap-2">
              <div className="text-[#7C8598] text-sm font-medium self-stretch my-auto">
                Sorted by:
              </div>
              <div className="justify-center items-center rounded border border-[color:var(--Border-Secondary,#DADDE2)] self-stretch flex gap-2.5 text-[#4A525F] my-auto p-2 border-solid">
                <div className="self-stretch flex items-center gap-1 my-auto">
                  <div className="text-[#4A525F] text-sm font-medium self-stretch my-auto">
                    {sortOrder}
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/8faf9cc66406552c54cf61736191914cd8264277?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#EBEDEF] bg-white mt-3.5 mx-8 rounded-lg border-solid max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-center min-h-[48px] w-full max-w-[1126px] text-sm text-[#7C8598] font-medium bg-[#F9FBFC] border-b border-[#DADDE2] rounded-t-lg max-md:max-w-full">
          <div className="flex items-center justify-center w-[140px] px-4 py-2">
            Request ID
          </div>
          <div className="flex items-center justify-center w-[206px] px-4 py-2">
            Timestamp
          </div>
          <div className="flex items-center justify-center w-[98px] px-4 py-2">
            Status code
          </div>
          <div className="flex items-center justify-center w-[124px] px-4 py-2">
            HTTP method
          </div>
          <div className="flex items-center justify-center w-64 px-4 py-2">
            Endpoint
          </div>
          <div className="flex items-center justify-center w-[156px] px-4 py-2">
            Platform
          </div>
        </div>

        {mockLogs.map((log, index) => (
          <TableRow key={index} log={log} />
        ))}
      </div>
      <div className="flex w-full max-w-[1126px] items-stretch gap-[40px_100px] text-sm font-medium text-center leading-none flex-wrap mt-4 mx-8 max-md:max-w-full max-md:mr-2.5">
        <div className="items-center flex h-10 gap-3 flex-1">
          <div className="justify-center items-center rounded self-stretch flex gap-1 pr-[var(--Spacing-system-Spacing-None,] my-auto pl-[}] pt-[6px)] pb-[0px;]">
            <div className="text-[#7C8598] text-sm font-medium self-stretch my-auto">
              Items per page:
            </div>
            <div className="rounded border border-[color:var(--Border-Secondary,#DADDE2)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] self-stretch flex gap-0.5 text-[#4A525F] whitespace-nowrap my-auto p-2 border-solid">
              <div className="flex gap-1">
                <div className="text-[#4A525F] text-sm font-medium">
                  {itemsPerPage}
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/0c5e0c67df1403197472c9d6600aa3667ec4fca6?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center flex min-h-10 gap-5 text-[#4A525F] whitespace-nowrap flex-1">
          <button className="justify-center items-center rounded self-stretch flex gap-1 pr-[var(--Spacing-system-Spacing-None,] pl-[var(--Spacing-system-Spacing-None,] my-auto py-[6px)]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/393ccefc5d7d9a0b12373e42d699bac37bbcf280?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
            <div className="text-[#4A525F] text-sm font-medium self-stretch my-auto">
              Previous
            </div>
          </button>
          <button className="justify-center items-center rounded self-stretch flex gap-1 pr-[var(--Spacing-system-Spacing-None,] pl-[var(--Spacing-system-Spacing-None,] my-auto py-[6px)]">
            <div className="text-[#4A525F] text-sm font-medium self-stretch my-auto">
              Next
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/42cc76b3efce4704b61765c2d3f2b3db/356449cb87aa29f824800d46e1d953e2c84fee26?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default LogsTable;
