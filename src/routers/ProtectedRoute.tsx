import React from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed }: { isAllowed: boolean }) => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
