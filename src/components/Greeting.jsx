import React, { useState, useEffect } from "react";

const Greeting = ({ name }) => {
  const fullText = `Hi ${name}`;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 150); // Adjust speed of typing effect
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <h1
      style={{
        fontSize: "5rem",
        fontFamily: "'Dancing Script', cursive",
        fontStyle: "normal",
      }}
    >
      <span style={{ color: "black" }}>
        {displayText.startsWith("Hi") ? "Hi" : displayText}
      </span>
      <span style={{ color: "#8B4513" }}>
        {displayText.slice(2)} {/* This ensures 'Doris' is in brown */}
      </span>
    </h1>
  );
};

export default Greeting;
