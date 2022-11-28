import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import Loder from "../../Components/Loder/Loder";
import Modal from "../../Components/Modal";
import ProducktColam from "./ProducktColam";

const SengleCatagory = () => {
  const [isOpen, setIsOpen] = useState({});
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const producktdata = useLoaderData();
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allbsaller"],
    queryFn: async () => {
      const res = await fetch(
        `https://recycle-server.vercel.app/allbsaller?email=${user?.email}`,
        {
          headers: {
            authorization: `brr ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loder></Loder>;
  }
  return (
    <>
      {producktdata.length === 0 ? (
        <>
          <div className="flex items-center justify-center h-screen space-x-2">
            <h1 className="text-5xl text-black font-bold">No data Available</h1>
          </div>
        </>
      ) : (
        <>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {producktdata?.map((produckt) => (
                <ProducktColam
                  key={produckt._id}
                  produckt={produckt}
                  setIsOpen={setIsOpen}
                ></ProducktColam>
              ))}
              <Modal
                ismodalOpen={ismodalOpen}
                setIsModalOpen={setIsModalOpen}
                isOpen={isOpen}
              ></Modal>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SengleCatagory;
