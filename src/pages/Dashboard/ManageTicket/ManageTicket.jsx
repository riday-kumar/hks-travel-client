import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ManageTicket = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // fetch user details using tanstack query
  const { data: allTheTickets = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-tickets`);
      return res.data;
    },
  });

  // console.log(allTheTickets);

  const ticketAccept = async (id) => {
    try {
      const res = await axiosSecure.patch(`/ticket-accept/${id}`);
      queryClient.invalidateQueries(["allTheTickets"]);
      // console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("Ticket Accepted");
      }
    } catch (error) {
      // console.error(error);
    }
  };
  const ticketReject = async (id) => {
    try {
      const res = await axiosSecure.patch(`/ticket-reject/${id}`);
      queryClient.invalidateQueries(["allTheTickets"]);
      // console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("Booking Rejected");
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
              <th className="py-3 px-4 text-left font-semibold">Ticket Name</th>
              <th className="py-3 px-4 text-left font-semibold">Price</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black text-center">
            {/* Example Row */}

            {allTheTickets.map((ticket, index) => (
              <tr
                key={index}
                className="hover:bg-white transition-all *:text-center"
              >
                <td className="py-3 px-4">{ticket.ticketName}</td>
                <td className="py-3 px-4 font-medium ">{ticket.ticketPrice}</td>
                <td className="py-3 px-4 text-center ">
                  {ticket.status === "Accept" ? (
                    <p className="text-green-600">Accepted</p>
                  ) : ticket.status === "Reject" ? (
                    <p className="text-red-600">Rejected</p>
                  ) : (
                    <p>Pending</p>
                  )}
                </td>
                <td className="flex justify-center flex-wrap gap-2 py-3 px-4 text-center">
                  <button
                    onClick={() => ticketAccept(ticket._id)}
                    className="btn btn-sm btn-success"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => ticketReject(ticket._id)}
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

export default ManageTicket;
