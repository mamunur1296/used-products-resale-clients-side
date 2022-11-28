import React from "react";
import { toast } from "react-toastify";

const ReportedColl = ({ user, refetch }) => {
  const { img, title, price, _id, payment } = user;
  const handalUserDelete = (id) => {
    const isAcjest = window.confirm("are you sure ");
    if (isAcjest) {
      fetch(`https://recycle-server.vercel.app/RepostdeleteDeleit/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("deleted successfully");
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
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <p>{title}</p>
        </td>
        <td>{price}</td>
        <td>Reported</td>

        <th>
          <button
            onClick={() => handalUserDelete(_id)}
            class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            DELETE
          </button>
        </th>
      </tr>
    </>
  );
};

export default ReportedColl;
