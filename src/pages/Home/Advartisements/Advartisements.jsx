import React from "react";
import Container from "../../../components/Container";
import { FaBus, FaWifi, FaChair } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const Advartisements = () => {
  const axiosSecure = useAxiosSecure();

  // fetch user details using tanstack query
  const { data: advertises = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/advertisement`);
      return res.data;
    },
  });

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Explore Our Exclusive Ticket Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertises.map((advertise, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
            >
              {/* Image */}
              <img
                src={advertise.ticketImage}
                alt={advertise.ticketName}
                className="rounded-lg w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-2">
                <h3 className="font-semibold text-lg mt-2">
                  {advertise.ticketName}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-bold text-blue-600">
                    {advertise.ticketPrice}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full`}>
                    seat left {advertise.remainingTicket}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-3 text-sm space-y-1 mb-10 text-gray-600">
                  {advertise.busPerks.map((f, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaBus className="text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  to={`/ticket-details/${advertise._id}`}
                  className="mt-5 w-full bg-blue-100 text-blue-600 font-medium p-2 rounded-lg  hover:bg-blue-200"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Advartisements;
