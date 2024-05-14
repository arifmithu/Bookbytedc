import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowedBookCard from "./BorrowedBookCard";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://bookbytedc-server.vercel.app
/books/borrowed/allbooks?email=${user.email}`,
      { Credential: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      });
  }, []);
  console.log(borrowedBooks);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-[50px] lg:mx-[80px] shadow-lg rounded-lg mt-5 md:mt-8 lg:mt-12">
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
