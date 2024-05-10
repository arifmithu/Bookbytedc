import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, user, setUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;
    if (password != confirmPassword) {
      setRegisterError("Password is not matched");
      return;
    }
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have atleast one upper case letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should have atleast one lower case letter.");
      return;
    } else if (!/(?=.*\W)/.test(password)) {
      setRegisterError("Password should have atleast one special character.");
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        Swal.fire("User created successfully");
        setUser({ ...user, displayName: name, photoURL: photo });
        console.log(user);
      })
      .catch((error) => {
        Swal.fire(`${error.message}`);
      });
  };
  return (
    <div>
      <section class=" mx-5 md:mx-[50px] lg:mx-[80px] p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mt-5 md:mt-8 lg:mt-12">
        <h2 class="text-2xl text-center font-bold text-gray-700 capitalize dark:text-white">
          Please Register !
        </h2>

        <form onSubmit={handleRegister}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="name"
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
                name="email"
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
                name="password"
                placeholder="Enter your password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {registerError ? (
                <p className="text-red-400">{registerError}</p>
              ) : (
                ""
              )}
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
                name="confirmPassword"
                placeholder="Enter confirm password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <label
              class="text-gray-700 dark:text-gray-200"
              for="passwordConfirmation"
            >
              Photo URL
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              name="photo"
              placeholder="Enter your photo URL"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div class="flex justify-center mt-6">
            <input
              type="submit"
              value={"Register"}
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            />
          </div>
        </form>
        <p className="text-center mt-5 w-full">
          Already have an account ?{" "}
          <span className="text-blue-500 font-bold">
            <Link to={"/login"}>Sign In</Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Register;
