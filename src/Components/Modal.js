import React from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const {
    img,
    title,
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
  } = isOpen;
  const handalModaldata = (data) => {
    const customarInfo = {
      ...isOpen,
      customarphon: data.customarphon,
      customaraddress: data.customaraddress,
    };
    console.log(customarInfo);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="producktConfirmModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <p className="mb-2 text-2xl text-gray-700">Title : {title}</p>
          <img className="object-cover w-full h-64" src={img} alt="" />
          <div class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src={salarsimg} alt="" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {salarname}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {selaremail}
                </p>
              </div>
            </div>
          </div>

          <p className="mb-2 text-gray-700">Resal Price : ${resalesPrice}</p>
          <form onSubmit={handleSubmit(handalModaldata)}>
            <div className="mt-10">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Phon No:-
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                {...register("customarphon", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div className="mt-10">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Address Details,
              </label>
              <textarea
                rows="4"
                {...register("customaraddress", { required: true })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white text-3xl  w-full mt-5 bg-gray-800 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2 text-center  "
            >
              Submit
            </button>
          </form>
          <label
            htmlFor="producktConfirmModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
