import React from "react";
import { Link } from "react-router-dom";

const MyorderRow = ({ myorder }) => {
  const { img, title, price, _id } = myorder;
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
          <Link to={`/dasbord/payment/${_id}`}>
            <button className="btn btn-ghost text-white bg-gray-400 btn-xs">
              Pay Now
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default MyorderRow;
