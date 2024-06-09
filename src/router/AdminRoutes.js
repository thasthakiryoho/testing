import Admin from "../pages/Admin";
import AdminProtectedRoute from "./CustomRoutes/AdminProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";
export const AdminRoutes = [
  {
    path: "admin",
    element: (
      <AdminProtectedRoute>
        <Admin />
      </AdminProtectedRoute>
    ),
    errorElement: <NotFound />,
    
  },
  {
    path: "dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
  },
];
