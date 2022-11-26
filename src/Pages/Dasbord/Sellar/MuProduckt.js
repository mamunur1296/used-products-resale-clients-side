import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import Myproducktcall from "./Myproducktcall";

const MuProduckt = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/mysalespost?email=${user?.email}`,
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
    return <p>Loding ....</p>;
  }

  // const [myproduckt, setMyproduckt] = useState([]);
  // console.log(myproduckt);
  // const [userloder, setUserloder] = useState(true);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/mysalespost?email=${user?.email}`, {
  //     headers: {
  //       authorization: `brr ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMyproduckt(data);
  //       setUserloder(false);
  //     });
  // }, [user?.email]);
  // if (userloder) {
  //   return <p>Loding...</p>;
  // }
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
    </div>
  );
};

export default MuProduckt;
