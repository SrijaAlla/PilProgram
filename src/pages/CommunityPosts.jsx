import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import PostCard from "../components/PostCard";

const CommunityPosts = () => {
  const [posts, setPosts] = useState([]);
  const [showMine, setShowMine] = useState(false);
  const user = getAuth().currentUser;

  useEffect(() => {
    const q = query(
      collection(db, "questions"),
      where("audience", "==", "community"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        postedAt: doc.data().createdAt?.toDate().toLocaleString(),
      }));
      setPosts(results);
    });

    return unsub;
  }, []);

  const filteredPosts = showMine
    ? posts.filter((post) => post.userId === user?.uid)
    : posts;

  return (
    <div className="min-h-screen bg-[#FEFDF8] px-4 py-8">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowMine(false)}
          className={`px-6 py-2 rounded-full font-bold border ${
            !showMine
              ? "bg-[#B68E63] text-white border-[#B68E63]"
              : "text-[#B68E63] border-[#B68E63]"
          }`}
        >
          My Feed
        </button>
        <button
          onClick={() => setShowMine(true)}
          className={`px-6 py-2 rounded-full font-bold border ${
            showMine
              ? "bg-[#B68E63] text-white border-[#B68E63]"
              : "text-[#B68E63] border-[#B68E63]"
          }`}
        >
          My Posts
        </button>
      </div>

      {filteredPosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default CommunityPosts;
