import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Blog4 = () => {
  useTitle("React vs. Angular vs. Vue?");
  return (
    <div>
      <Link class="block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          React vs. Angular vs. Vue?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          One of the most important questions for any business willing to
          develop an application is, “which front-end technology (client-side)
          should we choose?” With so many options for JavaScript frameworks
          available, your app development team needs to be cautious about their
          choice. This article will examine the positives and negatives of
          React, Angular, and Vue and situations in which each is optimal to
          use.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Angular is an open source, frontend web app framework by Google that
          has a Model-View-Controller (MVC) architecture and makes development,
          maintenance, and testing easier for developers. It’s great for
          building highly active and interactive web applications, but it is
          most popular for Single page applications.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Introduced by Facebook, React is an open source JavaScript library for
          building interactive, stateful, and reusable user interfaces (UI). It
          is good for rendering complex UI with high performances. It also works
          with the basic fundamental of virtual Document Object Model (DOM) to
          offer a highly stable web application.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Vue is a progressive JavaScript framework for building user
          interfaces. Vue is designed from the ground up to be incrementally
          adoptable. It comes with various optional tools for building user
          interfaces. Vue has a high capability of backing sophisticated
          Single-Page Applications when used in combination with
        </p>
      </Link>
    </div>
  );
};

export default Blog4;
