import React from "react";

const AllbuyersCall = ({ buyer }) => {
  const { name, photo, roll, email } = buyer;
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
          <button className="btn btn-ghost text-white bg-gray-400 btn-xs">
            delet
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
