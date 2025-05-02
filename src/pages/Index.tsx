import React from "react";
import RequestLogsTableView from "../components/request-logs/RequestLogsTableView";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <RequestLogsTableView />
    </main>
  );
};

export default Index;
