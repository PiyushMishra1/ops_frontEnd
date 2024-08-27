import React, { useContext, useEffect } from "react";

import { useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }
  });
  return (
    <>
      <Layout>
        <main className="flex-1 h-screen overflow-x-hidden overflow-y-auto bg-gray-200">
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
