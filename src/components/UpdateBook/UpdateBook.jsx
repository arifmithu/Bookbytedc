import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBookMedical } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  console.log(book);
  const {
    _id,
    bookName,
    authorName,
    image,
    category,
    rating,
    quantity,
    description,
    tags,
  } = book;

  const handleUpdate = (e) => {
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
    const updatedBook = {
      bookName,
      authorName,
      category,
      quantity,
      image,
      description,
      rating,
      tags,
    };
    console.log("geting updated book", updatedBook);
    fetch(
      `https://bookbytedc-server.vercel.app
/books?id=${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You updated this book",
            icon: "success",
          });
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
                Update this book !
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Please provide informations those you want to update. After
                updating a book you will see it in the book card.
              </p>

              <div className="mt-6">
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                    <FaBookMedical className="" />

                    <span className="mx-2">Update Book</span>
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleUpdate}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Book Name
                  </label>
                  <input
                    type="text"
                    name="bookName"
                    defaultValue={bookName}
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
                    defaultValue={authorName}
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
                    defaultValue={category}
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
                    defaultValue={quantity}
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
                    defaultValue={image}
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
                    defaultValue={description}
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
                    defaultValue={rating}
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
                    defaultValue={tags}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <input
                  type="submit"
                  value={"Update Now"}
                  className="flex items-center justify-center w-full px-6 py-3 mx-auto text-white bg-blue-500 rounded-lg cursor-pointer md:w-auto md:mx-2 focus:outline-none"
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

export default UpdateBook;
