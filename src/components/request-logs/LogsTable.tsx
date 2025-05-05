
import React, { useState } from "react";
import TableRow from "./TableRow";
import type { LogEntry } from "./TableRow";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow as UITableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, RefreshCw, ChevronDown } from "lucide-react";

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
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("Newest first");
  const [lastUpdated] = useState("2024-04-30 13:27:22");

  const handleRefresh = () => {
    // In a real app, this would fetch new data
    console.log("Refreshing data...");
  };

  return (
    <div className="px-8 pb-6">
      <div className="flex justify-between items-center mt-2 mb-4">
        <div className="flex items-center gap-4">
          <span className="text-[#7C8598] text-sm">Last updated: {lastUpdated}</span>
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-1 text-[#7C8598] hover:text-[#4A525F]"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">Refresh</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#7C8598] text-sm">Sorted by:</span>
          <button className="flex items-center gap-1 border border-[#DADDE2] rounded px-3 py-2 text-sm text-[#4A525F] hover:border-[#999]">
            {sortOrder}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      
      <div className="border rounded-lg border-[#EBEDEF] overflow-hidden">
        <Table>
          <TableHeader className="bg-[#F9FBFC]">
            <UITableRow className="hover:bg-[#F9FBFC]">
              <TableHead className="text-[#7C8598] font-medium pl-6">Request ID</TableHead>
              <TableHead className="text-[#7C8598] font-medium">Timestamp</TableHead>
              <TableHead className="text-[#7C8598] font-medium">Status code</TableHead>
              <TableHead className="text-[#7C8598] font-medium">HTTP method</TableHead>
              <TableHead className="text-[#7C8598] font-medium">Endpoint</TableHead>
              <TableHead className="text-[#7C8598] font-medium">Platform</TableHead>
            </UITableRow>
          </TableHeader>
          <TableBody>
            {mockLogs.map((log, index) => (
              <TableRow key={index} log={log} />
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2">
          <span className="text-[#7C8598] text-sm">Items per page:</span>
          <button className="flex items-center gap-2 border border-[#DADDE2] rounded px-3 py-2 bg-white text-[#4A525F] text-sm hover:border-[#999]">
            {itemsPerPage}
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center border border-[#DADDE2] rounded p-2 text-[#4A525F] hover:bg-[#F9FBFC]">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm ml-1">Previous</span>
          </button>
          <button className="flex items-center border border-[#DADDE2] rounded p-2 text-[#4A525F] hover:bg-[#F9FBFC]">
            <span className="text-sm mr-1">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogsTable;
