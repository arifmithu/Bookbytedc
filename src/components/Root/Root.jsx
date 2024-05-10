import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
