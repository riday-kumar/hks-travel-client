import React from "react";

const Revenue = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 custom-pad">
      <div className="min-h-40 rounded-lg flex flex-col justify-center items-center bg-amber-300">
        <p className="text-2xl font-bold text-white">Total Revenue</p>
        <p className="text-3xl font-bold text-white">1500</p>
      </div>
      <div className="min-h-40 rounded-lg flex flex-col justify-center items-center bg-green-300">
        <p className="text-2xl font-bold text-white">Total Ticket Sold</p>
        <p className="text-3xl font-bold text-white">25</p>
      </div>
      <div className="min-h-40 rounded-lg flex flex-col justify-center items-center bg-blue-300">
        <p className="text-2xl font-bold text-white">Total Tickets Added</p>
        <p className="text-3xl font-bold text-white">15</p>
      </div>
    </div>
  );
};

export default Revenue;
