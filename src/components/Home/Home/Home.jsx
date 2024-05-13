import React from "react";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategories/BookCategories";
import FeaturedBooks from "../Featured Books/FeaturedBooks";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import ChildrenSection from "../ChildrenSection/ChildrenSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BookCategories></BookCategories>
      <FeaturedBooks></FeaturedBooks>
      <UpcomingEvents></UpcomingEvents>
      <ChildrenSection></ChildrenSection>
    </div>
  );
};

export default Home;
