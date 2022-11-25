import React from "react";

const Myproducktcall = ({ pro }) => {
  const { img, title, price } = pro;
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
          <button className="btn btn-ghost text-white bg-gray-400 btn-xs">
            Pay Now
          </button>
        </th>
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

export default Myproducktcall;
