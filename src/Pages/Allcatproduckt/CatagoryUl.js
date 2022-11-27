import React from "react";
import { Link } from "react-router-dom";

const CatagoryUl = ({ catagory }) => {
  console.log(catagory);
  return (
    <div>
      <div className="">
        <Link to={`/allProduckt/${catagory._id}`}>
          <button
            type="button"
            class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            {catagory.catagory}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatagoryUl;
