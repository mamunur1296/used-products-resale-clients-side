import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const ProducktColam = ({ produckt, setIsOpen }) => {
  const {
    _id,
    report,
    img,
    title,
    payment,
    price,
    location,
    resalesPrice,
    usedtime,
    phon,
    discription,
    codition,
    catagory,
    selaremail,
    salarname,
    posttime,
    salarsimg,
    varify,
  } = produckt;

  const handalreport = (id) => {
    fetch(`https://recycle-server.vercel.app/repostToAdmin/${id}`, {
      method: "POST",
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Report succerrfull");
        console.log(data);
      });
  };

  return (
    <>
      {payment ? (
        <></>
      ) : (
        <>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={img} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <div class="pb-3 sm:pb-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={salarsimg}
                        alt=""
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {salarname}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {selaremail}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {varify ? (
                        <>
                          <small className="text-3xl hover:selection:bg-green-200 p-2 rounded-full text-green-700">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </small>
                        </>
                      ) : (
                        <>
                          <small className="text-3xl">
                            <FaRegCircle></FaRegCircle>
                          </small>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="mb-2 text-gray-700">Location : {location}</p>
                <span className="text-gray-600">— {posttime}</span>
              </p>

              <p className="mb-2 text-2xl text-gray-700">Title : {title}</p>
              <p className="mb-2  text-gray-700">Used {usedtime} year</p>
              <p className="mb-2  text-gray-700">Condition {codition} </p>
              <p className="mb-2 text-gray-700">Phon : {phon}</p>
              <p className="mb-2 text-gray-700">Price : ${price}</p>
              <p className="mb-2 text-gray-700">
                Resal Price : ${resalesPrice}
              </p>
              <p className="mb-2 text-gray-700">{discription}</p>

              <label
                onClick={() => setIsOpen(produckt)}
                htmlFor="producktConfirmModal"
                type="button"
                class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Book now
              </label>
              <button
                onClick={() => handalreport(_id)}
                type="button"
                class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Report
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProducktColam;
