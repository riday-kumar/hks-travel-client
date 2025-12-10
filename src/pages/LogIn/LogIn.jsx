import React from "react";

import authImage from "../../assets/auth.webp";
import { toast } from "react-toastify";
import { Link } from "react-router";

const LogIn = () => {
  // sign using email, password
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    if (!emailPattern.test(email)) {
      toast.error(
        "Please enter a valid email address (example: user@example.com)."
      );
      return;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* image */}
      <div>
        <img className="h-full" src={authImage} alt="" />
      </div>
      {/* register form */}
      <div className="">
        {/* register */}
        <div className="w-11/12 rounded-lg mx-auto my-20 p-10 bg-green-300/50 backdrop-blur-lg text-black">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset *:w-full text-[18px] space-y-2">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <p className="cursor-pointer font-bold text-green-600">
                Forgot Password?
              </p>
              <button type="submit" className="btn btn-success mt-4">
                Log In
              </button>
            </fieldset>
          </form>
          <div className=" flex gap-3 justify-center items-center">
            <div className="m-0 p-0 h-px w-10  bg-base-200"></div>
            <span className="roboto font-bold text-green-600">Or</span>
            <div className="m-0 p-0 h-px w-10  bg-base-200"></div>
          </div>
          <button className="btn btn-success text-white font-bold w-full hover:text-white">
            <img
              className="h-5 w-5"
              src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
              alt=""
            />{" "}
            Sign In With Google
          </button>
          <p className="capitalize text-center mt-3 font-medium text-green-600">
            Don't have account ?{" "}
            <Link to="/register" className="font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
