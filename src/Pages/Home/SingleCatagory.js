import React from "react";
import { Link } from "react-router-dom";

const SingleCatagory = ({ catagory }) => {
  console.log(catagory);
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
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
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <div className="">
            <Link to={`/allProduckt/${catagory.catagory}`}>
              <button className="btn bg-gray-500 text-white w-full">all</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
