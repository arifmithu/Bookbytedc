import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCardByCategory from "./BookCardByCategory";
import { Fade } from "react-awesome-reveal";

const BooksByCategory = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="mt-5 md:mt-8 lg:mt-20 mx-5 md:mx-[50px] lg:mx-[80px]">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Collections of {books[0].category.toUpperCase()}
          </div>
        </Fade>
        <Fade>
          <div className="w-2/3 mx-auto mt-6 mb-16 text-center lg:mt-12 md:w-1/2 lg:w-3/4">
            Discover the enchanting worlds of fantasy with our curated
            collection of epic adventures, mythical creatures, and magical
            realms. From tales of brave heroes and powerful sorcerers to quests
            for ancient treasures and battles against dark forces, our fantasy
            books transport readers to captivating realms where anything is
            possible.
          </div>
        </Fade>
      </div>
      <div className="grid grid-cols-1 gap-5 rounded-lg md:grid-cols-2 lg:grid-cols-3 ">
        {books.map((book, index) => (
          <BookCardByCategory key={index} book={book}></BookCardByCategory>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
