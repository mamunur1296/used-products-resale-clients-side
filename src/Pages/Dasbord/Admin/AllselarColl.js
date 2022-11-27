import React from "react";

const AllselarColl = ({ seller, refetch }) => {
  const { name, photo, varify, roll, email, _id } = seller;
  const handalUserDelete = (id) => {
    const isAcjest = window.confirm("are you sure ");
    if (isAcjest) {
      fetch(`http://localhost:5000/userDeleit/${id}`, {
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
  const handalVarifi = (id) => {
    fetch(`http://localhost:5000/salarVarify/${id}`, {
      method: "PUT",
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
              <div className="mask  w-20 ">
                <img src={photo} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>{email}</td>
        <th>{roll}</th>
        <th>
          <button
            onClick={() => handalUserDelete(_id)}
            className="btn btn-ghost text-white bg-gray-400 btn-xs"
          >
            delet
          </button>
        </th>
        <th>
          <button
            onClick={() => handalVarifi(email)}
            className="btn btn-ghost text-white bg-gray-400 btn-xs"
          >
            {varify ? "verified" : "unverified "}
          </button>
        </th>
      </tr>
    </>
  );
};

export default AllselarColl;
