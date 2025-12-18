import React from "react";
import Banner from "../Home/Banner/Banner";
import { FaBus, FaCrown, FaPlug, FaSnowflake, FaWifi } from "react-icons/fa";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const AllTickets = () => {
  const { currentUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  // fetch user details using tanstack query
  const { data: tickets = [] } = useQuery({
    queryKey: ["allTickets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approved-tickets");
      return res.data;
    },
  });

  // console.log(tickets);

  return (
    <div>
      <Banner title="All Tickets"></Banner>
      <Container>
        <div className="space-y-5 my-20">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-[#0f281c] border border-green-900/40 rounded-2xl overflow-hidden w-full flex max-md:flex-col"
            >
              {/* Left Image */}
              <div className="relative md:w-1/3 w-full">
                <div className="h-50">
                  <img
                    src={ticket.ticketImage}
                    alt="Ticket Image"
                    className="w-full h-full"
                  />
                </div>

                {/* TRANSPORT TYPE badge */}
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
                  <FaBus size={14} /> {ticket.transportType}
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div>
                    {/* Departure Date */}
                    <p className="text-xs text-green-400 font-semibold">
                      {ticket.busDeparture}
                    </p>

                    {/* Ticket Title */}
                    <h2 className="text-xl font-bold mt-1 text-white">
                      {ticket.ticketName}
                    </h2>

                    {/* FROM → TO */}
                    <p className="text-sm text-gray-300 mt-1">
                      {ticket.busFrom} ➝ {ticket.busTo}
                    </p>

                    {/* Ticket Quantity */}
                    <p className="text-xs text-gray-400 mt-1">
                      Tickets Quantity:{" "}
                      <span className="font-semibold text-green-300">
                        {ticket.ticketQuantity}
                      </span>
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right flex flex-col items-end">
                    <p className="text-xl font-bold text-white">
                      ৳ {ticket.ticketPrice}
                    </p>
                    <p className="text-xs text-gray-300">(Per Ticket)</p>
                    <span className="text-xs text-red-400 mt-1">
                      only {ticket.remainingTicket} Left
                    </span>
                  </div>
                </div>

                {/* Tags + Button */}
                <div className="flex max-md:flex-col justify-between items-center mt-6">
                  {/* Perks */}
                  <div className="flex flex-wrap gap-2">
                    {ticket.busPerks.map((perks, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg"
                      >
                        <FaCrown size={12} />
                        {perks}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/ticket-details/${ticket._id}`}
                    className="max-md:mt-5 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transition flex items-center gap-2"
                  >
                    See Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllTickets;
