import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChackoutFroms from "./ChackoutFroms";
const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);
console.log(stripePromise);
const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="w-96 mx-auto">
        <h2 className="text-3xl text-center py-5">Payment</h2>
        <p>Price: ${data.price}</p>
        <p>Tax: 1%</p>
        <p className="mb-5">Vat: .01%</p>
        <Elements stripe={stripePromise}>
          <ChackoutFroms booking={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
