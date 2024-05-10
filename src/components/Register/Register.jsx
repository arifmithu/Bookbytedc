import React from "react";

const Register = () => {
  return (
    <div>
      <section class=" mx-5 md:mx-[50px] lg:mx-[80px] p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mt-5 md:mt-8 lg:mt-12">
        <h2 class="text-2xl text-center font-bold text-gray-700 capitalize dark:text-white">
          Please Register !
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Enter your email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                placeholder="Enter confirm password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <input
              type="submit"
              value={"Register"}
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
