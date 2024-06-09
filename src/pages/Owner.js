import React from "react";
import { useSelector } from "react-redux";

const Owner = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.role !== "Owner") {
    window.location.reload();
  }
  return <div>Owner</div>;
};

export default Owner;
