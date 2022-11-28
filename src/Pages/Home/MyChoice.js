import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import Loder from "../../Components/Loder/Loder";
import MyChoiceRow from "./MyChoiceRow";

const MyChoice = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allbsaller"],
    queryFn: async () => {
      const res = await fetch(`https://recycle-server.vercel.app/salarsTohome`);
      const data = res.json();
      return data;
    },
  });
  console.log(data);
  if (isLoading) {
    return <Loder></Loder>;
  }
  return (
    <div>
      {data.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    OUR TIME
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="70326c9b-4a0f-429b-9c76-792941e326d5"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">The</span>
                  </span>{" "}
                  Best - Books Sellers - ON This Times
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Authoritatively ranked lists of books sold in the United
                  States, sorted by format and genre.
                </p>
              </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                {data.map((selar) => (
                  <MyChoiceRow key={selar._id} selar={selar}></MyChoiceRow>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyChoice;
