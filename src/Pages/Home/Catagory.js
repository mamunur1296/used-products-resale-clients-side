import React, { useEffect, useState } from "react";

import SingleCatagory from "./SingleCatagory";

const Catagory = () => {
  const [catagorydata, setCatagorydata] = useState([]);
  const [loder, setLoder] = useState(false);
  useEffect(() => {
    setLoder(true);
    fetch("http://localhost:5000/allCatagory", {
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
    return <p>Lodeing ...</p>;
  }
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div>
          <h2 className="text-5xl">All Catagories</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {catagorydata.map((catagory) => (
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
