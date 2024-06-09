import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TraderProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !auth.isAuthenticated ||
      (auth.isAuthenticated && (auth.role === "Owner" || auth.role === "Admin"))
    ) {
      navigate(-1, { replace: true });
    }
  }, [auth, navigate]);

  return children;
}
