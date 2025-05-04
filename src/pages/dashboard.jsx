import React from "react";
import BackgroundHouses from "../components/backgroundhouses";
import Greeting from "../components/Greeting";
import Listings from "./listings";
import Leads from "./leads";
import { Link } from "react-router-dom";

function Dashboard() {
  const boxStyle = "bg-orange-100 rounded-lg px-4 py-4 shadow-md w-full h-full";
  return (
    <div className="flex flex-col items-center w-full overflow-hidden pt-10 gap-10 px-4 md:px-12">
      {/* Greeting Section */}
      <div className="text-center w-full">
        <Greeting name="Paige" />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl flex flex-col gap-6 text-[#8B4513]">
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
          {/* Common box styles */}

          {/* Leads Section */}
          <div className="flex flex-col gap-3 w-full lg:w-1/2">
            <h6 className="font-bold font-serif uppercase text-sm text-center">
              Leads
            </h6>
            <Link to="/leads" className="no-underline text-inherit">
              <div className={boxStyle + " min-h-[220px]"}>
                <Leads preview={true} maxItems={3} />
              </div>
            </Link>
          </div>
          {/* Listings Section */}
          <div className="flex flex-col gap-3 w-full lg:w-1/2">
            <h6 className="font-bold font-serif uppercase text-sm text-center">
              Listings
            </h6>
            <Link to="/listings" className="no-underline text-inherit">
              <div className={boxStyle + " min-h-[220px]"}>
                <Listings preview={true} maxItems={3} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
