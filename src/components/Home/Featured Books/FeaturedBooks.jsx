import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import FeaturedBookCard from "./FeaturedBookCard";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookbytedc-server.vercel.app/books", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mx-5 md:mx-[50px] lg:mx-[80px] mt-20">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Featured Books
          </div>
        </Fade>
        <Slide direction="right">
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 md:w-1/2 lg:w-1/2">
            Dive into our meticulously curated collection of must-reads and
            bestsellers, carefully selected to offer you a captivating journey
            through the literary landscape.
          </div>
        </Slide>
      </div>
      <Fade>
        <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {books.slice(0, 6).map((book, index) => (
            <FeaturedBookCard key={index} book={book}></FeaturedBookCard>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default FeaturedBooks;
