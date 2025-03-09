import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function SellerProfile() {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      {/* Seller Image */}
      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>D</Avatar>

      {/* Seller Name */}
      <Typography variant="h6" fontWeight="bold">
        Doris Hue
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Partner with Hunt Real Estate
      </Typography>

      {/* Star Ratings */}
      <Box display="flex" my={1}>
        {[1, 2, 3, 4, 5].map((index) => (
          <StarIcon
            key={index}
            sx={{ color: index < 5 ? "#FFD700" : "#D3D3D3" }}
          />
        ))}
      </Box>

      <Typography variant="body1" fontWeight="bold">
        4 Star Agent
      </Typography>

      {/* Sales & Experience */}
      <Box display="flex" gap={2} my={2}>
        <Box
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#F4D03F",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "bold",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          7 <br /> years
        </Box>

        <Box
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#F4D03F",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "bold",
            flexDirection: "column",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          334 <br /> sales
        </Box>
      </Box>
    </Box>
  );
}

export default SellerProfile;
