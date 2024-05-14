import React, { useContext } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { AuthContext } from "../../Provider/AuthProvider";
import { GiBookAura } from "react-icons/gi";

const AboutUs = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-5 md-mx[50px] lg:mx-[80px] rounded-lg shadow-xl mb-12 mt-20">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            About Us
          </div>
        </Fade>
        <Slide>
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 md:w-1/2 lg:w-1/2">
            Lets take a look to know about us with glimpse of an eye.
          </div>
        </Slide>
      </div>
      {/* stats */}

      <div className="pb-8 mt-6 text-center">
        <div className="shadow stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">42.4K</div>
            <div className="stat-desc">56% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Website Visitor</div>
            <div className="stat-value text-secondary">1.6M</div>
            <div className="stat-desc">34% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src=" https://i.ibb.co/b5DMkRt/account-880780-1920.png" />
                  {/* <GiBookAura className="text-blue-500" /> */}
                </div>
              </div>
            </div>
            <div className="stat-value">72%</div>
            <div className="stat-title">Target Fulfil</div>
            <div className="stat-desc text-secondary">12% target pending.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
