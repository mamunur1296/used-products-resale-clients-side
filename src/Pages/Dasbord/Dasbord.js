import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import Loder from "../../Components/Loder/Loder";

const Dasbord = () => {
  const { user } = useContext(AuthContext);
  const [dbuser, setDbuser] = useState([]);
  console.log(dbuser?.email);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch(`https://recycle-server.vercel.app/loginUser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDbuser(data);
        setUserloder(false);
      });
  }, [user?.email]);
  if (userloder) {
    return <Loder></Loder>;
  }

  return (
    <div className="w-11/12 mx-auto  bg-base-300">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"> My Dashbord</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link to="/dasbord">My Order</Link>
                </li>

                {dbuser?.roll === "Seller" ? (
                  <>
                    <li>
                      <Link to="/dasbord/myproduckt">My Products</Link>
                    </li>
                    <li>
                      <Link to="/dasbord/addproduckt">Add A product</Link>
                    </li>
                    {/* <li>
                      <Link to="/dasbord/mybuers">My buyers</Link>
                    </li> */}
                  </>
                ) : (
                  <></>
                )}
                {dbuser?.roll === "admin" ? (
                  <>
                    <li>
                      <Link to="/dasbord/allselars">All Sellers</Link>
                    </li>
                    <li>
                      <Link to="/dasbord/allbuyers">All Buyers</Link>
                    </li>
                    <li>
                      <Link to="/dasbord/alluser">All User Control</Link>
                    </li>
                    <li>
                      <Link to="/dasbord/reporteditems">Reported Items</Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-base-100">
            <li>
              <Link to="/dasbord">My Order</Link>
            </li>

            {dbuser?.roll === "Seller" ? (
              <>
                <li>
                  <Link to="/dasbord/myproduckt">My Products</Link>
                </li>
                <li>
                  <Link to="/dasbord/addproduckt">Add A product</Link>
                </li>
                {/* <li>
                      <Link to="/dasbord/mybuers">My buyers</Link>
                    </li> */}
              </>
            ) : (
              <></>
            )}
            {dbuser?.roll === "admin" ? (
              <>
                <li>
                  <Link to="/dasbord/allselars">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dasbord/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dasbord/alluser">All User Control</Link>
                </li>
                <li>
                  <Link to="/dasbord/reporteditems">Reported Items</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dasbord;
