import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Products from "../pages/prodcuts";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/product" element={<Products />} />
        </Route>

        <Route exact path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default index;
