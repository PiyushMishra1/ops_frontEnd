import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
const JobsPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("2");
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  // This would typically come from a backend API
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      posted: "2d ago",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Contract",
      posted: "1w ago",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataMinds",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "3d ago",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Remote",
      type: "Part-time",
      posted: "5d ago",
    },
  ];

  return (
    <Layout>
      <div className="bg-gray px-6 h-screen bg-gray p-4 shadow-md rounded-lg overflow-hidden">
        <div className=" border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Job Postings
          </h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="px-6 py-4 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-indigo-600 truncate">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {job.company} • {job.location}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-500">{job.posted}</p>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
          <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View All Jobs
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default JobsPanel;
