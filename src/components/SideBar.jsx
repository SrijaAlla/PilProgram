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

  const handleBedroomChange = (value) => setBedroom(value);
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
    <div className="w-full h-full md:sticky md:top-4 p-4 md:h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 space-y-6 font-sans text-sm">
      <h3 className="text-lg font-semibold">Filters</h3>

      {/* Category */}
      <div>
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
        <h4 className="text-lg mb-4">Price Range</h4>
        <PriceRange
          min={10000}
          max={200000}
          onChange={handleRangeChange}
          className=""
        />
      </div>

      {/* Rooms */}
      <div>
        <h4 className="text-sm font-medium mb-2">Rooms</h4>
        <div className="space-y-3">
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
              value={selectedBedroom}
              placeholder="-"
              onChange={handleBedroomChange}
              styles={customStyles}
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
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
