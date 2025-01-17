import React, { useState } from "react";
import { BsBookmark, BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLIked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handlePostLike = () => {
    setIsPostLIked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://tse3.mm.bing.net/th?id=OIP.wFi9DkjbIGNjlc130gV5_wHaEK&pid=Api&P=0&h=180"
              alt=""
            />

            {/* <div className="flex items-center flex-grow space-x-5"> */}
            <div className="pl-2">
              <p className="font-semibold text-sm">UserName</p>
              <p className="flex font-thin text-sm">location</p>
            </div>
          </div>

          <div>
            <BsThreeDots onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full"
            src="https://tse3.mm.bing.net/th?id=OIP.eOHQrbQAj6w8uBdACBsDsgHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>

        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart onClick={handlePostLike} />
            )}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
