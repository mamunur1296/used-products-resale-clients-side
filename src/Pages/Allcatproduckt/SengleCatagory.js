import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../Components/Modal";
import ProducktColam from "./ProducktColam";

const SengleCatagory = () => {
  const [isOpen, setIsOpen] = useState({});
  const data = useLoaderData();

  return (
    <div>
      <h1>this is sengle catagory</h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data?.map((produckt) => (
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