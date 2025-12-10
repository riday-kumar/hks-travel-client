import React from "react";

const AllRequestBooks = () => {
  return (
    <div className="custom-pad">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">User Name</th>
              <th className="py-3 px-4 text-left font-semibold">
                Ticket Title
              </th>
              <th className="py-3 px-4 text-center font-semibold">Price</th>
              <th className="py-3 px-4 text-center font-semibold">
                Booking Quantity
              </th>

              <th className="py-3 px-4 text-center font-semibold">
                Total Price
              </th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black">
            {/* Example Row */}

            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">Dhaka to NG</td>
              <td className="py-3 px-4 text-center ">50</td>
              <td className="py-3 px-4 text-center ">2</td>
              <td className="py-3 px-4 text-center ">100</td>
              <td className="flex flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Accept</button>
                <button className="btn btn-sm btn-warning">Reject</button>
              </td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">Dhaka to NG</td>
              <td className="py-3 px-4 text-center ">50</td>
              <td className="py-3 px-4 text-center ">2</td>
              <td className="py-3 px-4 text-center ">100</td>
              <td className="flex flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Accept</button>
                <button className="btn btn-sm btn-warning">Reject</button>
              </td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">Dhaka to NG</td>
              <td className="py-3 px-4 text-center ">50</td>
              <td className="py-3 px-4 text-center ">2</td>
              <td className="py-3 px-4 text-center ">100</td>
              <td className="flex flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Accept</button>
                <button className="btn btn-sm btn-warning">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequestBooks;
