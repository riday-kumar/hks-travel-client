import React from "react";
import authImage from "../../assets/auth.webp";
import { toast } from "react-toastify";
import { Link } from "react-router";
const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validate
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      return toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
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
          <form onSubmit={handleRegisterForm}>
            <p className="text-center text-3xl font-bold">Register Now</p>
            <fieldset className="fieldset *:w-full text-[18px] space-y-2">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
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
              <button type="submit" className="btn btn-success text-white mt-4">
                Register
              </button>
            </fieldset>
          </form>
          {/* or */}
          <div className=" flex gap-3 justify-center items-center">
            <div className="m-0 p-0 h-px w-10  bg-base-200"></div>
            <span className="roboto text-success font-bold">Or</span>
            <div className="m-0 p-0 h-px w-10  bg-base-200"></div>
          </div>
          <button className="btn  btn-success text-white font-bold w-full hover:text-white">
            <img
              className="h-5 w-5"
              src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
              alt=""
            />{" "}
            Sign In With Google
          </button>
          {/* sign in page */}
          <p className="capitalize text-center mt-3 font-medium text-green-600">
            Already have an account ?{" "}
            <Link to="/login" className="font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
