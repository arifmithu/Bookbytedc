import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import "../../../index.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    const setLocalTheme = document.querySelector("html");
    setLocalTheme.setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const themeValue = e.target.checked;
    if (themeValue) setTheme("synthwave");
    else setTheme("light");
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire("Log out successful");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allBooks"}>All Books</NavLink>
      </li>
      <li>
        <NavLink to={"/addBook"}>Add Book</NavLink>
      </li>
      <li>
        <NavLink to={"/borrowedBooks"}>Borrowed Books</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 pb-5 shadow-sm px-5 lg:px-[80px] shadow-red-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center text-3xl gap-2">
          <GiBookAura className="text-blue-500" />
          <a className="font-bold gradient">BookByte DC</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* right section */}
      <div className="navbar-end flex gap-3">
        {user ? (
          <div className="flex flex-col relative">
            <div className="avatar online" title={user?.displayName}>
              <div className="w-14 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className="absolute top-14 text-nowrap">{user?.displayName}</p>
          </div>
        ) : (
          <div className="btn hover:text-white btn-accent hover:text-xl">
            <NavLink to={"/login"}>Log In</NavLink>
          </div>
        )}
        {user ? (
          <button onClick={handleLogout} className="btn">
            Log out
          </button>
        ) : (
          <div className="btn btn-success hover:text-white hover:text-xl">
            <NavLink to={"/register"}>Register</NavLink>
          </div>
        )}
        {/* theme controller */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            onChange={handleThemeChange}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
