import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // fetch user details using tanstack query
  const { data: allUsers = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const makeAdmin = async (id) => {
    try {
      const res = await axiosSecure.patch(`/make-admin/${id}`);
      queryClient.invalidateQueries(["allUsers"]);
      // console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("New Admin Added");
      }
    } catch (error) {
      // console.error(error);
    }
  };

  const makeVendor = async (id) => {
    try {
      const res = await axiosSecure.patch(`/make-vendor/${id}`);
      queryClient.invalidateQueries(["allUsers"]);
      // console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("New Vendor Added");
      }
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className="custom-pad">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-400 text-white ">
            <tr className=" *:text-center">
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
              <th className="py-3 px-4 text-left font-semibold">Role</th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black text-center">
            {/* Example Row */}

            {allUsers.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-white transition-all *:text-center"
              >
                <td className="py-3 px-4">{user.displayName}</td>
                <td className="py-3 px-4 font-medium ">{user.email}</td>
                <td className="py-3 px-4 font-medium ">{user.role}</td>
                <td className="flex justify-center flex-wrap gap-2 py-3 px-4 text-center">
                  <button
                    onClick={() => makeAdmin(user._id)}
                    className="btn btn-sm btn-success"
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => makeVendor(user._id)}
                    className="btn btn-sm btn-warning"
                  >
                    Vendor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
