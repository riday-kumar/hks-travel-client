import React from "react";

import authImage from "../../assets/auth.webp";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../../components/SocialLogIn";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { signInUser, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  // sign using email, password
  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((res) => {
        toast.success("LogIn SuccessFul");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
          <form onSubmit={handleSubmit(handleSignIn)}>
            <p className="text-center text-3xl font-bold">Sign in</p>
            <fieldset className="fieldset *:w-full text-[18px] space-y-2">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Email Should Be Given
                </p>
              )}
              {errors.email?.type === "pattern" && <p>Enter a valid email</p>}

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is Required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="error" className="text-red-500">
                  Password must be at least 6 characters long and include both
                  uppercase and lowercase letters.
                </p>
              )}
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
          <SocialLogIn></SocialLogIn>
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
