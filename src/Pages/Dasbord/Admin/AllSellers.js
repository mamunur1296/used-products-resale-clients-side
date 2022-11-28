import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import Loder from "../../../Components/Loder/Loder";
import AllselarColl from "./AllselarColl";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allbsaller"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/allbsaller?email=${user?.email}`,
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
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Delete</th>
              <th>Verify </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((seller) => (
              <AllselarColl
                key={seller._id}
                refetch={refetch}
                seller={seller}
              ></AllselarColl>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
