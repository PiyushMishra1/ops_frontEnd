import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="flex h-screen  bg-gray-100 overflow-hidden">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <div className={`flex flex-col flex-1 w-full min-w-0 `}>
          <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
export default Layout;
