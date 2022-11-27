import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import Loder from "../../Components/Loder/Loder";

const PrivateRoure = ({ children }) => {
  const location = useLocation();
  const { user, loder } = useContext(AuthContext);
  if (loder) {
    return <Loder></Loder>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoure;
