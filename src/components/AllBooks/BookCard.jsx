import React from "react";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { _id, bookName, authorName, image, category, rating } = book;
  return (
    <div className="border border-red-300 shadow-xl card bg-base-100">
      <figure className="px-10 pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl h-[200px]  w-full" />
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
        <div className="card-actions">
          <Link to={`/update/${_id}`} className="btn btn-primary">
            Update Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
