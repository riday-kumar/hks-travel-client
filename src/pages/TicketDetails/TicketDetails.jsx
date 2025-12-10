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
import Container from "../../components/Container";
import Banner from "../Home/Banner/Banner";

const TicketDetails = () => {
  const myModal = useRef(null);
  return (
    <div>
      <Banner title="Dhaka to Barisal"></Banner>
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
                <div className="grid grid-cols-4 gap-4">
                  {["02", "04", "15", "00"].map((value, i) => (
                    <div key={i} className="text-center">
                      <div className="bg-gradient-to-b from-green-600 to-emerald-700 rounded-2xl py-6 text-4xl font-bold shadow-lg">
                        {value}
                      </div>
                      <p className="text-gray-400 text-xs mt-2">
                        {["DAYS", "HOURS", "MINUTES", "SECONDS"][i]}
                      </p>
                    </div>
                  ))}
                </div>
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
                        Port Authority Bus Terminal
                      </h4>
                      <p className="text-gray-400 text-sm">
                        625 8th Ave, New York, NY 10018
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-2xl font-bold">08:00 AM</span>
                        <span className="text-green-400 text-sm">Oct 24</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex justify-center -mt-8 mb-8">
                    <div className="bg-gray-800/80 px-6 py-3 rounded-full text-sm border border-gray-700">
                      4h 30m non-stop
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="flex gap-6">
                    <div className="relative z-10 bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <FiMapPin className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">
                        South Station Bus Terminal
                      </h4>
                      <p className="text-gray-400 text-sm">
                        700 Atlantic Ave, Boston, MA 02110
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-2xl font-bold">12:30 PM</span>
                        <span className="text-green-400 text-sm">Oct 24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            {/* Booking Summary */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-green-700/50 shadow-xl">
              <div className="font-bold">
                <p className="text-yellow-500">Total Ticket : 20</p>
                <p className="">Ticket Remaining : 5</p>
              </div>
              <div className="border-t border-gray-700 my-5"></div>
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Booking Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Ticket (1 Adult)</span>
                  <span>$45.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxes & Fees</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seat Selection</span>
                  <span className="text-green-400">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-700 my-5"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Ticket Price</span>
                <span className="text-green-400">$50.00</span>
              </div>

              <button
                onClick={() => myModal.current.showModal()}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg transition-all"
              >
                Book Now
                <FiArrowRight className="w-5 h-5" />
              </button>

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
            <h3 className="text-2xl font-bold mb-8">Onboard Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <FiWifi />, label: "Free Wi-Fi" },
                { icon: <FiPower />, label: "Power Outlets" },
                {
                  icon: <MdAirlineSeatReclineExtra />,
                  label: "Reclining Seats",
                },
                { icon: <FiWind />, label: "Air Conditioning" },
              ].map((amenity, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="bg-gray-800/70 p-6 rounded-3xl mb-3 group-hover:bg-green-900/50 transition-all">
                    <div className="text-4xl text-green-400 group-hover:scale-110 transition-transform">
                      {amenity.icon}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{amenity.label}</p>
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
              console.log("Form Submitted:", data);
              // you can process data here
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
