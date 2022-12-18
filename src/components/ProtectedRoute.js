import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!props.user) return <Navigate to="/sign-in"></Navigate>;
  return props.children;
};

export default ProtectedRoute;
