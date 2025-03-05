import React from "react";
import { Box } from "@mui/material";
import BackgroundHouses from "./backgroundhouses";
import Greeting from "./Greeting";
import Listings from "./listings"; // Import the existing Listings component
import Leads from "./leads"; // Import the existing Leads component
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{ overflowX: "hidden", paddingTop: "40px" }}
    >
      {/* Greeting */}
      <Box sx={{ width: "30%", textAlign: "center" }}>
        <Greeting name="Doris" />
      </Box>

      {/* Preview Section with Full Listings & Leads Components */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          maxHeight: "400px",
          gap: "40px",
          overflowX: "hidden",
        }}
      >
        <Link
          to="/listings"
          style={{ textDecoration: "none", color: "inherit", width: "45%" }}
        >
          <Box
            sx={{
              backgroundColor: "#FCE8E6",
              borderRadius: "15px",
              padding: "20px",
              // minHeight: "150px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f8d7da" },
              overflow: "hidden",
            }}
          >
            <Listings preview={true} />
          </Box>
        </Link>

        {/* Wrap Leads in a Clickable Box */}
        <Link
          to="/leads"
          style={{ textDecoration: "none", color: "inherit", width: "45%" }}
        >
          <Box
            sx={{
              backgroundColor: "#FCE8E6",
              borderRadius: "15px",
              padding: "20px",
              // maxHeight: "250px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f8d7da" },
              // overflow: "hidden",
            }}
          ></Box>
        </Link>
      </Box>

      {/* Background Houses */}
      {/* <Box sx={{ marginTop: "40px", width: "100%", overflowX: "hidden" }}> */}
      <BackgroundHouses />
      {/* </Box> */}
    </Box>
  );
}

export default Dashboard;
