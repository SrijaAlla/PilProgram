import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
<<<<<<< HEAD:src/components/Navbar.jsx
import logo from "./../assets/house_logo.png"; // Ensure the path is correct
=======
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./assets/house_logo.png"; // Ensure the path is correct
import profilePic from "./assets/profile.png"; // Replace with actual profile image
>>>>>>> landing-page:src/Navbar.jsx

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
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: "10px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left - Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Estates"
            sx={{ height: 60, mr: 1 }}
          />
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Parliamade
          </Typography>
        </Box>

        {/* Center - Navigation Links */}
        <Box sx={{ display: "flex", gap: 4, position: "relative" }}>
          {navLinks.map((link) => (
            <Typography
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                textDecoration: "none",
                fontFamily: "'Playfair Display', serif",
                color: activeTab === link.path ? "brown" : "black",
                fontSize: "16px",
                fontWeight: activeTab === link.path ? "bold" : "normal",
                position: "relative",
                "&:after": {
                  content: '""',
                  display: "block",
                  width: activeTab === link.path ? "100%" : "0",
                  height: "2px",
                  backgroundColor: "brown",
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  transition: "width 0.3s ease-in-out",
                },
              }}
            >
              {link.title}
            </Typography>
          ))}
        </Box>

        {/* Right - Search, Notifications, and Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Search Icon */}
          <IconButton>
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>

          {/* Notification Bell with Badge */}
          <IconButton component={Link} to="/notifications">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon sx={{ color: "black" }} />
            </Badge>
          </IconButton>

          {/* Profile Section - Clicking redirects to Profile Page */}
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {/* Profile Picture */}
            <Avatar
              src={profilePic}
              alt="Profile"
              sx={{ width: 40, height: 40 }}
            />

            {/* Profile Info */}
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Vetrick W.
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                Vetrick@gmail.com
              </Typography>
            </Box>

            {/* Dropdown Arrow */}
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
