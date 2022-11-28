import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Loder from "../../Components/Loder/Loder";
import useTitle from "../../Hooks/useTitle";
import SingleCatagory from "../Home/SingleCatagory";
import CatagoryUl from "./CatagoryUl";

const Allproduckt = () => {
  const [catagorydata, setCatagorydata] = useState([]);
  const [loder, setLoder] = useState(false);
  useEffect(() => {
    setLoder(true);
    fetch("https://recycle-server.vercel.app/allCatagory", {
      headers: {
        authorization: `brr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCatagorydata(data);
        setLoder(false);
      });
  }, []);
  useTitle("Catagory route");
  if (loder) {
    return <Loder></Loder>;
  }
  return (
    <>
      {/* {catagorydata.length === 0 ?<></>:<></>} */}
      {catagorydata.length === 0 ? (
        <>
          <div className="flex items-center justify-center h-screen space-x-2">
            <h1 className="text-5xl text-black font-bold">No data Available</h1>
          </div>
        </>
      ) : (
        <>
          <div>
            <label
              htmlFor="blogDrawer"
              className=" lg:hidden    drawer-button "
            >
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
            </label>
          </div>
          <div className="drawer  drawer-mobile">
            <input id="blogDrawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
              <Outlet></Outlet>
            </div>
            <div className="drawer-side  ">
              <label htmlFor="blogDrawer" className="drawer-overlay"></label>
              <ul className="menu bg-orange-100 p-4 w-80 bg-base-100 text-base-content">
                {catagorydata?.map((catagory) => (
                  <CatagoryUl
                    key={catagory._id}
                    catagory={catagory}
                  ></CatagoryUl>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Allproduckt;
