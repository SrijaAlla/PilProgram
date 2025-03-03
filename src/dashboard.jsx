import React from "react";
import { Box } from "@mui/material";
import BackgroundHouses from "./backgroundhouses";
import SellerProfile from "./sellerprofile";

function Dashboard() {
  return (
    <Box
      // minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: "20px" }}
    >
      {/* Seller Profile Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <SellerProfile />
      </Box>

      {/* Background Houses */}
      <BackgroundHouses />
    </Box>
  );
}

export default Dashboard;
