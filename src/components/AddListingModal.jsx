import React, { useState } from "react";

const defaultAdjectives = ["Cozy", "Modern", "Spacious", "Luxurious", "Bright"];
const defaultAmenities = [
  "Fireplace",
  "Swimming Pool",
  "Backyard",
  "Garage",
  "Balcony",
  "Hardwood Floors",
  "Home Office",
];

export default function AddListingModal({ onClose }) {
  const [selectedAdjectives, setSelectedAdjectives] = useState([]);
  const [customAdjective, setCustomAdjective] = useState("");
  const [allAdjectives, setAllAdjectives] = useState([...defaultAdjectives]);
  const [bathrooms, setBathrooms] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [aiSummary, setAiSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);

  const toggleAdjective = (word) => {
    setSelectedAdjectives((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  const toggleAmenity = (item) => {
    setAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );
  };

  const handleCustomAdjectiveAdd = () => {
    const trimmed = customAdjective.trim();
    if (trimmed && !allAdjectives.includes(trimmed)) {
      setAllAdjectives((prev) => [...prev, trimmed]);
      setSelectedAdjectives((prev) => [...prev, trimmed]);
      setCustomAdjective("");
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(
      0,
      10 - files.length
    );
    const newPreviewUrls = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prev) => [...prev, ...newPreviewUrls]);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleGenerateSummary = async () => {
    const prompt = `
Write a compelling and professional real estate paragraph describing a house with ${bedrooms} bedrooms and ${bathrooms} bathrooms.
Incorporate these adjectives: ${selectedAdjectives.join(", ")}.
Mention amenities naturally: ${amenities.join(", ")}.
Return only one paragraph.`;

    setLoadingSummary(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/gemini/generate-summary",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );
      const data = await response.json();
      setAiSummary(data.summary || "No summary returned.");
    } catch (error) {
      console.error("Error generating summary:", error);
      setAiSummary("Something went wrong.");
    } finally {
      setLoadingSummary(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      adjectives: selectedAdjectives,
      bathrooms,
      bedrooms,
      amenities,
      images: files,
      aiSummary,
    };
    console.log("📝 Form Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-8 w-full max-w-2xl relative shadow-xl overflow-y-auto max-h-screen"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6 text-[#7b561e] font-serif">
          Add New Listing
        </h2>

        {/* Adjectives */}
        <div className="mb-6">
          <label className="block font-medium mb-2 text-gray-700">
            Describe the place
          </label>
          <div className="flex flex-wrap gap-2">
            {allAdjectives.map((adj) => (
              <button
                key={adj}
                type="button"
                onClick={() => toggleAdjective(adj)}
                className={`px-3 py-1 rounded-full border text-sm transition ${
                  selectedAdjectives.includes(adj)
                    ? "bg-[#7b561e] text-white"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-[#f5f2eb]"
                }`}
              >
                {adj}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="Add custom adjective"
              className="p-2 border border-gray-300 rounded w-full shadow-sm"
              value={customAdjective}
              onChange={(e) => setCustomAdjective(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustomAdjectiveAdd()}
            />
            <button
              type="button"
              onClick={handleCustomAdjectiveAdd}
              className="bg-[#7b561e] text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Bed/Bath Counters */}
        <div className="mb-6 flex gap-6">
          {[
            ["Bedrooms", bedrooms, setBedrooms],
            ["Bathrooms", bathrooms, setBathrooms],
          ].map(([label, value, setter]) => (
            <div key={label}>
              <label className="block mb-2 font-medium">{label}</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setter(Math.max(0, value - 1))}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  −
                </button>
                <span>{value}</span>
                <button
                  type="button"
                  onClick={() => setter(value + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <label className="block font-medium mb-2 text-gray-700">
            Select Amenities
          </label>
          <div className="flex flex-wrap gap-2">
            {defaultAmenities.map((amenity) => (
              <button
                key={amenity}
                type="button"
                onClick={() => toggleAmenity(amenity)}
                className={`px-3 py-1 rounded-full border text-sm transition ${
                  amenities.includes(amenity)
                    ? "bg-[#7b561e] text-white"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-[#f5f2eb]"
                }`}
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-medium mb-2 text-gray-700">
            Upload Pictures (Max 10)
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
            disabled={files.length >= 10}
          />
          {files.length >= 10 && (
            <p className="text-red-600 text-sm mt-1">
              Maximum 10 images allowed.
            </p>
          )}
          {images.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`preview-${index}`}
                  className="h-24 w-full object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        {/* AI Summary */}
        <div className="mb-6">
          <button
            type="button"
            onClick={handleGenerateSummary}
            disabled={loadingSummary}
            className="bg-[#7b561e] text-white px-4 py-2 rounded hover:bg-[#5e3f12]"
          >
            {loadingSummary ? "Generating..." : "Generate AI Summary"}
          </button>
          {aiSummary && (
            <div className="mt-3 p-4 bg-[#f9f4ed] border border-[#e3d8c7] rounded text-sm text-gray-800 whitespace-pre-wrap">
              {aiSummary}
            </div>
          )}
        </div>

        {/* Final Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-[#7b561e] text-[#7b561e] rounded hover:bg-[#7b561e]/10 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#7b561e] text-white rounded hover:bg-[#5e3f12] transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
