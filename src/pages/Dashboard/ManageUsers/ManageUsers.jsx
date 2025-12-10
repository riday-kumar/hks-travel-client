import React from "react";

const ManageUsers = () => {
  return (
    <div className="custom-pad">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-400 text-white ">
            <tr className=" *:text-center">
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold">Email</th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-green-50 text-black text-center">
            {/* Example Row */}

            <tr className="hover:bg-white transition-all *:text-center">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">abc@gmail.com</td>
              <td className="flex justify-center flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Admin</button>
                <button className="btn btn-sm btn-warning">Vendor</button>
              </td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">abc@gmail.com</td>
              <td className="flex justify-center flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Admin</button>
                <button className="btn btn-sm btn-warning">Vendor</button>
              </td>
            </tr>
            <tr className="hover:bg-white transition-all">
              <td className="py-3 px-4">MSD Mahi</td>
              <td className="py-3 px-4 font-medium ">abc@gmail.com</td>
              <td className="flex justify-center flex-wrap gap-2 py-3 px-4 text-center">
                <button className="btn btn-sm btn-success">Admin</button>
                <button className="btn btn-sm btn-warning">Vendor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
