import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} style={{ margin: "1rem" }}>
      ← Back
    </button>
  );
};

export default BackButton;
