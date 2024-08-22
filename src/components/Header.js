import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <span className="text-2xl font-semibold text-gray-800">Dashboard</span>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500 hover:text-gray-600 transition-colors duration-200 mr-4">
          <NotificationsIcon />
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-600 transition-colors duration-200">
          <UserIcon />
          <span className="ml-2">John Doe</span>
        </button>
      </div>
    </header>
  );
};

const NotificationsIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.403-1.403A2.992 2.992 0 0018 13V8a6 6 0 00-6-6 6 6 0 00-6 6v5a2.992 2.992 0 00-1.597 2.597L4 17h5m6 0a3 3 0 01-6 0m6 0h-6"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12a4 4 0 110-8 4 4 0 010 8zm0 4a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z"
    />
  </svg>
);

export default Header;
