// --- SideBar.jsx ---
import { Checkbox, FormControlLabel } from "@mui/material";
import PriceRange from "./PriceRange";
import { useState } from "react";
import Select from "react-select";
import { locations } from "./../assets/locations";

function SideBar() {
  const categories = ["Appartments", "Houses", "Rooms", "TownHouses"];
  const bedrooms = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3+" },
  ];

  const [rangeValues, setRangeValues] = useState({ min: 10000, max: 200000 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBedroom, setBedroom] = useState(null);
  const [selectedBathroom, setBathroom] = useState(null);

  const handleBedroomChange = (value) => setBedroom(value);
  const handleBathroomChange = (value) => setBathroom(value);
  const handleLocationChange = (value) => setSelectedLocation(value);
  const handleRangeChange = (values) => setRangeValues(values);

  const customStyles = {
    control: (base) => ({
      ...base,
      height: "36px",
      borderRadius: "6px",
      borderColor: "#B0B0B0",
      fontSize: "0.875rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#A0A0A0",
      },
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "0.875rem",
      backgroundColor: state.isFocused ? "#E0E0E0" : "white",
      color: state.isSelected ? "black" : "#333",
      "&:hover": {
        backgroundColor: "#D6D6D6",
      },
    }),
  };

  return (
    <div className="hidden md:block fixed left-0 top-[90px] h-[calc(100vh-80px)] overflow-y-auto bg-stone-200 p-4 w-72 border-r border-gray-300">
      <h3 className="text-lg font-semibold">Filters</h3>

      {/* Category */}
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Category</h4>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {categories.map((category, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox size="small" />}
              label={<span className="text-sm">{category}</span>}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-8">
        <h4 className="text-sm font-medium mb-2">Price Range</h4>
        <PriceRange min={10000} max={200000} onChange={handleRangeChange} />
      </div>

      {/* Rooms */}
      <div className="mt-8 space-y-3">
        <div>
          <label className="text-xs block mb-1">Bedrooms</label>
          <Select
            options={bedrooms}
            value={selectedBedroom}
            placeholder="-"
            onChange={handleBedroomChange}
            styles={customStyles}
          />
        </div>
        <div>
          <label className="text-xs block mb-1">Bathrooms</label>
          <Select
            options={bedrooms}
            value={selectedBathroom}
            placeholder="-"
            onChange={handleBathroomChange}
            styles={customStyles}
          />
        </div>
      </div>

      {/* Location */}
      <div className="mt-8">
        <h4 className="text-sm font-medium mb-2">Location</h4>
        <Select
          options={locations}
          value={selectedLocation}
          onChange={handleLocationChange}
          placeholder="Select a city"
          styles={customStyles}
        />
      </div>
    </div>
  );
}

export default SideBar;

// --- Usage in Listings.jsx ---
// In your <Listings /> page make sure:
// - you add <SideBar /> inside a div with correct sticky classes
// - you do not use overflow-hidden on parent unless needed
