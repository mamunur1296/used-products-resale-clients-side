import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import Loder from "../../Components/Loder/Loder";

const AdminRoute = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState();
  const [isAdminLoding, setIsAdminLoding] = useState(true);
  useEffect(() => {
    fetch(`https://recycle-server.vercel.app/users/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data.isAdmin);
        setIsAdminLoding(false);
      });
  }, [user?.email]);
  console.log(isAdmin, user.email);
  if (loder || isAdminLoding) {
    return <Loder></Loder>;
  }
  if (!user && !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default AdminRoute;
