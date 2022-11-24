import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Nave from "../../Components/Nave/Nave";

const MainLayout = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
