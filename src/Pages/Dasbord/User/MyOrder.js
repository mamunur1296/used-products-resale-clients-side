import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import MyorderRow from "./MyorderRow";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [userdata, setuserData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/usersbookings?email=${user?.email}`, {
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setuserData(res.data);
      });
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {userdata?.map((myorder) => (
              <MyorderRow key={myorder._id} myorder={myorder}></MyorderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
