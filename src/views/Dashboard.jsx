import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
function Dashboard() {
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
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Add your page content here */}
              <h3 className="text-gray-700 text-3xl font-medium">
                Welcome back!
              </h3>
              <p className="mt-4">Your content goes here...</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
