import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const AddProjuct = () => {
  const { user } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handalPostFrom = (data) => {
    const imgdata = new FormData();
    imgdata.append("image", data.userImg[0]);
    console.log(imgdata);
    const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_Imgbb}`;
    fetch(url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const postinfo = {
          title: data.title,
          price: data.price,
          location: data.location,
          oldPrice: data.oldPrice,
          usedtime: data.oldtime,
          codition: data.codition,
          img: imgdata.data.display_url,
          catagory: data.catagory,
          posttime: moment().format("MMMM Do YYYY, h:mm:ss a"),
          salarname: user?.displayName,
          selaremail: user?.email,
        };
        const allcatagory = {
          catagory: data.catagory,
        };
        fetch("http://localhost:5000/produckt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(postinfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {" "}
      <div className="w-1/3 mx-auto">
        <p className="text-5xl font-bold mb-10">Add your produckt</p>
        <form onSubmit={handleSubmit(handalPostFrom)}>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Produckt Name
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("title", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("location", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Original Price
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("oldPrice", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              years of used
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("oldtime", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Consition
            </label>
            <select
              className="block mb-2 text-sm font-medium text-gray-900 "
              {...register("codition")}
            >
              <option value="Good">Good</option>
              <option value="Mediam">mediam</option>
              <option value="Old">Old</option>
            </select>
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Catagory
            </label>
            <select
              className="block mb-2 text-sm font-medium text-gray-900 "
              {...register("catagory")}
            >
              <option value="Good">Good</option>
              <option value="Mediam">mediam</option>
              <option value="Old">Old</option>
            </select>
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              img
            </label>
            <input
              type="file"
              placeholder="Enter your Password"
              {...register("userImg", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <button
            type="submit"
            className="text-white text-3xl  w-full mt-5 bg-gray-800 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2 text-center  "
          >
            post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjuct;
