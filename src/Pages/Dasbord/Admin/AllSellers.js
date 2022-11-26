import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvaider/AuthProvaider";
import AllselarColl from "./AllselarColl";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [allbsaller, setallbsaller] = useState([]);
  console.log(allbsaller);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/allbsaller?email=${user?.email}`, {
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setallbsaller(data);
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
            {allbsaller?.map((seller) => (
              <AllselarColl key={seller._id} seller={seller}></AllselarColl>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
