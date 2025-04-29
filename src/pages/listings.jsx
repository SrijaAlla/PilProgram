import React, { useState } from "react";
import { Card } from "../components/Card";
import AddListingModal from "../components/AddListingModal"; // You'll create this component

function Listings({ preview = false }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
  );

  const displayedImages = preview ? images.slice(0, 5) : images;

  return (
    <div className={`container mx-auto ${preview ? "pt-3" : "pt-16"}`}>
      {!preview && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700"
          >
            + Add Listing
          </button>
        </div>
      )}
      <div
        className={`grid ${
          preview ? "grid-cols-5 gap-2" : "lg:grid-cols-4 gap-5"
        }`}
      >
        {displayedImages.map((src, index) => (
          <Card
            key={index}
            src={src}
            className={preview ? "h-35 w-30" : "h-60 w-full"}
          />
        ))}
      </div>
      {isModalOpen && <AddListingModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default Listings;
