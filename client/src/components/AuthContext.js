import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // initially, no user there

  useEffect(() => {
    setUser(localStorage.getItem("user"))

  }, []);


  function login(data) {
    setUser(data);
    console.log("user has been set")
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  }

  // value can be anything. null, undefined, object, array, number, string....
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}