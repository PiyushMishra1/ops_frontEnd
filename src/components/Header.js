import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between h-16 py-5 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-600 mr-4 md:hidden"
        >
          <MenuIcon />
        </button>
        <a href="/">
          <span className="text-2xl font-semibold text-gray-800">
            Dashboard
          </span>
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-500 hover:text-gray-600 transition-colors duration-200">
          <NotificationIcon />
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-600 transition-colors duration-200">
          <UserIcon />
          <span className="ml-2 hidden md:inline">John Doe</span>
        </button>
      </div>
    </header>
  );
};

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const NotificationIcon = () => (
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
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default Header;
