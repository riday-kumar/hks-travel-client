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
    ],
  },
]);

export default router;
