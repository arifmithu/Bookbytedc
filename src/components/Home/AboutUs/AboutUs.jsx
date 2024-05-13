import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const AboutUs = () => {
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
    </div>
  );
};

export default AboutUs;
