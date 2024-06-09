import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OwnerProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log("Auth", auth);

  useEffect(() => {
    if (
      !auth.isAuthenticated ||
      (auth.isAuthenticated &&
        (auth.role === "Admin" || auth.role === "Trader"))
    ) {
      navigate(-1, { replace: true });
    }
  }, [auth, navigate]);

  return children;
}
