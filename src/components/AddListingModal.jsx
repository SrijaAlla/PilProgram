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
    const adjectivePhrase = selectedAdjectives.join(", ");
    const amenityPhrase = amenities.length
      ? ` It also includes features such as ${amenities.join(", ")}.`
      : "";

    const prompt = `
Write a compelling and professional real estate paragraph describing a house that has ${bedrooms} bedrooms and ${bathrooms} bathrooms.
Incorporate the following adjectives naturally into the description: ${adjectivePhrase}.
Do not list the adjectives or amenities separately — weave them into the paragraph organically.
${
  amenities.length
    ? `Mention these amenities in a natural way: ${amenities.join(", ")}.`
    : ""
}
Return only a paragraph.`;

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
      setAiSummary("Something went wrong while generating the summary.");
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
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-6">Add New Listing</h2>

        {/* Adjective Selection */}
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
                className={`px-3 py-1 rounded-full border transition ${
                  selectedAdjectives.includes(adj)
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
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
              className="p-2 border rounded w-full"
              value={customAdjective}
              onChange={(e) => setCustomAdjective(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCustomAdjectiveAdd()}
            />
            <button
              type="button"
              onClick={handleCustomAdjectiveAdd}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Bedroom & Bathroom */}
        <div className="mb-6 flex gap-6">
          <div>
            <label className="block mb-2 font-medium">Bathrooms</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>
              <span>{bathrooms}</span>
              <button
                type="button"
                onClick={() => setBathrooms(bathrooms + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">Bedrooms</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>
              <span>{bedrooms}</span>
              <button
                type="button"
                onClick={() => setBedrooms(bedrooms + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
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
                className={`px-3 py-1 rounded-full border transition ${
                  amenities.includes(amenity)
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
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
            name="images[]"
            onChange={handleFileChange}
            className="w-full"
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
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {loadingSummary ? "Generating..." : "Generate AI Summary"}
          </button>
          {aiSummary && (
            <div className="mt-3 p-4 bg-gray-100 border rounded text-sm text-gray-800 whitespace-pre-wrap">
              {aiSummary}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
