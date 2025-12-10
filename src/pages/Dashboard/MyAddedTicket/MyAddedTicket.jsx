import React from "react";
import { FaBus } from "react-icons/fa";

const MyAddedTicket = () => {
  return (
    <div className="custom-pad">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3">
          {/* Image */}
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            className="rounded-lg w-full h-40 object-cover"
          />

          {/* Content */}
          <div className="p-2">
            <h3 className="font-semibold text-lg mt-2">Ticket Name</h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-xl font-bold text-blue-600">$120</p>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-400">
                pending
              </span>
            </div>

            {/* Features */}
            <ul className="mt-3 flex flex-wrap gap-5 text-sm space-y-1 text-gray-600">
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
            </ul>
            <hr className="border-gray-300 my-5" />
            {/* Button */}
            <div className="flex flex-wrap gap-5">
              <button className="btn btn-sm bg-blue-100 text-blue-600 font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Update
              </button>
              <button className="btn btn-sm btn-warning text-black font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3">
          {/* Image */}
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            className="rounded-lg w-full h-40 object-cover"
          />

          {/* Content */}
          <div className="p-2">
            <h3 className="font-semibold text-lg mt-2">Ticket Name</h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-xl font-bold text-blue-600">$120</p>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-400">
                pending
              </span>
            </div>

            {/* Features */}
            <ul className="mt-3 flex flex-wrap gap-5 text-sm space-y-1 text-gray-600">
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
            </ul>
            <hr className="border-gray-300 my-5" />
            {/* Button */}
            <div className="flex flex-wrap gap-5">
              <button className="btn btn-sm bg-blue-100 text-blue-600 font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Update
              </button>
              <button className="btn btn-sm btn-warning text-black font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3">
          {/* Image */}
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg"
            className="rounded-lg w-full h-40 object-cover"
          />

          {/* Content */}
          <div className="p-2">
            <h3 className="font-semibold text-lg mt-2">Ticket Name</h3>

            <div className="flex items-center justify-between mt-2">
              <p className="text-xl font-bold text-blue-600">$120</p>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-400">
                pending
              </span>
            </div>

            {/* Features */}
            <ul className="mt-3 flex flex-wrap gap-5 text-sm space-y-1 text-gray-600">
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
              <li className="flex items-center gap-2">
                <FaBus className="text-blue-500" />
                wifi
              </li>
            </ul>
            <hr className="border-gray-300 my-5" />
            {/* Button */}
            <div className="flex flex-wrap gap-5">
              <button className="btn btn-sm bg-blue-100 text-blue-600 font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Update
              </button>
              <button className="btn btn-sm btn-warning text-black font-medium py-2 rounded-lg mt-4 hover:bg-blue-200">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedTicket;
