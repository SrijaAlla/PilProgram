import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Listings from "./pages/listings";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import Leads from "./pages/leads";
import ListingProfile from "./pages/ListingProfile";
import CommunityForum from "./pages/CommunityForum";
import CommunityPosts from "./pages/CommunityPosts";
import WritePost from "./pages/WritePost";
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
        <Route path="/forum" element={<CommunityForum />} />
        <Route path="/community" element={<CommunityPosts />} />
        <Route path="/write-post" element={<WritePost />} />
      </Routes>
    </Router>
  );
}

export default Home;
