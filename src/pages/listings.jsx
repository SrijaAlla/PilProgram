import React, { useState } from "react";
import { Card } from "../components/Card";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../components/SideBar";
import { Link, useLocation } from "react-router-dom";

// Load all listing images
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);

function Listings() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const displayedImages = images;

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white overflow-x-hidden relative">
      {/* Mobile Backdrop */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out z-50 
        ${sidebarVisible ? "fixed inset-y-0 left-0 w-72" : "hidden"} 
        md:static md:block md:w-72 bg-stone-200 border-r border-gray-300`}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 max-w-screen-2xl mx-auto">
        {/* Top Bar: Search + Filter Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="bg-stone-200 p-2 sm:p-3 rounded-lg flex items-center w-full sm:w-auto">
            <SearchIcon fontSize="small" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full sm:w-64 text-sm outline-none bg-stone-200 border-b border-black"
            />
          </div>

          {/* Mobile Filter Button */}
          <button
            className="md:hidden flex items-center gap-2 p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition text-sm"
            onClick={() => setSidebarVisible((prev) => !prev)}
          >
            <TuneIcon fontSize="small" />
            <span>Filter</span>
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {displayedImages.map((src, index) => (
            <Link to={`${location.pathname}/${index + 1}`} key={index}>
              <Card src={src} className="aspect-[4/3] w-full object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
