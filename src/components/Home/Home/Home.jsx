import React from "react";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategories/BookCategories";
import FeaturedBooks from "../Featured Books/FeaturedBooks";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import ChildrenSection from "../ChildrenSection/ChildrenSection";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BookCategories></BookCategories>
      <FeaturedBooks></FeaturedBooks>
      <UpcomingEvents></UpcomingEvents>
      <ChildrenSection></ChildrenSection>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
