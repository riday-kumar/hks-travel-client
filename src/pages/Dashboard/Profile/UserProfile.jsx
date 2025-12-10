import React from "react";

const UserProfile = () => {
  return (
    <div className="backdrop-blur-lg bg-black text-white flex justify-center items-center min-h-screen">
      <div className="space-y-5 text-center">
        <img
          className="border-4 rounded-full border-green-500 mx-auto"
          src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
          alt=""
        />

        <h3 className="text text-3xl font-bold">Riday Kumar Saha</h3>
        <p>hridoy@gmail.com</p>
        <div className="badge badge-info">Admin</div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <button className="btn btn-success btn-lg">Edit Profile</button>
          <button className="btn btn-success btn-lg">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
