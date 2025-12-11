import React from "react";
import authImage from "../../assets/auth.webp";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SocialLogIn from "../../components/SocialLogIn";
const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    console.log(data);

    const profileName = data.name;
    const profileImg = data.photo[0];
    const email = data.email;
    const password = data.password;

    registerUser(email, password).then((result) => {
      const formData = new FormData();
      formData.append("image", profileImg);

      const image_Api_Url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_img_host
      }`;

      // image will save in the imagebb server
      axios.post(image_Api_Url, formData).then((res) => {
        // create user in the database
        const userInfo = {
          email: email,
          displayName: profileName,
          photoURL: res.data.data.url,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user created in the data");
          }
        });

        // update user profile in firebase
        const userProfile = {
          displayName: profileName,
          photoURL: res.data.data.url,
        };

        updateUserProfile(userProfile)
          .then(() => {
            console.log("user profile update done");
            toast.success("User Created Successfully");
            navigate(location.state || "/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    });
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
          <form onSubmit={handleSubmit(handleRegisterForm)}>
            <p className="text-center text-3xl font-bold">Register Now</p>
            <fieldset className="fieldset *:w-full text-[18px] space-y-2">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Your Name"
                required
              />
              {/* photo */}
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo")}
                className="file-input"
                placeholder="Photo URL"
              />
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
          <SocialLogIn></SocialLogIn>
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
