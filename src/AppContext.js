import React, { createContext, useState, useEffect } from "react";

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // Your initial state here
    user: "",
  });

  const setUser = (user) => setState((prev) => ({ ...prev, user }));

  return (
    <AppContext.Provider value={{ ...state, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
