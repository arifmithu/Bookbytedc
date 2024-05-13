import React from "react";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategories/BookCategories";
import FeaturedBooks from "../Featured Books/FeaturedBooks";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BookCategories></BookCategories>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
};

export default Home;
