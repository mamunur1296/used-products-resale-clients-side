import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvaider/AuthProvaider";
import Login from "../Pages/Login/Login";
import SmallLoder from "./Loder/SmallLoder";

const Modal = ({ isOpen, ismodalOpen, setIsModalOpen }) => {
  const { user } = useContext(AuthContext);
  const [loding, setloding] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const {
    _id,
    img,
    title,
    price,
    location,
    resalesPrice,
    usedtime,
    phon,
    varify,
    discription,
    codition,
    catagory,
    selaremail,
    salarname,
    posttime,
    salarsimg,
  } = isOpen;
  const handalModaldata = (data) => {
    setloding(true);
    const customarInfo = {
      producktId: _id,
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
      customarphon: data.customarphon,
      customaraddress: data.customaraddress,
      customaremail: user?.email,
    };
    fetch("http://localhost:5000/customardetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customarInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("your booking confirm ");
        setloding(false);
        reset();
      });
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
          <img className="object-cover w-full  h-60" src={img} alt="" />
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

          <p className="mb-2 text-gray-700">Resal Price : ${resalesPrice}</p>
          <form onSubmit={handleSubmit(handalModaldata)}>
            <div className="mt-10">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Phon No:-
              </label>
              <input
                type="text"
                placeholder="Enter Your Phon Numbar"
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
              onClick={() => setIsModalOpen(!ismodalOpen)}
              class="text-gray-900 mt-5 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <label type="submit" htmlFor="producktConfirmModal">
                {loding ? (
                  <>
                    <SmallLoder></SmallLoder>
                  </>
                ) : (
                  "Submit"
                )}
              </label>
            </button>
          </form>
        </div>
      </div>
      <label htmlFor="producktConfirmModal"></label>
    </div>
  );
};

export default Modal;
