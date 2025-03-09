import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "./../assets/house_logo.png"; // Ensure the path is correct

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
            sx={{ height: 40, mr: 1 }}
          />
          <Typography
            variant="h6"
            sx={{
              // fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif",

              // fontSize: "28px", // Adjust size to match the style
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

        {/* Right - Notifications and Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Notification Bell with Badge */}
          <IconButton component={Link} to="/notifications">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon sx={{ color: "black" }} />
            </Badge>
          </IconButton>

          {/* Profile Avatar */}
          <Avatar
            sx={{ bgcolor: "gray", cursor: "pointer" }}
            component={Link}
            to="/profile"
          >
            G
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
