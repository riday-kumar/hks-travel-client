import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AllRequestBooks = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // fetch user details using tanstack query
  const { data: allBookings = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-bookings`);
      return res.data;
    },
  });

  console.log(allBookings);

  const ticketAccept = async (id) => {
    try {
      const res = await axiosSecure.patch(`/booking-accept/${id}`);
      console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("Booking Accepted");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const ticketReject = async (id) => {
    try {
      const res = await axiosSecure.patch(`/booking-reject/${id}`);
      queryClient.invalidateQueries(["allBookings"]);
      console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("Booking Rejected");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="custom-pad">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">User Name</th>
              <th className="py-3 px-4 text-left font-semibold">
                Ticket Title
              </th>
              <th className="py-3 px-4 text-center font-semibold">Price</th>
              <th className="py-3 px-4 text-center font-semibold">
                Booking Quantity
              </th>

              <th className="py-3 px-4 text-center font-semibold">
                Total Price
              </th>
              <th className="py-3 px-4 text-center font-semibold">Status</th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black">
            {/* Example Row */}

            {allBookings.map((booking, index) => (
              <tr key={index} className="hover:bg-white transition-all">
                <td className="py-3 px-4">{booking.userName}</td>
                <td className="py-3 px-4 font-medium ">{booking.ticketName}</td>
                <td className="py-3 px-4 text-center ">
                  {booking.ticketPrice}
                </td>
                <td className="py-3 px-4 text-center ">
                  {booking.bookedQuantity}
                </td>
                <td className="py-3 px-4 text-center ">
                  {booking.ticketPrice * booking.bookedQuantity}
                </td>
                <td className="py-3 px-4 text-center ">
                  {booking.status === "success" ? (
                    <p className="text-green-600">Success</p>
                  ) : booking.status === "reject" ? (
                    <p className="text-red-600">Rejected</p>
                  ) : (
                    <p>Pending</p>
                  )}
                </td>
                <td className="flex flex-wrap gap-2 py-3 px-4 text-center">
                  <button
                    onClick={() => ticketAccept(booking._id)}
                    className="btn btn-sm btn-success"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => ticketReject(booking._id)}
                    className="btn btn-sm btn-warning"
                  >
                    Reject
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

export default AllRequestBooks;
