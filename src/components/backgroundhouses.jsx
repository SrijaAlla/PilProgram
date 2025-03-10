import React from "react";
import { motion } from "framer-motion";

// Function to import all images from the houses directory
const importAll = (r) => r.keys().map(r);
const houseImages = importAll(
  require.context("./../assets/houses", false, /\.(png|jpe?g|svg)$/)
);

function BackgroundHouses() {
  return (
    <div className="absolute bottom-0 left-0 flex justify-start items-end w-full overflow-hidden">
      {houseImages.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`House ${i + 1}`}
          className="max-w-[15%] max-h-[120px] h-auto relative z-10 -mr-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
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
