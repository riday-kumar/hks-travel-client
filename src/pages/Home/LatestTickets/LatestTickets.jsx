import React from "react";
import Container from "../../../components/Container";
import banner from "../../../assets/banner-bg.jpg";
import { FiArrowRight } from "react-icons/fi";
import { MdDirectionsBus } from "react-icons/md";
import { FaBolt, FaBus, FaCrown, FaForward } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

const LatestTickets = () => {
  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6">Latest Tickets</h2>
      <div className="space-y-5">
        <div className="bg-[#0f281c] border border-green-900/40 rounded-2xl overflow-hidden w-full flex max-md:flex-col">
          {/* Left Image */}
          <div className="relative md:w-1/3 w-full">
            <img
              src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229"
              alt="Neon Nights Festival"
              className="w-full h-40 object-cover"
            />

            {/* BUS INCLUDED badge */}
            <div className="absolute top-3 left-3 bg-green-600 text-black text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
              <FaBus size={14} /> BUS INCLUDED
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-green-400 font-semibold">
                  AUG 24 • 08:00 PM
                </p>
                <h2 className="text-xl font-bold mt-1 text-white">
                  Neon Nights Festival
                </h2>
              </div>

              {/* Price */}
              <div className="text-right flex flex-col items-end">
                <p className="text-xl font-bold text-white">$150</p>
                <span className="text-xs text-red-400 mt-1">Only 2 Left</span>
              </div>
            </div>

            {/* Tags + Button */}
            <div className="flex max-md:flex-col justify-between items-center mt-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
              </div>

              {/* CTA Button */}
              <button className="max-md:mt-5  bg-green-600 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transition flex items-center gap-2">
                See details →
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#0f281c] border border-green-900/40 rounded-2xl overflow-hidden w-full flex max-md:flex-col">
          {/* Left Image */}
          <div className="relative md:w-1/3 w-full">
            <img
              src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229"
              alt="Neon Nights Festival"
              className="w-full h-40 object-cover"
            />

            {/* BUS INCLUDED badge */}
            <div className="absolute top-3 left-3 bg-green-600 text-black text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1">
              <FaBus size={14} /> BUS INCLUDED
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-green-400 font-semibold">
                  AUG 24 • 08:00 PM
                </p>
                <h2 className="text-xl font-bold mt-1 text-white">
                  Neon Nights Festival
                </h2>
              </div>

              {/* Price */}
              <div className="text-right flex flex-col items-end">
                <p className="text-xl font-bold text-white">$150</p>
                <span className="text-xs text-red-400 mt-1">Only 2 Left</span>
              </div>
            </div>

            {/* Tags + Button */}
            <div className="flex max-md:flex-col justify-between items-center mt-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#133222] border border-green-900/40 text-gray-200 text-xs rounded-lg">
                  <FaCrown size={12} />
                  VIP Lounge
                </div>
              </div>

              {/* CTA Button */}
              <button className="max-md:mt-5  bg-green-600 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transition flex items-center gap-2">
                See details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestTickets;
