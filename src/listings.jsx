import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DashboardRoutes from "./dashboard";
import house1 from "./assets/house1.png";
import house2 from "./assets/house2.png";
import house3 from "./assets/house3.png";
import house4 from "./assets/house4.png";
import house5 from "./assets/house5.png";

const listings = [
  { id: 23134, date: "2/31/24", image: house1 },
  { id: 213794, date: "4/23/23", image: house2 },
  { id: 49171, date: "2/23/12", image: house3 },
  { id: 234997, date: "5/23/24", image: house4 },
  { id: 479374, date: "12/12/23", image: house5 },
  { id: 674589, date: "12/12/24", image: house1 },
];

function Listings() {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {listings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card sx={{ bgcolor: "#f5e6c8", borderRadius: "15px" }}>
              <CardMedia
                component="img"
                height="140"
                image={listing.image}
                alt={`MLS: ${listing.id}`}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6">MLS: {listing.id}</Typography>
                <Typography variant="body2">
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
