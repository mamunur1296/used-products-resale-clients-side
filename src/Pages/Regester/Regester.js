import React from "react";
import { useForm } from "react-hook-form";

const Regester = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const handalRegesterForm = (data) => {
    console.log(data);
  };
  return (
    <div className="w-1/3 mx-auto">
      <p className="text-5xl font-bold mb-10">Pleass Regester</p>
      <form onSubmit={handleSubmit(handalRegesterForm)}>
        <div className="mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Name
          </label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="first Name"
              {...register("firstName", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />

            <input
              type="text"
              placeholder="last Name"
              {...register("lastName", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <p>
            <small>{errors.firstName?.message}</small>
          </p>
        </div>
        <div className="mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Password"
            {...register("email", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Profile Pick
          </label>
          <input
            type="file"
            placeholder="Enter your Password"
            {...register("userImg", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div className="mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Password
          </label>

          <input
            type="Password"
            placeholder="Enter your Password"
            {...register("password", {
              required: true,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        <button
          type="submit"
          className="text-white text-3xl  w-full mt-5 bg-gray-800 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2 text-center  "
        >
          Regester
        </button>
      </form>
    </div>
  );
};

export default Regester;
