import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./assets/house_logo.png"; // Ensure this is the correct logo path

function Navbar() {
  return (
    <AppBar position="static" color="default" sx={{ padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Clickable Logo (Navigates to Home) */}
        <Box
          component={Link}
          to="/"
          sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={logo}
            alt="Parliamade"
            sx={{ height: 40, cursor: "pointer" }}
          />
        </Box>

        {/* Center - Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "center", fontFamily: "serif" }}
        >
          PARLIAMADE
        </Typography>

        {/* Right Side - Listings, Leads, Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            component={Link}
            to="/listings"
            sx={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              fontFamily: "serif",
            }}
          >
            LISTINGS
          </Typography>
          <Typography
            component={Link}
            to="/leads"
            sx={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              fontFamily: "serif",
            }}
          >
            LEADS
          </Typography>
          <Avatar
            sx={{ bgcolor: "gray", cursor: "pointer" }}
            component={Link}
            to="/profile"
          >
            D
          </Avatar>{" "}
          {/* Clicking on profile navigates to Profile page */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
