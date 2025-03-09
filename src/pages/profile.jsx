import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import QrCodeIcon from "@mui/icons-material/QrCode";

function Profile() {
  return (
    <Box
      minHeight="100vh"
      padding="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" fontFamily="serif">
        PARLIAMADE
      </Typography>

      <Box width="100%" height="2px" bgcolor="black" marginY={2} />

      {/* Grid Layout */}
      <Grid container spacing={3} justifyContent="center">
        {/* Ratings */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Typography variant="h6">4 Star Agent</Typography>
            <Box display="flex" justifyContent="center" my={1}>
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon
                  key={index}
                  sx={{ color: index < 5 ? "#FFD700" : "#D3D3D3" }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="center" gap={3}>
              <Box
                sx={{
                  backgroundColor: "#F4D03F",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Typography fontWeight="bold">7</Typography>
                <Typography fontSize="12px">years</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#F4D03F",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Typography fontWeight="bold">334</Typography>
                <Typography fontSize="12px">sales</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Biography */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Avatar
              sx={{ bgcolor: "gray", margin: "auto", width: 60, height: 60 }}
            >
              D
            </Avatar>
            <Typography variant="h6" fontWeight="bold">
              Doris Hue
            </Typography>
            <Typography variant="body2" color="textSecondary">
              they/her/them
            </Typography>
            <Typography variant="body2" fontStyle="italic">
              Partner with Hunt Real Estate
            </Typography>
            <Typography fontSize="14px" marginTop={2}>
              This is a paragraph to talk about the agent, their hobbies, what
              they do outside of work, and other things they would like to
              include about themselves in a biography.
            </Typography>
          </Paper>
        </Grid>

        {/* QR Code */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <QrCodeIcon sx={{ fontSize: 80 }} />
            <Typography variant="body1">Generate a QR code</Typography>
            <Typography fontSize="12px" color="textSecondary">
              for open house purposes only.
            </Typography>
          </Paper>
        </Grid>

        {/* Reviews */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Typography variant="h6">Leave an anonymous review</Typography>
            <Box display="flex" justifyContent="center" my={1}>
              {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon key={index} sx={{ color: "#FFD700" }} />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Typography variant="h6">Contact Information</Typography>
            <Typography fontSize="14px">Phone: (222) 111-1111</Typography>
            <Typography fontSize="14px">Fax: (222) 111-1111</Typography>
            <Typography fontSize="14px">Email: Dorish@hunt.com</Typography>
          </Paper>
        </Grid>

        {/* Buyer/Seller Perception */}
        <Grid item xs={12} sm={4}>
          <Paper
            sx={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
          >
            <Typography variant="h6">How buyers/sellers see you</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
