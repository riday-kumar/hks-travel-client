import React from "react";

const BookedTickets = () => {
  return (
    <div className="custom-pad">
      <p>My Booked Tickets</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Concert Image */}
          <div className="relative">
            <img
              src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
              alt="The Lumineers Concert"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Title + Status */}
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Concert: The Lumineers
              </h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full">
                PENDING
              </span>
            </div>

            {/* Ticket Info */}
            <div className="text-gray-700 space-y-2">
              <p className="font-medium">
                Tickets: <span className="font-bold">2</span> | Total:{" "}
                <span className="text-xl font-bold text-green-600">
                  $250.00
                </span>
              </p>

              <p className="text-lg font-semibold text-gray-800">
                New York (JFK) → Barcelona (BCN)
              </p>

              <p className="text-gray-600">
                Departs:{" "}
                <span className="font-medium text-gray-900">
                  Oct 26, 2024 at 8:00 PM
                </span>
              </p>
            </div>

            {/* Countdown */}
            <div className="border-t border-gray-200 pt-5">
              <p className="text-lg font-bold text-gray-800">
                Departs in:{" "}
                <span className="text-2xl text-orange-600">22d 4h 15m 10s</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Concert Image */}
          <div className="relative">
            <img
              src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
              alt="The Lumineers Concert"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Title + Status */}
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Concert: The Lumineers
              </h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full">
                PENDING
              </span>
            </div>

            {/* Ticket Info */}
            <div className="text-gray-700 space-y-2">
              <p className="font-medium">
                Tickets: <span className="font-bold">2</span> | Total:{" "}
                <span className="text-xl font-bold text-green-600">
                  $250.00
                </span>
              </p>

              <p className="text-lg font-semibold text-gray-800">
                New York (JFK) → Barcelona (BCN)
              </p>

              <p className="text-gray-600">
                Departs:{" "}
                <span className="font-medium text-gray-900">
                  Oct 26, 2024 at 8:00 PM
                </span>
              </p>
            </div>

            {/* Countdown */}
            <div className="border-t border-gray-200 pt-5">
              <p className="text-lg font-bold text-gray-800">
                Departs in:{" "}
                <span className="text-2xl text-orange-600">22d 4h 15m 10s</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Concert Image */}
          <div className="relative">
            <img
              src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
              alt="The Lumineers Concert"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Title + Status */}
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Concert: The Lumineers
              </h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full">
                PENDING
              </span>
            </div>

            {/* Ticket Info */}
            <div className="text-gray-700 space-y-2">
              <p className="font-medium">
                Tickets: <span className="font-bold">2</span> | Total:{" "}
                <span className="text-xl font-bold text-green-600">
                  $250.00
                </span>
              </p>

              <p className="text-lg font-semibold text-gray-800">
                New York (JFK) → Barcelona (BCN)
              </p>

              <p className="text-gray-600">
                Departs:{" "}
                <span className="font-medium text-gray-900">
                  Oct 26, 2024 at 8:00 PM
                </span>
              </p>
            </div>

            {/* Countdown */}
            <div className="border-t border-gray-200 pt-5">
              <p className="text-lg font-bold text-gray-800">
                Departs in:{" "}
                <span className="text-2xl text-orange-600">22d 4h 15m 10s</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTickets;
