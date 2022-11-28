import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import MyorderRow from "./MyorderRow";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [userdata, setuserData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://recycle-server.vercel.app/usersbookings?email=${user?.email}`,
        {
          headers: {
            authorization: `brr ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setuserData(res.data);
      });
  }, []);

  return (
    <div>
      {userdata.length === 0 ? (
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
                  <th>Photo</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userdata?.map((myorder) => (
                  <MyorderRow key={myorder._id} myorder={myorder}></MyorderRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrder;
