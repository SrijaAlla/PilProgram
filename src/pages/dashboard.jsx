import React from "react";
import BackgroundHouses from "../components/backgroundhouses";
import Greeting from "../components/Greeting";
import Listings from "./listings";
import Leads from "./leads";
import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div className="flex flex-col lg:flex-row items-start w-full overflow-hidden pt-10 gap-5 lg:gap-10">
      {/* Greeting Section */}
      <div className="w-full lg:w-2/5 text-center">
        <Greeting name="Paige" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-8 text-[#8B4513]">
        {/* Leads Section */}
        <div>
          <h6 className="font-bold font-serif mb-4 uppercase font-playfair text-[#8B4513]">
            Leads
          </h6>
          <Link to="/leads" className="no-underline text-inherit">
            <div className="bg-orange-100 rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg text-center">
              <Leads preview={true} />
            </div>
          </Link>
        </div>

        {/* Listings Section */}
        <div>
          <h6 className="font-bold font-serif mb-4 uppercase font-playfair text-[#8B4513]">
            Listings
          </h6>
          <Link to="/listings" className="no-underline text-inherit">
            <div className="bg-orange-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg text-center p-2 text-sm h-[12em] flex justify-center">
             <Leads preview={true}/>
            </div>
          </Link>
        </div>
      </div>

      {/* Background Houses */}
      <BackgroundHouses />
    </div>
  );
}

export default Dashboard;
