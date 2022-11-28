import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChackoutFroms = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [tranjectionId, setTranjectionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigite = useNavigate();
  const { price, customaremail, _id, producktId } = booking;
  console.log(JSON.stringify(price));
  useEffect(() => {
    fetch("https://recycle-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `brr ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "mamun",
            email: customaremail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        price,
        customaremail,
        tranjuctionId: paymentIntent.id,
        bookingId: _id,
        producktId,
      };

      fetch("https://recycle-server.vercel.app/paymentitem", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `brr ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("your payment successfully ");
          navigite("/dasbord");
        })
        .catch((err) => console.log(err));

      setSuccess("congress ,your payment is successfull");
      setTranjectionId(paymentIntent.id);
    }
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          class="text-gray-900 mt-6 w-full hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          PayMent
        </button>
      </form>
      <p>
        <small>{cardError}</small>
      </p>
      {success && (
        <div>
          <p>{success}</p>
          <p>{tranjectionId}</p>
        </div>
      )}
    </>
  );
};

export default ChackoutFroms;
