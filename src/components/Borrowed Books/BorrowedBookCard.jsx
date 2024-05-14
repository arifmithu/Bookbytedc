import React, { useContext, useState } from "react";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const BorrowedBookCard = ({ book, borrowedBooks, setBorrowedBooks }) => {
  const {
    _id,
    bookName,
    authorName,
    image,
    category,
    rating,
    borrowingDate,
    returningDate,
  } = book;
  const handleReturnBook = (id) => {
    fetch(`https://bookbytedc-server.vercel.app/deleteBorrowedBook?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Book return successful.");
          const remaining = borrowedBooks.filter((book) => book._id != id);
          setBorrowedBooks(remaining);
          console.log("remaining book", remaining);
        }
      });
  };
  return (
    <div className="border border-red-300 shadow-xl card bg-base-100">
      <figure className="px-10 pt-10 ">
        <img
          src={image}
          alt="Book Picture"
          className="rounded-xl h-[200px]  w-full"
        />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>Author : {authorName}</p>
        <Rating
          initialRating={rating}
          readonly
          emptySymbol={<FaRegStar />}
          fullSymbol={<FaStar />}
          className="text-orange-400"
        ></Rating>
        <p>Category : {category}</p>
        <p>Date Of Borrow : {borrowingDate}</p>
        <p>Date Of Return : {returningDate}</p>
        <div className="card-actions">
          <button
            onClick={() => handleReturnBook(_id)}
            className="btn btn-primary"
          >
            {" "}
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
