import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLike, setIsCommentLike] = useState(false);

  const handleLikeComment = () => {
    setIsCommentLike(!isCommentLike);
  };

  return (
    <div className="p-3 border-b">
      <div className="flex items-center justify-between py-5">
        {/* Profile Image & Comment */}
        <div className="flex items-center">
          <img
            className="w-9 h-9 rounded-full"
            src="https://tse3.mm.bing.net/th?id=OIP.5FjI0ydKpiuhD1rybBgtNAHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <div className="ml-3">
            <p>
              <span className="font-semibold">username</span>
              <span className="ml-2">nice post</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>1 min ago</span>
              <span>23 Likes</span>
            </div>
          </div>
        </div>

        {/* Heart Icon Moved to Right */}
        <div className="ml-auto">
          {isCommentLike ? (
            <AiFillHeart
              onClick={handleLikeComment}
              className="text-lg hover:opacity-50 cursor-pointer text-red-600"
            />
          ) : (
            <AiOutlineHeart
              onClick={handleLikeComment}
              className="text-lg hover:opacity-50 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
