import React from "react";
import { Link } from "react-router-dom";

const AddColl = ({ add, refetch }) => {
  const {
    _id,
    report,
    img,
    title,
    payment,
    price,
    location,
    resalesPrice,
    usedtime,
    phon,
    discription,
    codition,
    catagory,
    selaremail,
    salarname,
    posttime,
    salarsimg,
    varify,
  } = add;

  return (
    <>
      {payment ? (
        <></>
      ) : (
        <>
          <div className="overflow-hidden transition-shadow duration-300 bg-orange-100 rounded shadow-sm">
            <img src={img} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                {posttime}
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {title}
              </a>
              <p className="mb-2 text-gray-700">Price: ${price}</p>
              <Link className="inline-flex text-red-500-400 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                view Details
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddColl;
