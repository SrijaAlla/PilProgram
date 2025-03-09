// import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
<<<<<<< HEAD:src/components/backgroundhouses.jsx
import house1 from "./../assets/house1.png";
import house2 from "./../assets/house2.png";
import house3 from "./../assets/house3.png";
import house4 from "./../assets/house4.png";
import house5 from "./../assets/house5.png";
=======
import house1 from "./assets/house1.png";
import house2 from "./assets/house2.png";
import house3 from "./assets/house3.png";
import house4 from "./assets/house4.png";
import house5 from "./assets/house5.png";
import house6 from "./assets/house6.png";
import house7 from "./assets/house7.png";
import house8 from "./assets/house8.png";
import house9 from "./assets/house9.png";
>>>>>>> landing-page:src/backgroundhouses.jsx

// House images array
const houseImages = [
  house4,
  house8,
  house9,
  house1,
  house3,
  house2,
  house7,
  house5,
  house6,
  house8,
  house4,
  // house7,
  house1,
  house9,
  // house3,
  // house3,
  // house8,
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
            maxHeight: "150px", // Restrict max height
            height: "auto",
            position: "relative",
            zIndex: i,
            marginRight: "-2%",
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
