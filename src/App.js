import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./index.css";
import Dashboard from "./views/Dashboard";
import Layout from "./Layout";
import JobsPanel from "./views/JobsPanel";
import CreateJobs from "./views/CreateJobs";

const App = () => {
  return (
    <Router>
      <Layout>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Dashboard />} name={"Dashboard"} />
            <Route
              path="/jobs/view"
              element={<JobsPanel />}
              name={"JobsPanel"}
            />
            <Route
              path="/jobs/create"
              element={<CreateJobs />}
              name={"JobsPanel"}
            />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
