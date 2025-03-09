import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Listings from "./pages/listings";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import ListingProfile from "./pages/ListingProfile";
import Leads from "./pages/leads";
function Home() {
  return (
    <Router>
      {/* Navbar should always be visible */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/listings">
          <Route index element={<Listings />} />
          <Route path="1" element={<ListingProfile />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </Router>
  );
}

export default Home;
