import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = getAuth().currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Title and content are required.");

    try {
      await addDoc(collection(db, "questions"), {
        title,
        content,
        userId: user?.uid,
        userName: user?.displayName || "Anonymous",
        audience: "community",
        createdAt: serverTimestamp(),
        comments: [],
      });

      alert("Post created!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFDF8] flex flex-col items-center px-4 py-10">
      <h2 className="text-2xl font-bold text-[#7B5715] mb-6">
        Create a New Post
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-[#B68E63] rounded px-4 py-3 bg-white shadow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full border border-[#B68E63] rounded px-4 py-3 bg-white shadow h-40 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#7B5715] text-white font-bold py-3 rounded hover:bg-[#5e3f12]"
        >
          Post to Community
        </button>
      </form>
    </div>
  );
};

export default WritePost;
