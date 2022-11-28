import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Blog2 = () => {
  useTitle("How does prototypical inheritance work?");
  return (
    <div>
      <Link class="block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          How does prototypical inheritance work?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          In programming, we often want to take something and extend it. For
          instance, we have a user object with its properties and methods, and
          want to make admin and guest as slightly modified variants of it. We’d
          like to reuse what we have in user, not copy/reimplement its methods,
          just build a new object on top of it. Prototypal inheritance is a
          language feature that helps in that.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          In JavaScript, objects have a special hidden property [[Prototype]]
          (as named in the specification), that is either null or references
          another object. That object is called “a prototype”: When we read a
          property from object, and it’s missing, JavaScript automatically takes
          it from the prototype. In programming, this is called “prototypal
          inheritance”. And soon we’ll study many examples of such inheritance,
          as well as cooler language features built upon it. The property
          [[Prototype]] is internal and hidden, but there are many ways to set
          it. One of them is to use the special name __proto__, like this:
        </p>
      </Link>
    </div>
  );
};

export default Blog2;
