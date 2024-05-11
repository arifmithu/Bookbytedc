import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const BookCategories = () => {
  const [books, setBooks] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const categories = [];
    books.map((book) => {
      const category = book.category;
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
    setAllCategories(categories);
  }, []);
  console.log(allCategories);
  return (
    <div className="mx-5 md:mx-[50px] lg:mx-[80px] my-5 md:my-8 lg:my-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {allCategories.map((category, index) => (
          <CategoryCard key={index} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
