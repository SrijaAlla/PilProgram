import React, { useState } from "react";
import { Card } from "../components/Card";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from "../components/SideBar";
import AddListingModal from "../components/AddListingModal";
import { Link, useLocation } from "react-router-dom";

// Load images
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);

// Generate mock listings with price and date
const listingsData = images.map((src, i) => ({
  id: i + 1,
  src,
  mls: `23${i + 100}`,
  date: "2/28/24", // Valid placeholder
  price: Math.floor(Math.random() * 190000) + 10000, // 10k–200k
}));

function Listings({ preview = false, maxItems }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([10000, 200000]);
  const location = useLocation();

  const previewItems = preview
    ? listingsData.slice(0, maxItems || 5)
    : listingsData;

  const filteredListings = previewItems.filter(
    (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  if (preview) {
    return (
      <div className="grid grid-cols-3 gap-2 justify-center">
        {filteredListings.map((item) => (
          <Card
            key={item.id}
            src={item.src}
            className="h-32 w-24 sm:h-36 sm:w-28 object-cover"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-white overflow-x-hidden relative">
      {/* Backdrop for mobile sidebar */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          sidebarVisible ? "block" : "hidden"
        } md:block w-full sm:w-[3em] bg-white border-r z-50 fixed md:relative h-full top-16 md:top-0`}
      >
        <SideBar setPriceRange={setPriceRange} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 max-w-screen-2xl mx-auto md:ml-[280px]">
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

          {/* Mobile Buttons */}
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
              className="bg-[#7b561e] text-white px-4 py-2 rounded-md shadow hover:bg-[#5e3f12] text-sm"
            >
              + Add Listing
            </button>
          </div>

          {/* Desktop Add Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:inline-block bg-[#7b561e] text-white px-4 py-2 rounded shadow hover:bg-[#5e3f12] text-sm"
          >
            + Add Listing
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredListings.map((item) => (
            <Link to={`${location.pathname}/${item.id}`} key={item.id}>
              <Card
                src={item.src}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="text-center text-sm mt-1">
                <div className="font-semibold">MLS: {item.mls}</div>
                <div className="text-gray-500 text-xs">
                  Listed on {item.date}
                </div>
              </div>
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
