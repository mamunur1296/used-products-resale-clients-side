import React from "react";

const Myproducktcall = ({ pro, refetch }) => {
  const { img, title, _id, price, advertised, payment } = pro;
  const handalDelet = (id) => {
    const isAcjest = window.confirm("are you sure ");
    if (isAcjest) {
      fetch(`https://recycle-server.vercel.app/myproduckt/${id}`, {
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
    fetch(`https://recycle-server.vercel.app/advertised/${addid}`, {
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
          <button class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {payment ? "sold" : "available"}
          </button>
        </th>
        <th>
          <button
            onClick={() => handalDelet(_id)}
            class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            DELETE
          </button>
        </th>
        <th>
          <button
            onClick={() => handalAddvartice(_id)}
            class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {advertised ? "Add Raning" : "advartice"}
          </button>
        </th>
      </tr>
    </>
  );
};

export default Myproducktcall;
