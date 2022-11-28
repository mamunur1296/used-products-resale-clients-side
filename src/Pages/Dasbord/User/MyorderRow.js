import React from "react";
import { Link } from "react-router-dom";

const MyorderRow = ({ myorder }) => {
  const { img, title, price, _id, payment } = myorder;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask   w-16  ">
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
          {payment ? (
            <>
              <button>Paid</button>
            </>
          ) : (
            <>
              <Link to={`/dasbord/payment/${_id}`}>
                <button class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Pay Now
                </button>
              </Link>
            </>
          )}
        </th>
      </tr>
    </>
  );
};

export default MyorderRow;
