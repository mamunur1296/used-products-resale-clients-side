import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import catagory from "../../Assits/catagory.png";
import catagory1 from "../../Assits/catagory1.png";
import catagory2 from "../../Assits/catagory2.png";

const Catagory = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div>
          <h2 className="text-5xl">All Catagories</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={catagory1}
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
                <p className="text-2xl font-bold leading-5">
                  Foreign Language Books
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="">
                <Link to={`/allProduckt/${"Good"}`}>
                  <button className="btn bg-gray-500 text-white w-full">
                    all
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={catagory2}
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
                <p className="text-2xl font-bold leading-5">
                  Foreign Language Books
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="">
                <Link to={`/allProduckt/${"Mediam"}`}>
                  <button className="btn bg-gray-500 text-white w-full">
                    all
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={catagory}
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
                <p className="text-2xl font-bold leading-5">
                  Foreign Language Books
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="">
                <Link to={`/allProduckt/${"Old"}`}>
                  <button className="btn bg-gray-500 text-white w-full">
                    all
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
