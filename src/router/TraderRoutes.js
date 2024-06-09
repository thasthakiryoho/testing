import Trader from "../pages/Trader";
import TraderProtectedRoute from "./CustomRoutes/TraderProtectedRoute";
export const TraderRoutes = [
  {
    path: "trader",
    element: (
      <TraderProtectedRoute>
        <Trader />
      </TraderProtectedRoute>
    ),
  },
];
