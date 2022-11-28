import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Blog3 = () => {
  useTitle("What is a unit test? Why should we write unit tests?");
  return (
    <div>
      <Link class="block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is a unit test? Why should we write unit tests?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          What are unit tests, why unit testing is important, and how it they
          help developers and business owners? For the answers to these
          questions and more, read on. Let’s start with the definition: Unit
          testing is a software testing method where “units”—the individual
          components of software—are tested. Developers write unit tests for
          their code to make sure that the code works correctly. This helps to
          detect and protect against bugs in the future.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Sometimes developers write unit tests first, then write the code. This
          approach is also known as test-driven development (TDD). In TDD,
          requirements are turned into specific test cases, then the software is
          improved to pass the new tests. In this approach, no code is added
          that hasn’t been proven to meet defined requirements. Unit testing is
          similar, in that it allows developers to modify code without affecting
          the functionality of other units or the product, as a whole.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Unit tests are usually written in the form of functions and check the
          value and behavior of these functions in various scenarios. For
          example, let’s imagine a function for the division of two numbers: the
          developer decides to follow the TDD approach, first writing a test
          with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’
          expected as the result. Another example: when the divisor is zero, we
          don’t expect that the function will produce a value—we expect that it
          will generate an exception. We can expect that the function will
          notify some component about an attempt to divide by zero. Thus, we
          test two cases:
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Some developers underestimate the importance of writing unit tests.
          What follows are five benefits of unit testing that you may want to
          consider before forming your own opinion. Any bugs are found easily
          and quicker Code covered with tests is more reliable than the code
          without. If a future change breaks something in the code, developers
          will be able to identify the root of the problem right away rather
          than coming through an unwieldy codebase to find the issue. Best
          practices suggest that developers first run all unit tests or a group
          of tests locally to make sure any coding changes don’t disrupt the
          existing code. However, consider the human factor: A developer might
          forget to run unit tests after making changes and submit potentially
          non-working code to a common branch. To avoid this, many companies
          apply a continuous development approach. Tools for continuous
          integration are used for this, allowing developers to run unit tests
          automatically. Thus, any unwanted changes in the code will be detected
          by a cold, logical machine. The speed of detecting non-working code
          depends on the tools used for continuous integration. Tests can be set
          to run either a one-time check at a certain time interval or can be
          run immediately in real-time to review changes. In short, unit tests
          help developers detect problems immediately, then fix them quickly.
          With fewer resources spent finding bugs, teams can move on to the next
          phase of a project.
        </p>
      </Link>
    </div>
  );
};

export default Blog3;
