import React from "react";
import { FaBookMedical } from "react-icons/fa";
import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const category = form.category.value.toLowerCase();
    const quantity = Number(form.quantity.value);
    const image = form.image.value;
    const description = form.description.value;
    const rating = Number(form.rating.value);
    const tags = form.tags.value;
    if (quantity < 0) {
      Swal.fire("Quantity can't be negative");
      return;
    }
    const newBook = {
      bookName,
      authorName,
      category,
      quantity,
      image,
      description,
      rating,
      tags,
    };
    fetch("https://bookbytedc-server.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You added a new book",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="mx-5 md:mx-[50px] lg:mx-[80px] my-5 md:my-8 lg:my-12 border rounded-lg overflow-hidden">
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          {/* image  */}
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/KbwT3vX/books-2546038-1920.jpg')",
            }}
          ></div>
          {/* form section */}
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-5xl font-bold tracking-wider text-gray-800 capitalize dark:text-white">
                Add a book Now !
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Please provide all the informations to add a book. After adding
                a book you will see it in the all book section.
              </p>

              <div className="mt-6">
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                    <FaBookMedical className="" />

                    <span className="mx-2">New Book</span>
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleAddBook}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Book Name
                  </label>
                  <input
                    type="text"
                    name="bookName"
                    required
                    placeholder="To Kill a Mockingbird"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Author name
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    required
                    placeholder="Harper Lee"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="fiction"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="230"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Image
                  </label>
                  <input
                    type="text"
                    name="image"
                    required
                    placeholder="https://i.ibb.co/KbwT3vX/books-2546038-1920.jpg"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    required
                    placeholder="To Kill a Mockingbird by Harper Lee. Published in 1960,"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="4.9"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    required
                    placeholder="Fiction Drama"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <input
                  type="submit"
                  value={"Add Book"}
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />

                {/* </input> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBook;
