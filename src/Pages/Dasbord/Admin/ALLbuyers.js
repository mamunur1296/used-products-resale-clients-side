import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import AllbuyersCall from "./AllbuyersCall";

const ALLbuyers = () => {
  const { user } = useContext(AuthContext);
  const [buyers, setBuyers] = useState([]);
  console.log(buyers);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/allbuyers?email=${user?.email}`, {
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBuyers(data);
        setUserloder(false);
      });
  }, [user?.email]);
  if (userloder) {
    return <p>Loding...</p>;
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
            {buyers?.map((buyer) => (
              <AllbuyersCall key={buyer._id} buyer={buyer}></AllbuyersCall>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ALLbuyers;
