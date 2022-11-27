import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import AddColl from "./AddColl";

const Advitairsment = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/addItems`, {
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <p>Loding ....</p>;
  }
  return (
    <div>
      {data.length ? (
        <>
          <div className="p-6 py-12 bg-orange-200  text-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-red-600 animate-pulse text-6xl tracking-tighter font-bold">
                  Up to
                  <br className="sm:hidden" />
                  50% Off/
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg">BookHA</span>
                </div>
                <Link
                  rel="noreferrer noopener"
                  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block animate-pulse bg-red-500 text-white font-bold border-gray-400"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-orange-100">
            <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {data.map((add) => (
                  <AddColl key={add._id} add={add}></AddColl>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Advitairsment;
