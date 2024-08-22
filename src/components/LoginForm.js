import React, { useState } from "react";
import UserData from "../Api/UserData";
import toast, { Toaster } from "react-hot-toast";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Fetch data from the API using async/await
  const fetch = async (data) => {
    try {
      const response = await UserData(data);
      const result = response.message;
      if (result == "Login Successful") {
        toast.success(result);
      } else {
        toast.error(result);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    // Validate email format
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    setError(isValidEmail ? "" : "Please enter a valid email address");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g.,
    if (email != "" && password != "") {
      const data = {
        email: email,
        password: password,
      };
      fetch(data);
    } else {
      toast.error("Please enter all fields");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Pane */}
      <Toaster />
      <div className="w-1/2 bg-gray-800 text-white flex justify-center items-center">
        <h1 className="text-4xl font-bold">Ops. Panel</h1>
      </div>

      {/* Right Pane */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
