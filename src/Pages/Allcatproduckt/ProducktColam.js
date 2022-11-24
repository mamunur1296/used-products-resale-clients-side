import React from "react";
import Modal from "../../Components/Modal";

const ProducktColam = ({ produckt, setIsOpen }) => {
  const { img } = produckt;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={img} className="object-cover w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            traveling
          </a>
          <span className="text-gray-600">— 28 Dec 2020</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          Visit the East
        </a>
        <p className="mb-2 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <label
          onClick={() => setIsOpen(produckt)}
          htmlFor="producktConfirmModal"
          className="btn"
        >
          Book now
        </label>
      </div>
    </div>
  );
};

export default ProducktColam;
