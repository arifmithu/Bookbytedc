import React from "react";

const Login = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-5 md:mx-12 lg:mx-[80px] my-5 md:my-6 lg:my-8 rounded-lg">
      <div className="hero-content flex gap-10">
        <div className="text-center lg:text-left w-1/2 ">
          <img
            src="https://i.ibb.co/WFg2S2z/desk-3491990-1920.png"
            alt=""
            className="p-10"
          />
        </div>
        <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
