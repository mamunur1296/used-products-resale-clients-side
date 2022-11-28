import React, { useEffect, useState } from "react";
import Loder from "../../Components/Loder/Loder";
import useTitle from "../../Hooks/useTitle";

import SingleCatagory from "./SingleCatagory";

const Catagory = () => {
  useTitle("Catagory page ");
  const [catagorydata, setCatagorydata] = useState([]);
  const [loder, setLoder] = useState(false);
  useEffect(() => {
    setLoder(true);
    fetch("https://recycle-server.vercel.app/allCatagory", {
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCatagorydata(data);
        setLoder(false);
      });
  }, []);
  if (loder) {
    return <Loder></Loder>;
  }
  return (
    <div className="bg-orange-100">
      <div className="px-4 py-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                All Categories Category List
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                CategoriesMarketingA/B TestingAccount-Based Marketing (ABM)Ad
                Serving & RetargetingAll-in-One MarketingContent
                ManagementCreative ManagementCross-Channel Campaign
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-3 mt-1 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {catagorydata?.map((catagory) => (
            <SingleCatagory
              key={catagory._id}
              catagory={catagory}
            ></SingleCatagory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
