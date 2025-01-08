import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, redirect, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";
import { Fade, Slide } from "react-awesome-reveal";
import { FaAddressCard } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import SearchBook from "./SearchBook";
import Swal from "sweetalert2";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState([]);
  const [viewStyle, setViewStyle] = useState("cardView");
  const [upateBook, setUpateBook] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://bookbytedc-server.vercel.app/books", {
      credentials: "include",
    })
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
  const handleUpdateBook = async (bookId) => {
    try {
      await fetch(`https://bookbytedc-server.vercel.app/${bookId}`)
        .then((res) => res.json())
        .then((data) => {
          setUpateBook(data);
        });
    } catch (error) {
      Swal.fire({
        title: "Request Failed!",
        text: "Something went wrong.",
        icon: "error",
      });
      setUpateBook({ email: "" });
    }
    if (
      user.email != "mithunospace@gmail.com" &&
      user.email != "mdarifhossainmithu@gmail.com" &&
      user.email != upateBook.email
    ) {
      Swal.fire({
        title: "Unauthorized!",
        text: "You can update your books only",
        icon: "warning",
      });
    } else redirect(`/update/${bookId}`);
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
        <div className={`flex lg:justify-end  mb-5 text-4xl `}>
          <SearchBook setShowBooks={setShowBooks}></SearchBook>
        </div>
        <div className="flex items-center justify-between">
          {/* dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              disabled={showBooks.length == 0}
              className="m-1 text-xl btn btn-accent"
            >
              View Style
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mb-4">
                <button
                  onClick={handleCardView}
                  className={`px-5 py-2 border ${
                    viewStyle == "cardView" ? "bg-green-300" : "bg-gray-400"
                  }`}
                >
                  <FaAddressCard className="text-5xl" />
                  <span className="text-xl">Card View</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleListView}
                  className={`px-5 py-2 border ${
                    viewStyle == "listView" ? "bg-green-300" : "bg-gray-400"
                  }`}
                >
                  <MdTableRows className="text-5xl" />
                  <span className="text-xl">Table View</span>
                </button>
              </li>
            </ul>
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
      </div>
      {showBooks.length == 0 && (
        <p className="p-10 mt-10 text-center text-7xl">No Book Available</p>
      )}
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
                      <button
                        onClick={() => handleUpdateBook(book._id)}
                        className="btn btn-primary"
                      >
                        Update Book
                      </button>
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
