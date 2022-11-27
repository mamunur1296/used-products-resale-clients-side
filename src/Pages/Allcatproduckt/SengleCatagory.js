import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../Components/Modal";
import ProducktColam from "./ProducktColam";

const SengleCatagory = () => {
  const [isOpen, setIsOpen] = useState({});
  const producktdata = useLoaderData();
  // const { data } = useQuery({
  //   queryKey: ["singleUser"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/allPayment");
  //     const data = res.json();
  //     return data;
  //   },
  // });
  // console.log(producktdata);
  return (
    <div>
      <h1>this is sengle catagory</h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {producktdata?.map((produckt) => (
            <ProducktColam
              key={produckt._id}
              produckt={produckt}
              setIsOpen={setIsOpen}
            ></ProducktColam>
          ))}
          <Modal isOpen={isOpen}></Modal>
        </div>
      </div>
    </div>
  );
};

export default SengleCatagory;
