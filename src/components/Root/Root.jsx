import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
