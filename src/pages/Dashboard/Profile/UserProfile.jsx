import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  // console.log(currentUser);

  // fetch user details using tanstack query
  const { data: user = {} } = useQuery({
    queryKey: ["singleUser", currentUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${currentUser.email}`);
      return res.data;
    },
  });

  // console.log(user);

  return (
    <div className="backdrop-blur-lg bg-black text-white flex justify-center items-center min-h-screen">
      <div className="space-y-5 text-center">
        <img
          className="border-4 rounded-full border-green-500 mx-auto h-30 w-30"
          src={user.photoURL}
          alt=""
        />

        <h3 className="text text-3xl font-bold">{user.displayName}</h3>
        <p>{user.email}</p>
        <div className="badge badge-info">{user.role}</div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <button className="btn btn-success btn-lg">Edit Profile</button>
          <button className="btn btn-success btn-lg">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
