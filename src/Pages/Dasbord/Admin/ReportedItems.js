import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loder from "../../../Components/Loder/Loder";
import ReportedColl from "./ReportedColl";

const ReportedItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["repostitems"],
    queryFn: async () => {
      const res = await fetch("https://recycle-server.vercel.app/repostitems", {
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      });
      const data = res.json();
      // toast.success("deleted successfully");
      return data;
    },
  });
  if (isLoading) {
    return <Loder></Loder>;
  }

  return (
    <div>
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
                  <th>delet</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user) => (
                  <ReportedColl
                    key={user._id}
                    refetch={refetch}
                    user={user}
                  ></ReportedColl>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ReportedItems;
