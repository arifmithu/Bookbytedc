import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import "../../../index.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log("user in nav", user);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") ?? "light";
    if (localTheme == "synthwave") {
      setIsChecked(`${localTheme == "light" ? false : true}`);
    }
    const setLocalTheme = document.querySelector("html");
    setLocalTheme.setAttribute("data-theme", localTheme);
  }, []);

  const handleThemeChange = (e) => {
    const themeValue = e.target.checked;
    console.log(themeValue);
    if (themeValue) {
      setIsChecked(!isChecked);
      localStorage.setItem("theme", "synthwave");
      const localTheme = localStorage.getItem("theme") ?? "light";
      const getHtml = document.querySelector("html");
      getHtml.setAttribute("data-theme", localTheme);
      setTheme("synthwave");
    } else {
      setIsChecked(!isChecked);
      localStorage.setItem("theme", "light");
      const localTheme = localStorage.getItem("theme") ?? "light";
      const getHtml = document.querySelector("html");
      getHtml.setAttribute("data-theme", localTheme);
      setTheme("light");
    }
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
    <div
      className={`navbar bg-base-100 pb-5 shadow-sm px-5 lg:px-[80px] shadow-red-400 ${
        localStorage.getItem("theme") == "synthwave"
          ? "text-white"
          : "text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
        <div className="flex items-center gap-2 text-3xl">
          <GiBookAura className="text-blue-500" />
          <a className="font-bold gradient">BookByte DC</a>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{links}</ul>
      </div>

      {/* right section */}
      <div className="flex gap-3 navbar-end">
        {user ? (
          <div className="relative flex flex-col">
            <div className="avatar online" title={user?.displayName}>
              <div className="rounded-full w-14">
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
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            checked={isChecked}
            onChange={handleThemeChange}
            className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
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
