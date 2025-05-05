import React, { useState } from "react";

const PostCard = ({
  userName,
  title,
  content,
  postedAt,
  comments = [],
  attachmentUrls = [],
}) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const visibleComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow p-5 mb-6">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">{postedAt}</p>
        </div>
      </div>

      {/* Title & Content */}
      <h4 className="text-xl font-bold text-[#7B5715] mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{content}</p>

      {/* Attachments */}
      {attachmentUrls.length > 0 && (
        <div className="mb-4">
          {attachmentUrls.map((url, index) =>
            url.endsWith(".pdf") ? (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B68E63] font-semibold block mb-2 underline"
              >
                View PDF Attachment
              </a>
            ) : (
              <img
                key={index}
                src={url}
                alt={`attachment-${index}`}
                className="w-full max-h-64 object-contain rounded mb-2"
              />
            )
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="border border-[#B68E63] text-[#B68E63] font-bold px-4 py-2 rounded hover:bg-[#B68E63] hover:text-white transition">
          Like
        </button>
        <button className="border border-[#B68E63] text-[#B68E63] font-bold px-4 py-2 rounded hover:bg-[#B68E63] hover:text-white transition">
          Comment
        </button>
      </div>

      {/* Comments */}
      <div className="space-y-2">
        {visibleComments.map((c, i) => (
          <div key={i} className="text-sm text-gray-800">
            <span className="font-semibold">{c.userName}:</span> {c.comment}
          </div>
        ))}

        {!showAllComments && comments.length > 2 && (
          <button
            onClick={() => setShowAllComments(true)}
            className="text-[#B68E63] text-sm font-semibold mt-2"
          >
            Show more comments
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;
