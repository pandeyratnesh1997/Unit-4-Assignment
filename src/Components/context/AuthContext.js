import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async (email, password) => {
    //  api request to reqres.in for the token
    //https://reqres.in/api/login
    let resp = await fetch("https://reqres.in/api/login",{method:'post', });
    let loginData = await resp.json();
    console.log(loginData);


  };
  const handleLogout = () => {
    //  set token back to " " once logged out
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
