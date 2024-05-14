import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import animationBg from "../../assets/image/AnimatedShape.svg";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "../../index.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState({});
  const params = useParams();
  console.log("getting params", params.id);

  useEffect(() => {
    fetch(`https://bookbytedc-server.vercel.app/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);
  //   const book = useLoaderData();

  //   console.log(book);
  const {
    _id,
    bookName,
    authorName,
    image,
    description,
    quantity,
    category,
    rating,
    tags,
  } = book;

  const handleBorrowBook = (id) => {
    console.log("entered function");
    const borrowDate = new Date();
    const day = String(borrowDate.getDate()).padStart(2, "0");
    var month = String(borrowDate.getMonth() + 1).padStart(2, "0");
    var year = borrowDate.getFullYear();
    const borrowingDate = day + "-" + month + "-" + year;

    const returningDate = document.getElementById("returningdate").value;
    fetch(`https://bookbytedc-server.vercel.app/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        fetch(
          `https://bookbytedc-server.vercel.app/books/borrowed/allbooks?email=${user.email}`,
          { credentials: "include" }
        )
          .then((res) => res.json())
          .then((allBorrowedBooks) => {
            console.log("getting all borrowed books", allBorrowedBooks, data);
            if (allBorrowedBooks.find((book) => book._id == data._id)) {
              Swal.fire("You have already borrowed this book");
            } else {
              console.log("data collected from all books", data);
              const borrowed = {
                bookId: data._id,
                email: user.email,
                borrowingDate: borrowingDate,
                returningDate: returningDate,
              };
              fetch(
                `https://bookbytedc-server.vercel.app/books/borrowed/allbooks?id=${data._id}`,
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(borrowed),
                }
              )
                .then((res) => res.json())
                .then((resData) => {
                  Swal.fire("Borrowed successfully");
                  setBook({ ...book, quantity: book.quantity - 1 });
                });
            }
          });
      });
  };
  return (
    <div className="shadow-xl card card-side border bg-base-100 mx-5 md:mx-12 lg:mx-[80px] mt-5 md:mt-8 lg:mt-12">
      <figure className="object-contain w-1/3">
        <img src={image} alt="Book Image" className="h-full" />
      </figure>
      <div className="flex-1 card-body">
        <div className="mb-4">
          <p className="inline-block px-2 py-1 mb-2 text-gray-900 bg-green-300 rounded-lg">
            Book
          </p>
          <h2 className="card-title gradient">{bookName}</h2>
          <p>By : {authorName}</p>
        </div>
        <div className="mb-4">
          <p>Category : {category}</p>
          <p>
            Rating :
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              className="text-orange-400"
            ></Rating>
          </p>
        </div>
        <div className="mb-4">
          <p>Available : {quantity} Units</p>
          <p>Tags : {tags}</p>
        </div>
        <p>
          <span className="font-bold">Short Description : </span>
          {description}
        </p>
        {/* <div className="justify-center mt-5 card-actions">
          <button
            onClick={() => handleBorrowBook(_id)}
            className="text-xl font-bold btn btn-primary"
          >
            Borrow
          </button>
        </div> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          disabled={`${quantity == 0 ? "disabled" : ""}`}
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Borrow
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Provide following information</h3>
            <div className="p-4">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="authorName"
                  value={user.displayName}
                  readOnly
                  placeholder="Harper Lee"
                  className="block w-full px-5 py-3 mt-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  name="category"
                  placeholder="fiction"
                  className="block w-full px-5 py-3 mt-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Returning Date
                </label>
                <input
                  type="date"
                  name="returningdate"
                  placeholder="230"
                  id="returningdate"
                  className="block w-full px-5 py-3 mt-2 mb-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex gap-4 mx-auto">
              <div className="modal-action">
                <form method="dialog">
                  <button
                    onClick={() => handleBorrowBook(_id)}
                    className="btn-primary btn"
                  >
                    Borrow
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Details;
