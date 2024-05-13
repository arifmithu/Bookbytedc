import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";

const UpcomingEvents = () => {
  const handleRegister = () => {
    Swal.fire("Congratulations. You are registered now!");
  };
  return (
    <div className="mx-5 md-mx[50px] lg:mx-[80px] rounded-lg mt-20">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Upcoming Events
          </div>
        </Fade>
        <Slide direction="right">
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 md:w-1/2 lg:w-1/2">
            We always inform our readers what is going to happen next at our
            place. So check down below about next event.
          </div>
        </Slide>
      </div>
      <header className=" dark:bg-gray-900 mt-[-50px]">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold lg:text-5xl dark:text-white ">
                  Author's <span className="text-blue-500">Entry</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Famous author{" "}
                  <span className="font-medium text-blue-500">Arif Azad</span>{" "}
                  is coming to our place at June 5th.
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <input
                    id="email"
                    type="email"
                    required
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button
                    onClick={handleRegister}
                    className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Fade direction="right">
                <img
                  className="w-[140%] h-[150%] max-w-md "
                  src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                  alt="email illustration vector art"
                />
              </Fade>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UpcomingEvents;
