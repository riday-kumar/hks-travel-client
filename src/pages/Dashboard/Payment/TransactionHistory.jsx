import React from "react";

const TransactionHistory = () => {
  return (
    <div className="custom-pad">
      <p>this is tracsaction history</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">
                Transaction ID
              </th>
              <th className="py-3 px-4 text-left font-semibold">Amount</th>
              <th className="py-3 px-4 text-center font-semibold">
                Ticket Title
              </th>
              <th className="py-3 px-4 text-center font-semibold">
                Payment Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black">
            {/* Example Row */}

            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">TNX-A45X-3YNZ</td>
              <td className="py-3 px-4 font-medium ">550</td>
              <td className="py-3 px-4 text-center ">Dhaka to Barisal</td>
              <td className="py-3 px-4 text-center ">5th Nov 2025</td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">TNX-A45X-3YNZ</td>
              <td className="py-3 px-4 font-medium ">550</td>
              <td className="py-3 px-4 text-center ">Dhaka to Barisal</td>
              <td className="py-3 px-4 text-center ">5th Nov 2025</td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">TNX-A45X-3YNZ</td>
              <td className="py-3 px-4 font-medium ">550</td>
              <td className="py-3 px-4 text-center ">Dhaka to Barisal</td>
              <td className="py-3 px-4 text-center ">5th Nov 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
