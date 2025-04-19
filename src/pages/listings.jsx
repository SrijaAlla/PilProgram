import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import SideBar from "../components/SideBar";
import { Link, useLocation } from "react-router-dom";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);

function Listings() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  console.log(location);

  const displayedImages =  images;

  return (
    <div className="relative flex overflow-hidden">

          <div className={`absolute left-0 top-0 h-full w-[250px] ml-2 mt-2 rounded-lg bg-stone-200 shadow-md transition-transform duration-300 ${sidebarVisible ? "translate-x-0" : "-translate-x-full"} overflow-y-auto`}>
              <SideBar />
          </div>

            <div className={`container my-10 mx-auto transition-all duration-300 ${sidebarVisible ? "translate-x-[125px]" : "translate-x-0"}`}>
            
                <div className="flex gap-2 items-center mb-10 justify-between">
                    <div className="bg-stone-200 p-3 rounded-xl flex items-center">
                        <SearchIcon />
                        <input type="text" placeholder="Search" className="outline-none bg-stone-200 border-b-2 border-black ml-2" />
                    </div>
                    <button 
                        className="flex items-center gap-2 p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                        onClick={() => setSidebarVisible(!sidebarVisible)}
                    >
                        <TuneIcon onClick={()=> setSidebarVisible(!sidebarVisible)}/>
                        <span>Filter</span>
                    </button>
                </div>

                <div className={`grid lg:grid-cols-4 gap-5`}>
                    {displayedImages.map((src, index) => (
                        <Link to={`${location.pathname}/1`}>
                            <Card key={index} src={src} className="h-60 w-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
  );
}

export default Listings;
