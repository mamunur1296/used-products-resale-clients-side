import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const PrivateRoure = ({ children }) => {
  const location = useLocation();
  const { user, loder } = useContext(AuthContext);
  if (loder) {
    return <h1>loding......</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoure;
