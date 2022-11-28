import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import Loder from "../../../Components/Loder/Loder";
import Myproducktcall from "./Myproducktcall";

const MuProduckt = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["mysalespost"],
    queryFn: async () => {
      const res = await fetch(
        `https://recycle-server.vercel.app/mysalespost?email=${user?.email}`,
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
      {data.length === 0 ? (
        <>
          <div className="flex items-center justify-center h-screen space-x-2">
            <h1 className="text-5xl text-black font-bold">No data Available</h1>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Produckt Img</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((pro) => (
                  <Myproducktcall
                    key={pro._id}
                    refetch={refetch}
                    pro={pro}
                  ></Myproducktcall>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MuProduckt;
