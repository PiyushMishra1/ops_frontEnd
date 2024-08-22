import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
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
