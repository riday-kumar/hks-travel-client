import React from "react";
import {
  FaHome,
  FaMoneyCheckAlt,
  FaRegUserCircle,
  FaShoppingCart,
  FaTicketAlt,
} from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { MdManageAccounts, MdNoteAdd } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { SiManageiq } from "react-icons/si";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-black text-white">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full border-b-2 border-gray-100">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">Navbar Title</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-green-500 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* Home item */}
            <li>
              <NavLink
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <FaHome />

                <span className="is-drawer-close:hidden">Homepage</span>
              </NavLink>
            </li>
            {/* User profile item */}
            <li>
              <NavLink
                to="/dashboard/profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                {/* User profile icon */}
                <FaRegUserCircle />
                <span className="is-drawer-close:hidden">Profile</span>
              </NavLink>
            </li>
            {/* Transaction History item */}
            <li>
              <NavLink
                to="/dashboard/transaction-history"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Transaction History"
              >
                {/* User profile icon */}
                <GrTransaction />
                <span className="is-drawer-close:hidden">
                  Transaction History
                </span>
              </NavLink>
            </li>
            {/* Booked Ticket */}
            <li>
              <NavLink
                to="/dashboard/booked-tickets"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Booked Ticket"
              >
                {/* User profile icon */}
                <FaShoppingCart />
                <span className="is-drawer-close:hidden">Booked Ticket</span>
              </NavLink>
            </li>
            {/* Add Ticket */}
            <li>
              <NavLink
                to="/dashboard/add-ticket"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Ticket"
              >
                {/* add ticket icon */}
                <MdNoteAdd />
                <span className="is-drawer-close:hidden">Add Ticket</span>
              </NavLink>
            </li>
            {/* My Added Tickets */}
            <li>
              <NavLink
                to="/dashboard/my-created-ticket"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Added Ticket"
              >
                {/* tickets icon */}
                <FaTicketAlt />
                <span className="is-drawer-close:hidden">My Added Ticket</span>
              </NavLink>
            </li>
            {/* Requested Bookings */}
            <li>
              <NavLink
                to="/dashboard/all-request"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Requested Bookings"
              >
                {/* tickets icon */}
                <FaCodePullRequest />
                <span className="is-drawer-close:hidden">
                  All Requested Bookings
                </span>
              </NavLink>
            </li>
            {/* Revenue Overview  */}
            <li>
              <NavLink
                to="/dashboard/revenue"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Revenue Overview"
              >
                {/* tickets icon */}
                <FaMoneyCheckAlt />
                <span className="is-drawer-close:hidden">Revenue Overview</span>
              </NavLink>
            </li>
            {/* manage users */}
            <li>
              <NavLink
                to="/dashboard/manage-users"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Users"
              >
                {/* tickets icon */}
                <MdManageAccounts />
                <span className="is-drawer-close:hidden">Manage Users</span>
              </NavLink>
            </li>
            {/* manage tickets */}
            <li>
              <NavLink
                to="/dashboard/manage-ticket"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Manage Tickets"
              >
                {/* tickets icon */}
                <SiManageiq />
                <span className="is-drawer-close:hidden">Manage Tickets</span>
              </NavLink>
            </li>
            {/* Advertise Tickets */}
            <li>
              <NavLink
                to="/dashboard/advertise-tickets"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Advertise Tickets"
              >
                {/* tickets icon */}
                <RiAdvertisementFill />
                <span className="is-drawer-close:hidden">
                  Advertise Tickets
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
