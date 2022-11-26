import React from "react";

const AllbuyersCall = ({ buyer, refetch }) => {
  const { name, photo, roll, email, _id } = buyer;
  const handalBuiyerDelete = (id) => {
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
            onClick={() => handalBuiyerDelete(_id)}
            className="btn btn-ghost text-white bg-gray-400 btn-xs"
          >
            DELETE
          </button>
        </th>
        <th>
          <button className="btn btn-ghost text-white bg-gray-400 btn-xs">
            advartice
          </button>
        </th>
      </tr>
    </>
  );
};

export default AllbuyersCall;
