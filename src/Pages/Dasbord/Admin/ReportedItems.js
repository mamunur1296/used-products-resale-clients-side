import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReportedColl from "./ReportedColl";

const ReportedItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/repostitems", {
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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Produckt Img</th>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
              <th>delet</th>
              <th>add</th>
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
    </div>
  );
};

export default ReportedItems;
