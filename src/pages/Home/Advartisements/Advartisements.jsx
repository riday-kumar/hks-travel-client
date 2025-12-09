import React from "react";
import Container from "../../../components/Container";
import { FaBus, FaWifi, FaChair } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const trips = [
  {
    id: 1,
    title: "Weekend Getaway to the Mountains",
    price: "$49.99",
    seats: "15 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/mountain.jpg",
    features: ["Luxury Coach", "Free Wi-Fi", "Reclining Seats"],
  },
  {
    id: 2,
    title: "City Express: Capital to Coast",
    price: "$35.50",
    seats: "20 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/city.jpg",
    features: ["Express Bus", "On-board Entertainment", "Power Outlets"],
  },
  {
    id: 3,
    title: "Coastal Route Adventure",
    price: "$55.00",
    seats: "12 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/coast.jpg",
    features: ["Sleeper Bus", "Extra Legroom", "Complimentary Snacks"],
  },
  {
    id: 4,
    title: "Historic Downtown Tour",
    price: "$29.99",
    seats: "30 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/downtown.jpg",
    features: ["City Bus", "Air Conditioning", "USB Ports"],
  },
  {
    id: 5,
    title: "Riverside Journey Special",
    price: "$42.75",
    seats: "18 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/river.jpg",
    features: ["Luxury Coach", "Free Wi-Fi", "Panoramic Windows"],
  },
  {
    id: 6,
    title: "National Park Express",
    price: "$65.00",
    seats: "10 Seats Left",
    seatsColor: "bg-orange-200 text-orange-600",
    image: "/img/national.jpg",
    features: ["Sleeper Bus", "Reclining Seats", "On-board Restroom"],
  },
];

const Advartisements = () => {
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Explore Our Exclusive Ticket Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
            >
              {/* Image */}
              <img
                src={trip.image}
                alt={trip.title}
                className="rounded-lg w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-2">
                <h3 className="font-semibold text-lg mt-2">{trip.title}</h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-bold text-blue-600">
                    {trip.price}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${trip.seatsColor}`}
                  >
                    {trip.seats}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-3 text-sm space-y-1 text-gray-600">
                  {trip.features.map((f, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaBus className="text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full bg-blue-100 text-blue-600 font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Advartisements;
