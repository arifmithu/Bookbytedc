import React from "react";

const SearchBook = ({ setShowBooks }) => {
  const handleSearchBook = (e) => {
    e.preventDefault();
    const searchKey = e.target.searchText.value;
    console.log(searchKey, "search text");
    fetch(`https://bookbytedc-server.vercel.app/books/${searchKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 404) {
          setShowBooks([]);
        } else setShowBooks([data]);
      });
  };
  return (
    <div className="w-full lg:w-[38.5%]">
      <form onSubmit={handleSearchBook} className="flex gap-4">
        <label className="flex items-center w-full gap-2 input input-bordered">
          <input
            name="searchText"
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default SearchBook;
