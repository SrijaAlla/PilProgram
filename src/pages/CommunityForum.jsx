import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityForum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FEFDF8] flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-[#7B5715] mb-6">
        Welcome to the Community Forum
      </h1>

      <img
        src="/logo.png"
        alt="Forum Logo"
        className="w-56 h-56 object-contain mb-10"
      />

      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <button
          className="bg-[#B68E63] text-white font-bold py-3 px-6 rounded-lg w-full"
          onClick={() => navigate("/write-post")}
        >
          Write a Post
        </button>

        <div className="flex gap-4 w-full">
          <button
            className="bg-[#B68E63] text-white font-bold py-3 px-6 rounded-lg w-1/2"
            onClick={() => navigate("/realtor-posts")}
          >
            Realtor Posts
          </button>
          <button
            className="bg-[#B68E63] text-white font-bold py-3 px-6 rounded-lg w-1/2"
            onClick={() => navigate("/community-posts")}
          >
            Community Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
