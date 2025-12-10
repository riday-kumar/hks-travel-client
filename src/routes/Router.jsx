import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import TicketDetails from "../pages/TicketDetails/TicketDetails";
import AllTickets from "../pages/AllTickets/AllTickets";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfile from "../pages/Dashboard/Profile/UserProfile";
import BookedTickets from "../pages/Dashboard/BookedTickets/BookedTickets";
import TransactionHistory from "../pages/Dashboard/Payment/TransactionHistory";
import AddTicket from "../pages/Dashboard/AddTicket/AddTicket";
import MyAddedTicket from "../pages/Dashboard/MyAddedTicket/MyAddedTicket";
import AllRequestBooks from "../pages/Dashboard/AllRequestBookings/AllRequestBooks";
import Revenue from "../pages/Dashboard/Revenue/Revenue";
import ManageTicket from "../pages/Dashboard/ManageTicket/ManageTicket";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdvertiseTicket from "../pages/Dashboard/AdvertiseTicket/AdvertiseTicket";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/ticket-details/:id",
        Component: TicketDetails,
      },
      {
        path: "/all-tickets",
        Component: AllTickets,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: LogIn,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "profile",
        Component: UserProfile,
      },
      {
        path: "booked-tickets",
        Component: BookedTickets,
      },
      {
        path: "transaction-history",
        Component: TransactionHistory,
      },
      {
        path: "add-ticket",
        Component: AddTicket,
      },
      {
        path: "my-created-ticket",
        Component: MyAddedTicket,
      },
      {
        path: "all-request",
        Component: AllRequestBooks,
      },
      {
        path: "revenue",
        Component: Revenue,
      },
      {
        path: "manage-ticket",
        Component: ManageTicket,
      },
      {
        path: "manage-users",
        Component: ManageUsers,
      },
      {
        path: "advertise-tickets",
        Component: AdvertiseTicket,
      },
    ],
  },
]);

export default router;
