// import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import house1 from "./assets/house1.png";
import house2 from "./assets/house2.png";
import house3 from "./assets/house3.png";
import house4 from "./assets/house4.png";
import house5 from "./assets/house5.png";

// House images array
const houseImages = [
  house4,
  house1,
  house2,
  house3,
  house4,
  house5,
  house1,
  house2,
  house4,
  house3,
  house4,
];

function BackgroundHouses() {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        width: "100%",
        bottom: 0,
        overflow: "hidden",
      }}
    >
      {houseImages.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`House ${i + 1}`}
          style={{
            maxWidth: "15%",
            height: "auto",
            position: "relative",
            zIndex: i,
            marginRight: "-5%",
          }}
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{
            duration: 0.6,
            delay: Math.random() * 1.5, // Random delay for staggered effect
            ease: "easeOut",
          }}
        />
      ))}
    </Box>
  );
}

export default BackgroundHouses;
