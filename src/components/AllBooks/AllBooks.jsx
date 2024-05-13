import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";
import { Fade, Slide } from "react-awesome-reveal";
import { FaAddressCard } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState([]);
  const [viewStyle, setViewStyle] = useState("cardView");

  useEffect(() => {
    fetch("https://bookbytedc-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setShowBooks(data);
      });
  }, []);

  const handleShowAllBooks = () => {
    setShowBooks(books);
  };
  const handleAvailableBooks = () => {
    const available = books.filter((book) => book.quantity > 0);
    setShowBooks(available);
  };

  const handleCardView = () => {
    setViewStyle("cardView");
  };
  const handleListView = () => {
    setViewStyle("listView");
  };
  return (
    <div className="mx-5 md-mx[50px] lg:mx-[80px] rounded-lg mb-12 mt-20">
      <div>
        <Fade>
          <div className="text-3xl font-bold md:text-5xl lg:text-6xl divider divider-accent">
            Full Collections
          </div>
        </Fade>
        <Slide>
          <div className="w-2/3 mx-auto mt-6 text-center lg:mt-12 md:w-1/2 lg:w-1/2">
            From timeless classics to contemporary favorites, explore the titles
            that have captured the hearts and minds of readers worldwide.
            Whether you're seeking a thrilling adventure, thought-provoking
            insights, or heartwarming tales, our handpicked selection promises
            to delight and inspire."
          </div>
        </Slide>
      </div>
      <div className="mt-5 text-end md:mt-8 lg:mt-12">
        <div className={`flex justify-end mb-5 text-4xl `}>
          <button
            onClick={handleCardView}
            className={`px-5 py-2 border rounded-l-full ${
              viewStyle == "cardView" ? "bg-green-300" : "bg-gray-400"
            }`}
          >
            <FaAddressCard />
          </button>
          <button
            onClick={handleListView}
            className={`px-5 py-2 border rounded-r-full ${
              viewStyle == "listView" ? "bg-green-300" : "bg-gray-400"
            }`}
          >
            <MdTableRows />
          </button>
        </div>
        <div>
          <button
            onClick={handleAvailableBooks}
            className="mr-5 text-xl btn btn-accent"
          >
            Show Available Books
          </button>
          <button
            onClick={handleShowAllBooks}
            className="text-xl btn btn-primary"
          >
            Show All Books
          </button>
        </div>
      </div>
      {viewStyle == "cardView" ? (
        <div className="grid grid-cols-1 gap-5 mt-5 rounded-lg md:grid-cols-2 lg:grid-cols-3">
          {showBooks.map((book, index) => (
            <BookCard key={index} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <div className="gap-5 mt-5 rounded-lg ">
          <div className="overflow-x-auto">
            {/* table */}
            <table className="table w-full border">
              {/* head */}
              <thead>
                <tr>
                  <th>Book Info</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Update</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {showBooks.map((book, index) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src={book.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{book.bookName}</div>
                          <div className="text-sm opacity-50">
                            {book.authorName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {book.category.toUpperCase()}
                      <br />
                      {/* <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span> */}
                    </td>
                    <td>{book.rating}</td>
                    <th>
                      <Link
                        to={`/update/${book._id}`}
                        className="btn btn-primary"
                      >
                        Update Book
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
