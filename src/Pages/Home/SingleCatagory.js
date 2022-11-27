import React from "react";
import { Link } from "react-router-dom";

const SingleCatagory = ({ catagory }) => {
  console.log(catagory);
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-orange-100 rounded">
        <a href="/" aria-label="Article">
          <img
            src={catagory.img}
            className="object-cover w-full h-64 rounded"
            alt=""
          />
        </a>
        <div className="py-5">
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">{catagory.catagory}</p>
          </a>
          <p className="mb-4 text-gray-700">
            Enjoy low prices on{" "}
            <span className="font-bold">{catagory.catagory}</span> earth's
            biggest selection of books,
          </p>
          <div className="">
            <Link to={`/allProduckt/${catagory._id}`}>
              <button
                type="button"
                class="text-gray-900 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
