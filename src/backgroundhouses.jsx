import React from "react";
import { motion } from "framer-motion";
<<<<<<< Updated upstream:src/backgroundhouses.jsx
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
=======

// Function to import all images from the houses directory
const importAll = (r) => r.keys().map(r);
const houseImages = importAll(
  require.context("./../assets/houses", false, /\.(png|jpe?g|svg)$/)
);
>>>>>>> Stashed changes:src/components/backgroundhouses.jsx

function BackgroundHouses() {
  return (
    <div className="absolute bottom-0 left-0 flex justify-start items-end w-full overflow-hidden">
      {houseImages.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`House ${i + 1}`}
<<<<<<< Updated upstream:src/backgroundhouses.jsx
          style={{
            maxWidth: "15%",
            height: "auto",
            position: "relative",
            zIndex: i,
            marginRight: "-5%",
          }}
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          animate={{ opacity: 1, y: 0 }} // Move to normal position
=======
          className="max-w-[15%] max-h-[120px] h-auto relative z-10 -mr-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
>>>>>>> Stashed changes:src/components/backgroundhouses.jsx
          transition={{
            duration: 0.6,
            delay: Math.random() * 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundHouses;
