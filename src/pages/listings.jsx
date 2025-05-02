import React, { useState } from "react";
import { Card } from "../components/Card";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../components/SideBar";
import AddListingModal from "../components/AddListingModal";
import { Link, useLocation } from "react-router-dom";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);

function Listings({ preview = false }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const displayedImages = preview ? images.slice(0, 5) : images;

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white overflow-x-hidden relative">
      {/* Backdrop for mobile sidebar */}
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

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 max-w-screen-2xl mx-auto">
        {!preview && (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
            {/* Search Bar */}
            <div className="bg-stone-200 p-2 sm:p-3 rounded-lg flex items-center w-full sm:w-auto">
              <SearchIcon fontSize="small" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full sm:w-64 text-sm outline-none bg-stone-200 border-b border-black"
              />
            </div>

            {/* Mobile Button Row: Filter left, Add right */}
            <div className="w-full flex justify-between gap-2 md:hidden">
              <button
                className="flex items-center gap-2 px-3 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-sm"
                onClick={() => setSidebarVisible((prev) => !prev)}
              >
                <TuneIcon fontSize="small" />
                <span>Filter</span>
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-orange-600 text-white px-4 py-2 rounded-md shadow hover:bg-orange-700 text-sm"
              >
                + Add Listing
              </button>
            </div>

            {/* Desktop Add Listing button */}
            <button
              onClick={() => setModalOpen(true)}
              className="hidden md:inline-block bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 text-sm"
            >
              + Add Listing
            </button>
          </div>
        )}

        {/* Listings grid */}
        <div
          className={`grid ${
            preview
              ? "grid-cols-2 sm:grid-cols-3 gap-2"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          }`}
        >
          {displayedImages.map((src, index) => (
            <Link to={`${location.pathname}/${index + 1}`} key={index}>
              <Card
                src={src}
                className={
                  preview ? "h-35 w-30" : "aspect-[4/3] w-full object-cover"
                }
              />
            </Link>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && <AddListingModal onClose={() => setModalOpen(false)} />}
      </div>
    </div>
  );
}

export default Listings;
