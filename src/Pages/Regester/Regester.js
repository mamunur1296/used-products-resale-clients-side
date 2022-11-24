import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import { useDbuser } from "../../Hooks/authHooke";

const Regester = () => {
  const { regester, logout, updateregesterUser } = useContext(AuthContext);
  const [loging, setLoding] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const handalRegesterForm = (data) => {
    setLoding(true);

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
        regester(data.email, data.password)
          .then((regesterdata) => {
            const userInfo = {
              displayName: data.firstName + " " + data.lastName,
              photoURL: imgdata.data.display_url,
            };
            updateregesterUser(userInfo)
              .then((updatedata) => {
                console.log("ragistercomplite");
                const dbUser = {
                  name: data.firstName + " " + data.lastName,
                  photo: imgdata.data.display_url,
                  roll: data.roll,
                  email: data.email,
                };
                console.log(dbUser);
                fetch(`http://localhost:5000/users?email=${data.email}`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(dbUser),
                })
                  .then((res) => res.json())
                  .then((postdata) => {
                    localStorage.setItem("token", postdata?.token);
                    setLoding(false);
                    logout();
                    reset();
                    navigate("/login");
                  });
              })
              .catch((err) => {
                setLoding(false);
              });
          })
          .catch((err) => {
            setLoding(false);
            console.log(err);
          });
      });
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
            Select This Option
          </label>
          <select
            className="block mb-2 text-sm font-medium text-gray-900 "
            {...register("roll")}
          >
            <option value="user">user</option>
            <option value="Seller">Seller</option>
          </select>
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
          {loging ? <p className="animate-pulse"> Loding...</p> : "Regester"}
        </button>
      </form>
    </div>
  );
};

export default Regester;
