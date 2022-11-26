import React from "react";
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div>
        <label htmlFor="blogDrawer" className=" lg:hidden    drawer-button ">
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
      <div className="drawer drawer-mobile">
        <input id="blogDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="blogDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/blog">
                What are the different ways to manage a state in a React
                application?
              </Link>
            </li>
            <li>
              <Link to="/blog/blog2">
                What are the different ways to manage a state in a React
                application?
              </Link>
            </li>
            <li>
              <Link to="/blog/blog3">
                What are the different ways to manage a state in a React
                application?
              </Link>
            </li>
            <li>
              <Link to="/blog/blog4">
                What are the different ways to manage a state in a React
                application?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
