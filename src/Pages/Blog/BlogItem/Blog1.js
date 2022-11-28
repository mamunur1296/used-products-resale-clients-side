import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Blog1 = () => {
  useTitle(
    "What are the different ways to manage a state in a React application?"
  );
  return (
    <Link class="block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What are the different ways to manage a state in a React application?
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        The state of any application is represented by the user interface of the
        application. The state is mutable and whenever the user interacts with
        the application and changes its state, the user interface of the app may
        change as it will be represented by the new state. These states can be
        managed by a React component. The main objectives of the react component
        are to store the state and allow it to get updated once the user
        interacts with the application. It also ensures that the UI change
        whenever there is any update in the State. In this article, we will
        explain the ways to manage the states. In this topic, we are going to
        learn about React State Management.
      </p>
      <p class="font-normal mt-5 text-gray-700 dark:text-gray-400">
        <span className="font-bold text-lg">Example :</span>useState hook in
        React is used by many React beginners when they first start using state
        in React. The initial state is taken as an argument in useState hook.
        Initially when the React component renders, and returns two values. The
        values are the state update function and the current state. For
        displaying the current state of the component current state is used and
        for changing the current state the state update function is used.
        useContext helps in passing the props down the components tree. React’s
        Context API helps in passing the props between the grandfather component
        to the grandchild component. This process doesn’t bother the other React
        Components which are available in the chain. In the example below, the
        value can be changed in the value changing window and we can toggle
        between different themes as well with the mentioned buttons. The files
        used to develop the application are mentioned in the below image,
        followed by the code of each file respectively.
      </p>
    </Link>
  );
};

export default Blog1;
