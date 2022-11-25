import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import Myproducktcall from "./Myproducktcall";

const MuProduckt = () => {
  const { user } = useContext(AuthContext);
  const [myproduckt, setMyproduckt] = useState([]);
  console.log(myproduckt);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/mysalespost?email=${user?.email}`, {
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyproduckt(data);
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
            {myproduckt?.map((pro) => (
              <Myproducktcall key={pro._id} pro={pro}></Myproducktcall>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MuProduckt;
