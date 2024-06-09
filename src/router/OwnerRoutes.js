import Owner from "../pages/Owner";
import OwnerProtectedRoute from "./CustomRoutes/OwnerProtectedRoute";

export const OwnerRoutes = [
    {
        path: "owner",
        element: (
          <OwnerProtectedRoute>
            <Owner />,
          </OwnerProtectedRoute>
        ),
      },
];
