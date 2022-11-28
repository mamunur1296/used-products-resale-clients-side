import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import Loder from "../../Components/Loder/Loder";

const SelarRoute = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  const [isSeller, setIsSeller] = useState();
  const [isSellerLoding, setIsSellerLoding] = useState(true);
  useEffect(() => {
    fetch(`https://recycle-server.vercel.app/users/seller/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsSeller(data.isAdmin);
        setIsSellerLoding(false);
      });
  }, [user?.email]);
  console.log(isSeller, user.email);
  if (loder || isSellerLoding) {
    return <Loder></Loder>;
  }
  if (!user && !isSeller) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default SelarRoute;
