import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.role !== "Admin") {
    window.location.reload();
  }

  return auth.role === "Admin" ? <div>Admin</div> : <div>No Access</div>;
};

export default Admin;
