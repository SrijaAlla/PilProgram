import React from "react";
import { Card } from "../components/Card";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);

function Leads({ preview = false, maxItems }) {
  // const displayedImages = preview ? images.slice(0, 5) : images;
  const displayedImages = preview ? images.slice(0, maxItems || 5) : images;

  return (
    <div className={`container mx-auto ${preview ? "pt-3" : "pt-16"}`}>
      <div
        className={`grid ${
          preview ? "grid-cols-5 gap-2" : "lg:grid-cols-4 gap-5"
        }`}
      >
        {displayedImages.map((src, index) => (
          <Card
            key={index}
            src={src}
            className={preview ? "h-35 w-30" : "h-60 w-full"}
          />
        ))}
      </div>
    </div>
  );
}

export default Leads;
