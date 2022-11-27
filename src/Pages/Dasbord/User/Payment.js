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
      <h1>payment</h1>
      <div className="w-96">
        <Elements stripe={stripePromise}>
          <ChackoutFroms booking={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
