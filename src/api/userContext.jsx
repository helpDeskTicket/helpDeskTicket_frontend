/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setCount(count + 1);
    setUser({});
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://helpdeskticket-backend.onrender.com/api/v1/user/getuser", {
      method: "GET",
      headers: {
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(data?.userData);
        } else {
          navigate("/login");
        }
      });
  }, [count]);
  const contextValue = {
    user,
    setUser,
    count,
    setCount,
    logOut,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
