import React, { useState, useEffect } from "react";

export const AuthConetext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthConetextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedName = "isLoggedIn";
  useEffect(() => {
    const storedUserLoggedInInfomation = localStorage.getItem(storedName);
    if (storedUserLoggedInInfomation === "1") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  const loginHandler = () => {
    localStorage.setItem(storedName, "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(storedName);
    setIsLoggedIn(false);
  };

  return (
    <AuthConetext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthConetext.Provider>
  );
};
