import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Listings from "./listings";
import Profile from "./profile";
import Navbar from "./Navbar";

function DashboardRoutes() {
  return (
    <Router>
      {/* Navbar should always be visible */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default DashboardRoutes;
