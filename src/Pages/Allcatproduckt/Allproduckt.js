import React from "react";
import { Outlet } from "react-router-dom";

const Allproduckt = () => {
  return (
    <div>
      <h1>
        <Outlet></Outlet>
      </h1>
    </div>
  );
};

export default Allproduckt;
