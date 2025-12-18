import React from "react";
import Container from "../../../components/Container";
import banner from "../../../assets/banner-bg.jpg";
import { FiArrowRight } from "react-icons/fi";
import { MdDirectionsBus } from "react-icons/md";
import { FaBolt, FaBus, FaCrown, FaForward } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const LatestTickets = () => {
  const axiosSecure = useAxiosSecure();

  // fetch user details using tanstack query
  const { data: LatestTickets = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest-tickets`);
      return res.data;
    },
  });

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6">Latest Tickets</h2>
      <div className="space-y-5">
        {LatestTickets.map((latestTicket, index) => (
          <div
            key={index}
            className="bg-[#0f281c] border border-green-900/40 rounded-2xl overflow-hidden w-full flex max-md:flex-col"
          >
            {/* Left Image */}
            <div className="relative md:w-1/3 w-full">
              <img
                src={latestTicket.ticketImage}
                alt="Neon Nights Festival"
                className="w-full h-40 object-cover"
              />

              {/* transport type badge */}
              <div className="absolute top-3 left-3 bg-green-600 text-black text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
                <FaBus size={14} /> {latestTicket.transportType}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-green-400 font-semibold">
                    {latestTicket.createdAt}
                  </p>
                  <h2 className="text-xl font-bold mt-1 text-white">
                    {latestTicket.ticketName}
                  </h2>
                </div>

                {/* Price */}
                <div className="text-right flex flex-col items-end">
                  <p className="text-xl font-bold text-white">
                    {latestTicket.ticketPrice}
                  </p>
                  <span className="text-xs text-red-400 mt-1">
                    {latestTicket.remainingTicket} tickets left
                  </span>
                </div>
              </div>

              {/* Tags + Button */}
              <div className="flex max-md:flex-col justify-between items-center mt-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {latestTicket.busPerks.map((perk, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg"
                    >
                      <FaCrown size={12} />
                      {perk}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/ticket-details/${latestTicket._id}`}
                  className="max-md:mt-5  bg-green-600 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transition flex items-center gap-2"
                >
                  See details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LatestTickets;
