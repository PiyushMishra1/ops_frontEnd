import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./index.css";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Dashboard />} name={"Dashboard"} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
