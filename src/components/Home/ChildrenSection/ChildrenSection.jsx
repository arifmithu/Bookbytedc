import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const ChildrenSection = () => {
  return (
    <div className="mx-5 md-mx[50px] lg:mx-[80px] rounded-lg mt-20">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Children's Area
          </div>
        </Fade>
        <Slide>
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 md:w-1/2 lg:w-1/2">
            We have dedicated section for children's books & activities,
            including storytime schedules, educational resources, & reading
            recommendations for kids.
          </div>
        </Slide>
      </div>
      <div className="items-center gap-10 lg:flex">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Fade direction="right">
            <img
              className="w-[140%] h-[150%] max-w-md "
              src="https://i.ibb.co/DkbyfxF/Family-Values-Family-1.png"
              alt="email illustration vector art"
            />
          </Fade>
        </div>
        <div className="w-full lg:w-2/3">
          <Fade>
            <h1 className="text-3xl font-semibold lg:text-5xl dark:text-white ">
              We help children to <span className="text-blue-500">Grow</span>
            </h1>
          </Fade>
          <p className="mt-5">
            We play a crucial role in providing quality education to children.
            With access to a diverse range of books, resources, and educational
            programs, libraries nurture a love for reading, foster curiosity,
            and support academic success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildrenSection;
