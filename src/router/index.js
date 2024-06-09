import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Guest from "../pages/Guest";
import NotFound from "../pages/NotFound";
import GuestProtectedRoute from "./CustomRoutes/GuestProtectedRoute";
import Common from "../pages/Common";
import Success from "../pages/Success";
import { AdminRoutes } from "./AdminRoutes";
import { OwnerRoutes } from "./OwnerRoutes";
import { TraderRoutes } from "./TraderRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestProtectedRoute>
        <Guest />
      </GuestProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "not-found",
    element: <NotFound />,
  },
  {
    path: "common",
    element: <Common />,
  },
  {
    path: "success",
    element: <Success />,
  },
  ...AdminRoutes,
  ...OwnerRoutes,
  ...TraderRoutes,
]);
