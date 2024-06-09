import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function GuestProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated && auth.role === "Admin") {
      navigate("/admin", { replace: true });
    } else if (auth.isAuthenticated && auth.role === "Owner") {
      navigate("/owner", { replace: true });
    } else if (auth.isAuthenticated && auth.role === "Trader") {
      navigate("/trader", { replace: true });
    }
  }, [auth, navigate]);

  return children;
}
