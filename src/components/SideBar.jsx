/* eslint-disable react/jsx-no-undef */
import { PriceChange } from "@mui/icons-material";
import { Checkbox, FormControlLabel, SliderThumb } from "@mui/material";
import PriceRange from "./PriceRange";
import { useState } from "react";
import Select from 'react-select'
import {locations} from './../assets/locations'


function SideBar() {
    const categories = ['Appartments','Houses','Rooms','TownHouses'];
    const bedrooms = [{value: "1", label: "1"},{value: "2",label: "2"},{value: "3", label:"3"}];

    const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [selectedBedroom,SetBedroom] = useState(null);

    const handleBedroomChange = (value)=>{
        SetBedroom(value)
    }

    const handleLocationChange = (value) => setSelectedLocation(value);

    const handleRangeChange = (values) => {
        setRangeValues(values);
    };

    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: "40px",
            borderRadius: "6px",
            borderColor: "#B0B0B0",  
            boxShadow: "none",  
            outline: "none",  
            "&:hover": {
                borderColor: "#A0A0A0",  
            }
        }),
        menu: (base) => ({
            ...base,
            width: "100%",
            boxShadow: "none",  
            outline: "none", 
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
            boxShadow: "none",  
        }),
        option: (base, state) => ({
            ...base,
        backgroundColor: state.isFocused || state.isHovered ? "#E0E0E0" : "white", 
        color: state.isSelected ? "black" : "#333",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#D6D6D6",
        }
        }),
    };

    return (
        <>
        <div className="p-3 w-[250px] font-sans bg-stone-200 h-screen">
           <h3 className="text-xl font-semibold">Filters</h3>
           <div className="mt-8 flex flex-col">
            <h4 className="text-lg mb-4">Category</h4>
           {categories.map((category, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        label={category} 
                        
                    />
                ))}
           </div>
           <div className="mt-8">
                <h4 className="text-lg mb-4">Price Range</h4>
                <PriceRange min={10000} max={200000} onChange={handleRangeChange} className=""/>
           </div>

           <div className="mt-10">
                <h4 className="text-lg mb-4">Rooms</h4>
                <div className="flex flex-col gap-2 ml-4">
                    <div className="flex gap-2 items-center">
                        <h5 className="text-lg">Bedrooms</h5>
                        <span>-</span>
                        <Select options={bedrooms} value={selectedBedroom} placeholder="-" onChange={handleBedroomChange} styles={customStyles} />
                    </div>
                    <div className="flex gap-3 items-center">
                        <h5 className="text-lg">Bathrooms</h5>
                        <span>-</span>
                        <div >
                        <Select options={bedrooms} value={selectedBedroom} placeholder="-" onChange={handleBedroomChange} styles={customStyles} />
                        </div>
                    </div>
                </div>
           </div>

           <div className="mt-10">
                <h4 className="text-lg mb-4">Location</h4>
                <Select
                    options={locations}
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    placeholder="Select a city"
                    className="w-full"
                    styles={customStyles}
                />
            </div>
        </div>
        </>
    );
}

export default SideBar;