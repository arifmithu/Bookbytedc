import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowedBookCard from "./BorrowedBookCard";
import { Fade, Slide } from "react-awesome-reveal";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://bookbytedc-server.vercel.app/books/borrowed/allbooks?email=${user.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, []);
  console.log(borrowedBooks);
  return (
    <div className="mx-5 md:mx-[50px] lg:mx-[80px] mt-12 md:mt-16 lg:mt-20 ">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            All Borrowed Books
          </div>
        </Fade>
        <Fade>
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 lg:w-1/2">
            Here are the all books I have borrowed in diffrent times. Returning
            a book is possible from here.
          </div>
        </Fade>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 rounded-lg shadow-lg md:grid-cols-2 lg:grid-cols-3 md:mt-8 lg:mt-12">
        {borrowedBooks.map((book, index) => (
          <BorrowedBookCard
            key={index}
            book={book}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
          ></BorrowedBookCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
