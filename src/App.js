import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./index.css";
import Dashboard from "./views/Dashboard";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Dashboard />} name={"Dashboard"} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
