import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import SmallLoder from "../../Components/Loder/SmallLoder";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("login page ");
  const { user, loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const [loding, setLoding] = useState(false);

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
    setLoding(true);
    loginWithEmail(data.email, data.password)
      .then((logindata) => {
        fetch(`https://recycle-server.vercel.app/users?email=${data.email}`, {
          method: "get",
        })
          .then((res) => res.json())
          .then((postdata) => {
            localStorage.setItem("token", postdata?.token);

            navigate(from, { replace: true });
            setLoding(false);
          });
        console.log(logindata);
      })
      .then((err) => {
        console.log(err);
        setLoding(false);
      });
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

        fetch(`https://recycle-server.vercel.app/users?email=${user?.email}`, {
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
      <div className=" my-5 mx-5 md:w-1/3 md:mx-auto">
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
                  // value: /^[@#][A-Za-z0-9]{7,30}$/,
                  message:
                    "password Mast( 7 to 13 caractor ,uppsercass ,lower Cash ,1 number )",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            {errors.password && (
              <p>
                <small className="text-red-500">
                  {errors.password.message}
                </small>
              </p>
            )}
            <button className="text-xs hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            {loding ? (
              <>
                <SmallLoder></SmallLoder>
              </>
            ) : (
              <>LogIn</>
            )}
          </button>
        </form>
        <button
          onClick={handalGoogle}
          type="submit"
          class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Login With Google
        </button>
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
