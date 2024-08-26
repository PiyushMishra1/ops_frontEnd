import React from "react";

import { useState } from "react";
import Layout from "../components/Layout";
function Dashboard() {
  return (
    <>
      <Layout>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {/* Add your page content here */}
            <h3 className="text-gray-700 text-3xl font-medium">
              Welcome back!
            </h3>
            <p className="mt-4">Your content goes here...</p>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default Dashboard;
