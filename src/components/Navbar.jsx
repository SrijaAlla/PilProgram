import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Badge, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "./../assets/house_logo.png";
import profilePic from "./../assets/profile.png";

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Listings", path: "/listings" },
    { title: "Leads", path: "/leads" },
  ];

  return (
    <nav className="bg-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Estates" className="h-12 mr-2" />
          <h1 className="text-xl font-serif uppercase">Parliamade</h1>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-lg font-serif transition-all duration-300 hover:text-[#8B4513] ${
                activeTab === link.path
                  ? "font-bold text-[#8B4513] after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#8B4513] after:absolute after:bottom-[-2px]"
                  : "text-black"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right - Search, Notifications, and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <IconButton>
            <SearchIcon className="text-black" />
          </IconButton>

          {/* Notification Bell with Badge */}
          <IconButton component={Link} to="/notifications">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon className="text-black" />
            </Badge>
          </IconButton>

          {/* Profile Section */}
          <Link
            to="/profile"
            className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer"
          >
            <Avatar src={profilePic} alt="Profile" className="w-10 h-10" />
            <div className="text-left">
              <p className="text-sm font-bold">Paige M. </p>
              <p className="text-xs text-gray-500">paige@gmail.com</p>
            </div>
            <KeyboardArrowDownIcon className="text-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
