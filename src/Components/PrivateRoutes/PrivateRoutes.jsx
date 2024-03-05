/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../api/userContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  return children;
};

export default PrivateRoutes;
