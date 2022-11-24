import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Nave from "../../Components/Nave/Nave";
import Home from "../../Pages/Home/Home";

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
