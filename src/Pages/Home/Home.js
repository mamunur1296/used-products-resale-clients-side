import React from "react";
import Advitairsment from "./Advitairsment";
import Catagory from "./Catagory";

import Headerbanar from "./Headerbanar";
import MyChoice from "./MyChoice";

const Home = () => {
  return (
    <div className="">
      <Headerbanar></Headerbanar>
      <Catagory></Catagory>
      <Advitairsment></Advitairsment>
      <MyChoice></MyChoice>
    </div>
  );
};

export default Home;
