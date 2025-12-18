import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBookmark } from "react-icons/fa6";

const MyAddedTicket = () => {
  const { currentUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(currentUser);

  // fetch user details using tanstack query
  const { data: vendorTickets = [] } = useQuery({
    queryKey: ["vendorTickets", currentUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets?email=${currentUser.email}`);
      return res.data;
    },
  });

  console.log(vendorTickets);
  return (
    <div className="custom-pad">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendorTickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
          >
            {/* Image */}
            <div className="h-60">
              <img
                src={ticket.ticketImage}
                alt={ticket.ticketName}
                className="rounded-lg w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="p-2">
              <h3 className="font-semibold text-blue-600 text-lg mt-2">
                {ticket.ticketName}
              </h3>

              <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-blue-600">
                  {ticket.ticketPrice} ৳
                </p>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-400">
                  {ticket.status}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                {ticket.busPerks?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaBookmark className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-300 my-5" />

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-sm bg-blue-100 text-blue-600 font-medium rounded-lg hover:bg-blue-200">
                  Update
                </button>
                <button className="btn btn-sm btn-warning text-black font-medium rounded-lg hover:bg-yellow-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedTicket;
