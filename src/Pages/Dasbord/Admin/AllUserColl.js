import React from "react";

const AllUserColl = ({ user, refetch }) => {
  const { name, photo, roll, email, _id } = user;
  const handalUserDelete = (id) => {
    const isAcjest = window.confirm("are you sure ");
    if (isAcjest) {
      fetch(`https://recycle-server.vercel.app/userDeleit/${id}`, {
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
            onClick={() => handalUserDelete(_id)}
            class="py-2 px-3 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            delet
          </button>
        </th>
      </tr>
    </>
  );
};

export default AllUserColl;
