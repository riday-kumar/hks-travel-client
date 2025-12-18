import React, { useMemo, useRef } from "react";
import {
  FiWifi,
  FiPower,
  FiArrowRight,
  FiPhone,
  FiHelpCircle,
  FiMapPin,
  FiClock,
  FiZap,
  FiWind,
} from "react-icons/fi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import Banner from "../Home/Banner/Banner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Countdown from "../../components/Countdown";

const TicketDetails = () => {
  const myModal = useRef(null);

  const { currentUser } = useAuth();
  const axiosSecure = useAxiosSecure();

  const paramsId = useParams();
  const ticketId = paramsId.id;

  // fetch user details using tanstack query
  const { data: ticketDetails = { busPerks: [] } } = useQuery({
    queryKey: ["ticketDetail"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ticket/${ticketId}`);
      return res.data;
    },
  });

  // console.log(ticketDetails);

  // handle ticket booking
  const handleBookTicket = async () => {};

  const departureTime = new Date(ticketDetails.busDeparture).getTime();
  const now = new Date().getTime();
  const isExpired = departureTime <= now;
  // console.log(isExpired);

  return (
    <div>
      <Banner title={ticketDetails.ticketName}></Banner>
      <div className="min-h-screen bg-gradient-to-b from-black via-green-950 to-black text-white py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Countdown + Booking Summary */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Countdown Timer */}
            <div className="lg:col-span-2 space-y-10">
              {/* timer */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-gray-800">
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
                  <FiClock className="w-5 h-5" />
                  Time until departure
                </div>
                <Countdown departure={ticketDetails.busDeparture} />
              </div>
              {/* Trip Itinerary */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-8">Trip Itinerary</h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-green-500 to-emerald-600"></div>

                  {/* Departure */}
                  <div className="flex gap-6 mb-12">
                    <div className="relative z-10 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <FiMapPin className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">
                        {ticketDetails.busFrom}
                      </h4>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex justify-center -mt-8 mb-8">
                    <div className="bg-gray-800/80 px-6 py-3 rounded-full text-sm border border-gray-700">
                      to
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="flex gap-6">
                    <div className="relative z-10 bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <FiMapPin className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">
                        {ticketDetails.busTo}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            {/* Booking Summary */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-green-700/50 shadow-xl">
              <div className="font-bold">
                <p className="text-yellow-500">
                  Total Ticket : {ticketDetails.ticketQuantity}
                </p>
                <p className="">
                  Ticket Remaining : {ticketDetails.remainingTicket}
                </p>
              </div>
              <div className="border-t border-gray-700 my-5"></div>
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Booking Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Ticket (1 Adult)</span>
                  <span>{ticketDetails.ticketPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxes & Fees</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seat Selection</span>
                  <span className="text-green-400">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-700 my-5"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Ticket Price</span>
                <span className="text-green-400">
                  {ticketDetails.ticketPrice}
                </span>
              </div>

              {isExpired ? (
                <p className="text-red-500 mt-3">Ticket Isn't Available</p>
              ) : (
                <button
                  onClick={() => myModal.current.showModal()}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg transition-all"
                >
                  Book Now
                  <FiArrowRight className="w-5 h-5" />
                </button>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                By booking, you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
              </p>

              <div className="mt-6 flex items-center gap-3 bg-gray-800/50 rounded-2xl p-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <FiHelpCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Need Help?</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <FiPhone className="w-3 h-3" /> Call 24/7 Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Itinerary */}

          {/* Onboard Amenities */}
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            {" "}
            <h3 className="text-2xl font-bold mb-8">Other Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ticketDetails?.busPerks.map((amenity, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="bg-gray-800/70 p-6 rounded-3xl mb-3 group-hover:bg-green-900/50 transition-all">
                    <div className="text-2xl text-green-400 group-hover:scale-110 transition-transform">
                      {amenity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <dialog ref={myModal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Book Now</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              // console.log("Form Submitted:", data);

              const bookingInfo = {
                userName: data.name,
                userEmail: data.email,
                bookedQuantity: Number(data.tickets),
                ticketId: ticketId,
                ticketName: ticketDetails.ticketName,
                ticketPrice: ticketDetails.ticketPrice,
                busFrom: ticketDetails.busFrom,
                busTo: ticketDetails.busTo,
                busDeparture: ticketDetails.busDeparture,
                status: "pending",
                createdAt: new Date(),
              };

              axiosSecure.post("/add-booking", bookingInfo).then((res) => {
                // console.log(res.data);
                myModal.current.close();
              });
            }}
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                defaultValue={currentUser?.displayName}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter email"
                defaultValue={currentUser?.email}
                required
              />
            </div>

            {/* Ticket Count */}
            <div>
              <label className="block mb-1 font-semibold">
                Number of Tickets
              </label>
              <input
                type="number"
                name="tickets"
                min="1"
                className="input input-bordered w-full"
                placeholder="How many tickets?"
                required
              />
            </div>

            {/* Buttons */}
            <div className="modal-action flex justify-between">
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              {/* Close Button */}
              <button
                type="button"
                className="btn btn-error"
                onClick={() => myModal.current.close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default TicketDetails;
