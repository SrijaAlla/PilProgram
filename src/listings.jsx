import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import house1 from "./assets/house1.png";
import house2 from "./assets/house2.png";
import house3 from "./assets/house3.png";
import house4 from "./assets/house4.png";
import house5 from "./assets/house5.png";
import realhouse1 from "./assets/real_house1.jpeg";
import realhouse2 from "./assets/real_house2.png";

const listings = [
  { id: 23134, date: "2/31/24", image: realhouse1 },
  { id: 21379, date: "4/23/23", image: realhouse2 },
  { id: 49171, date: "2/23/12", image: house3 },
  { id: 234997, date: "5/23/24", image: house4 },
  { id: 479374, date: "12/12/23", image: house5 },
  { id: 674589, date: "12/12/24", image: house1 },
];

function Listings({ preview = false }) {
  // Show only 2 listings in preview mode
  const displayedListings = preview ? listings.slice(0, 2) : listings;

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {displayedListings.map((listing) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={preview ? 4 : 2} // Make listings wider in preview mode
            key={listing.id}
          >
            {/* <Card
              sx={{
                bgcolor: "#f5e6c8",
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)", // Slight zoom effect on hover
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={listing.image}
                alt={`MLS: ${listing.id}`}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  MLS: {listing.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Listed on {listing.date}
                </Typography>
              </CardContent>
            </Card>
             */}
            <Card
              sx={{
                bgcolor: "#f5e6c8",
                borderRadius: "15px",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                width: "100%", // Make cards take full width
                height: "200px", // Ensures all cards have the same height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  transform: "scale(1.05)", // Slight zoom effect on hover
                },
              }}
            >
              <CardMedia
                component="img"
                height="100"
                image={listing.image}
                alt={`MLS: ${listing.id}`}
                sx={{
                  objectFit: "cover", // Ensure images fill the space properly
                  width: "100%", // Make sure images are uniform
                }}
              />
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  MLS: {listing.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Listed on {listing.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Listings;
