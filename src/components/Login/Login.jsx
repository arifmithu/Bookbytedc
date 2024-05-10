import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire(`Login successful`);
      })
      .catch((error) => {
        // setError(error)
        Swal.fire(`${error.message}`);
        console.log(error);
      });
  };
  return (
    <div className=" min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-5 md:mx-12 lg:mx-[80px] my-5 md:my-6 lg:my-8 rounded-lg">
      <div className="hero-content flex-col lg:flex lg:flex-row gap-10">
        <div className="text-center lg:text-left w-full lg:w-1/2 ">
          <img
            src="https://i.ibb.co/WFg2S2z/desk-3491990-1920.png"
            alt=""
            className="p-10"
          />
        </div>
        <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="mx-auto mb-5 font-bold">
            New here ?{" "}
            <span className="text-blue-500 font-bold">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
