import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Badge, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./../assets/house_logo.png";
import profilePic from "./../assets/profile.png";

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
    setMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Listings", path: "/listings" },
    { title: "Leads", path: "/leads" },
  ];

  return (
    // <nav className="bg-white p-4 shadow-md w-full z-50">
    <nav className="sticky top-0 bg-white p-4 shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="flex items-center">
          <img src={logo} alt="Estates" className="h-10 mr-2" />
          <h1 className="text-xl font-serif uppercase">Parliamade</h1>
        </div> */}
        <div className="flex items-center">
          <img src={logo} alt="Estates" className="h-10 mr-2" />
          <span className="hidden md:inline text-xl font-serif uppercase">
            Parliamade
          </span>
        </div>

        {/* Mobile: Hamburger Menu & Avatar */}
        <div className="flex items-center md:hidden space-x-4">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="/profile">
            <Avatar src={profilePic} alt="Profile" className="w-9 h-9" />
          </Link>
        </div>

        {/* Desktop: Navigation Links */}
        <div className="hidden md:flex space-x-6">
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

        {/* Desktop: Search, Notifications, and Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <IconButton>
            <SearchIcon className="text-black" />
          </IconButton> */}

          <IconButton component={Link} to="/notifications">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon className="text-black" />
            </Badge>
          </IconButton>

          <Link
            to="/profile"
            className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer"
          >
            <Avatar src={profilePic} alt="Profile" className="w-10 h-10" />
            <div className="text-left">
              <p className="text-sm font-bold">Paige M.</p>
              <p className="text-xs text-gray-500">paige@gmail.com</p>
            </div>
            <KeyboardArrowDownIcon className="text-black" />
          </Link>
        </div>
      </div>

      {/* Mobile: Navigation Links */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-serif ${
                  activeTab === link.path ? "font-bold text-[#8B4513]" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
