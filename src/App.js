import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./views/Dashboard";
import Layout from "./Layout";
import { useState } from "react";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    // Implement your login logic here
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated}>
        <div>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <LoginForm onLogin={login} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard onLogout={logout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
