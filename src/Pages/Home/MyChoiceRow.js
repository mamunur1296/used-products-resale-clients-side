import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const MyChoiceRow = ({ selar }) => {
  return (
    <div>
      <div>
        <img
          className="object-cover w-24 h-24 rounded-full shadow"
          src={selar.photo}
          alt="Person"
        />
        <div className="flex flex-col justify-center mt-2">
          <p className="text-lg font-bold">{selar.name}</p>
          <div className="flex items-center space-x-3 ">
            <p className="mb-4 text-xl text-gray-800">verified seller</p>
            <p className="mb-4 text-xl text-blue-600">
              <FaRegCheckCircle></FaRegCheckCircle>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChoiceRow;
