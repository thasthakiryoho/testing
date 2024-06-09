import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.status) {
      navigate(-1);
    }
  }, [navigate, auth]);

  return <div>Success</div>;
};

export default Success;
