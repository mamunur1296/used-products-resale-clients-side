import React from "react";

const Myproducktcall = ({ pro, refetch }) => {
  const { img, title, _id, price, advertised } = pro;
  const handalDelet = (id) => {
    const isAcjest = window.confirm("are you sure ");
    if (isAcjest) {
      fetch(`http://localhost:5000/myproduckt/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };
  const handalAddvartice = (addid) => {
    fetch(`http://localhost:5000/advertised/${addid}`, {
      method: "POST",
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask  w-40 ">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <p>{title}</p>
        </td>
        <td>{price}</td>
        <th>
          <button
            onClick={() => handalDelet(_id)}
            className="btn btn-ghost text-white bg-gray-400 btn-xs"
          >
            DELETE
          </button>
        </th>
        <th>
          <button className="btn btn-ghost text-white bg-gray-400 btn-xs">
            delet
          </button>
        </th>
        <th>
          <button
            onClick={() => handalAddvartice(_id)}
            className="btn btn-ghost text-white bg-gray-400 btn-xs"
          >
            {advertised ? "ADD Raning" : "advartice"}
          </button>
        </th>
      </tr>
    </>
  );
};

export default Myproducktcall;
