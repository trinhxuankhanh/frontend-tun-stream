import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  const state = { auth: [isAuth, setIsAuth] };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
