import React from "react";
<<<<<<< HEAD:src/pages/dashboard.jsx
import { Box } from "@mui/material";
import BackgroundHouses from "./../components/backgroundhouses";
import Greeting from "./../components/Greeting";
import Listings from "./listings"; // Import the existing Listings component // Import the existing Leads component
=======
import { Box, Typography } from "@mui/material";
import BackgroundHouses from "./backgroundhouses";
import Greeting from "./Greeting";
import Listings from "./listings"; // Import the existing Listings component
import Leads from "./leads"; // Import the existing Leads component
>>>>>>> landing-page:src/dashboard.jsx
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" }, // Responsive: Column on small screens, row on large screens
        alignItems: "flex-start",
        // justifyContent: "space-between",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden", // Prevent vertical scroll
        padding: "40px 0px 0px 0px",
        gap: { xs: "20px", lg: "40px" }, // Adjust spacing for different screen sizes
      }}
    >
      {/* Greeting Section (Hi Doris) - Left Side */}
      <Box
        sx={{
          width: { xs: "100%", lg: "40%" }, // Larger on desktop, full width on mobile
          textAlign: "center",
          // paddingLeft: "3em",
        }}
      >
        <Greeting name="Paige" />
      </Box>

      {/* Right Section: Leads (Popular) and Listings (Apartment around London) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" }, // Smaller width on desktop, full width on mobile
          gap: "30px",

          color: "brown",
        }}
      >
        {/* Leads Section (Popular) */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "15px",
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Leads
          </Typography>
          <Link
            to="/leads"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                backgroundColor: "#fef6e4",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                "&:hover": { boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)" },
                textAlign: "center",
              }}
            >
              {/* <Leads preview={true} /> */}
            </Box>
          </Link>
        </Box>

        {/* Listings Section (Apartment around London) */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "15px",
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Listings
          </Typography>
          <Link
            to="/listings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                backgroundColor: "#fef6e4",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                "&:hover": { boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)" },
                textAlign: "center",
              }}
            >
              <Listings preview={true} />
            </Box>
          </Link>
        </Box>
      </Box>

      {/* Background Houses */}
      <BackgroundHouses />
    </Box>
  );
}

export default Dashboard;
