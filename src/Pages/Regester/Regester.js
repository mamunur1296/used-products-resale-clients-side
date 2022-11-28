import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import SmallLoder from "../../Components/Loder/SmallLoder";
import useTitle from "../../Hooks/useTitle";

const Regester = () => {
  useTitle("Regester ");
  const { user, regester, logout, updateregesterUser } =
    useContext(AuthContext);
  const [loging, setLoding] = useState(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
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
                  varify: false,
                };
                console.log(dbUser);
                fetch(`http://localhost:5000/users`, {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(dbUser),
                })
                  .then((res) => res.json())
                  .then((postdata) => {
                    console.log(postdata);
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
    <div className=" my-5 mx-5 md:w-1/3 md:mx-auto">
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
            {...register("email", {
              required: "this fild is requerd",
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "enter your valid email",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        {errors.email && (
          <small className="text-red-500">{errors.email.message}</small>
        )}
        <div className="mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Buyers/Seller
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            {...register("roll")}
          >
            <option value="user">buyers</option>
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
              required: "this fild is requerd",
              pattern: {
                // value: /^[@#][A-Za-z0-9]{7,30}$/,
                message:
                  "password Mast( 7 to 13 caractor ,uppsercass ,lower Cash ,1 number )",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        {errors.password && (
          <p>
            <small className="text-red-500">{errors.password.message}</small>
          </p>
        )}
        <button
          type="submit"
          class="text-gray-900 my-10 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          {loging ? (
            <>
              <SmallLoder></SmallLoder>
            </>
          ) : (
            "Regester"
          )}
        </button>
      </form>
    </div>
  );
};

export default Regester;
