import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Login = () => {
  const { user, loginWithEmail, loginWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  console.log(user);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handalLogin = (data) => {
    loginWithEmail(data.email, data.password)
      .then((logindata) => {
        fetch(`http://localhost:5000/users?email=${data.email}`, {
          method: "get",
        })
          .then((res) => res.json())
          .then((postdata) => {
            localStorage.setItem("token", postdata?.token);

            navigate(from, { replace: true });
          });
        console.log(logindata);
      })
      .then((err) => console.log(err));
  };

  const handalGoogle = () => {
    loginWithGoogle()
      .then((gogledata) => {
        // console.log(gogledata.user);
        const dbUser = {
          name: gogledata.user?.displayName,
          photo: gogledata.user?.photoURL,
          roll: "user",
          email: gogledata.user?.email,
          varify: false,
        };
        console.log(dbUser);

        fetch(`http://localhost:5000/users?email=${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dbUser),
        })
          .then((res) => res.json())
          .then((postdata) => {
            localStorage.setItem("token", postdata?.token);
            navigate(from, { replace: true });
          });
      })
      .then((err) => console.log(err));
  };
  return (
    <div>
      <div className="w-1/3 mx-auto">
        <p className="text-5xl font-bold mb-10">Pleass Login </p>
        <form onSubmit={handleSubmit(handalLogin)}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
            </label>
            <input
              placeholder="Enter your email"
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

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: "this fild is requerd",
                pattern: {
                  message:
                    "password Mast( 8 to 32 caractor ,uppsercass ,lower Cash ,1 number )",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button className="text-xs hover:underline">
              Forgot password?
            </button>
          </div>
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
          <button
            type="submit"
            className="text-white text-3xl  w-full mt-5 bg-gray-600 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2.5 text-center  "
          >
            Login
          </button>
          <button
            onClick={handalGoogle}
            type="submit"
            className="text-white text-3xl  w-full mt-5 bg-gray-600 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2.5 text-center  "
          >
            Login With Google
          </button>
        </form>
        <p className="px-6 text-sm text-center mt-5 ">
          Don't have an account yet?
          <Link to="/regester" className="hover:underline ">
            Regester
          </Link>
          .
        </p>
      </div>
      );
    </div>
  );
};

export default Login;
