import React, { useState } from "react";
import {
  BsBookmark,
  BsThreeDots,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentsModal from "../Comments/CommentsModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const handleOpenCommentModal = () => {
    onOpen();
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

        {/* Icons Section */}
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-3">
            {isPostLiked ? (
              <AiFillHeart
                className="text-xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
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

        <div className="flex items-center space-x-10 w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">View All 10 Comments</p>
        </div>

        <div className="border-t w-full">
          <div className="flex items-center space-x-5 w-full py-2 px-5">
            <BsEmojiSmile className="text-xl" />
            <input
              className="commentInput"
              type="text"
              placeholder="Add a Comment..."
            />
          </div>
        </div>
      </div>

      <CommentsModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
