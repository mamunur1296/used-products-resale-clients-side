import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assits/favicon.png";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Nave = () => {
  const { user, logout } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(true);
  const handalLogout = () => {
    logout().then().catch();
  };
  return (
    <div className="w-11/12 mx-auto">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Recycle Book
            </span>
          </Link>
          <button
            onClick={() => setIsActive(!isActive)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              isActive
                ? " hidden w-full md:block md:w-auto"
                : " w-full text-center md:block md:w-auto"
            }
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/post"
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  post
                </Link>
              </li>
              <li>
                <Link
                  to="/dasbord"
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  dasbord
                </Link>
              </li>
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={handalLogout}
                >
                  Log Out
                </button>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-black hover:text-deep-purple-accent-400  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {user?.displayName}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
