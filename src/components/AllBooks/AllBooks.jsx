import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // const queryFuntion = async () => {
  //   return await axios
  //     .get("http://localhost:5000/books")
  //     .then((res) => res.data);
  // };
  // const { data, isError, error, isLoading, status } = useQuery(
  //   ["allBooks"],
  //   queryFuntion
  // );
  // console.log(data);
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-[50px] lg:mx-[80px] shadow-lg rounded-lg mt-5 md:mt-8 lg:mt-12">
      {books.map((book, index) => (
        <BookCard key={index} book={book}></BookCard>
      ))}
    </div>
  );
};

export default AllBooks;
