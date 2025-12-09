import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import TicketDetails from "../pages/TicketDetails/TicketDetails";

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
    ],
  },
]);

export default router;
