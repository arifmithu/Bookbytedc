import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCardByCategory from "./BookCardByCategory";

const BooksByCategory = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-[50px] lg:mx-[80px] shadow-lg rounded-lg mt-5 md:mt-8 lg:mt-12">
        {books.map((book, index) => (
          <BookCardByCategory key={index} book={book}></BookCardByCategory>
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
