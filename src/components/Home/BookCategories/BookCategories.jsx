import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Fade, Slide } from "react-awesome-reveal";

const BookCategories = () => {
  const [books, setBooks] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("https://bookbytedc-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        const categories = [];
        data.map((book) => {
          const category = book.category.toLowerCase();
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
        setAllCategories(categories);
      });
  }, []);
  // console.log(allCategories);
  return (
    <div className="mx-5 md:mx-[50px] lg:mx-[80px] mt-32 ">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Browse By Category
          </div>
        </Fade>
        <Slide>
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 lg:w-1/2">
            Dive into Our Diverse Book Categories and Find the Perfect Read for
            Every Mood, Interest, and Preference.
          </div>
        </Slide>
      </div>
      <Fade>
        <div className="grid grid-cols-1 gap-5 mt-5 md-mt-8 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((category, index) => (
            <CategoryCard key={index} category={category}></CategoryCard>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default BookCategories;
