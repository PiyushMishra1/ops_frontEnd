import React, { useState } from "react";
import Layout from "../components/Layout";

const CreateJobs = () => {
  const [jobs, setJobs] = useState("");
  const [form, setForm] = useState({ title: "", company: "", description: "" });

  const handleCreateJob = () => {
    if (form.title && form.company && form.description) {
      setJobs([...jobs, { id: jobs.length + 1, ...form }]);
      setForm({ title: "", company: "", description: "" });
    }
  };

  return (
    <Layout>
      <div className="flex-1 h-screen overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="bg-white px-6 py-4  shadow-md rounded-lg overflow-hidden">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Job Title"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Company Name"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <textarea
                placeholder="Job Description"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              ></textarea>
              <button
                onClick={handleCreateJob}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Create Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CreateJobs;
