import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../layout/Index";

const ProtectedRoute = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1].split("-").join("");
  const isSuperAdmin = localStorage.getItem("isSuperAdmin");
  const token = localStorage.getItem("token");

  console.log("isSuperAdmin:", isSuperAdmin);
  console.log("token:", token);

  if (path === "/") {
    localStorage.removeItem("token");
    console.log("Removed token");
  }

  if (isSuperAdmin && token) {
    if (path === "404") {
      return <Outlet />;
    } else {
      return (
        <Layout>
          <Outlet />
        </Layout>
      );
    }
  } else {
    console.log("Redirecting to login");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
