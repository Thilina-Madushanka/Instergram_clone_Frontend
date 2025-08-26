import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  likePostAction,
  savePostAction,
  unLikePostAction,
  unsavePostAction,
} from "../../Redux/Post/Action";
import { isPostLikedByUser, isSavedPost } from "../../Config/Logic";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store);

  const data = { jwt: token, postId: post?.id };
  const navigate = useNavigate();

  console.log("reqUser--->", user.reqUser);

  const handleSavePost = () => {
    setIsSaved(true);
    dispatch(savePostAction(data));
  };

  const handleUnSavePost = () => {
    setIsSaved(false);
    dispatch(unsavePostAction(data));
  };

  const handlePostLike = () => {
    setIsPostLiked(true);
    dispatch(likePostAction(data));
  };

  const handlePostUnLike = () => {
    setIsPostLiked(false);
    dispatch(unLikePostAction(data));
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOpenCommentModal = () => {
    navigate(`/comment/${post.id}`);
    onOpen();
  };

  useEffect(() => {
    setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
    setIsSaved(isSavedPost(user.reqUser, post.id));
  }, [post.likedByUsers, user.reqUser]);

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={
                post.user.userImage ||
                "https://tse1.mm.bing.net/th?id=OIP.ULdaKJ-nJlOAZqR5lToUWgHaHa&pid=Api&P=0&h=180"
              }
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">{post?.user.username}</p>
              <p className="flex font-thin text-sm">{post.location}</p>
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
          <img className="w-full" src={post?.image} alt="" />
        </div>

        {/* Icons Section */}
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-3">
            {isPostLiked ? (
              <AiFillHeart
                className="text-xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostUnLike}
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
                onClick={handleUnSavePost}
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
          {post?.likedByUsers?.length > 0 && (
            <p>{post?.likedByUsers?.length}likes</p>
          )}
          {post?.comments?.length > 0 && (
            <p className="opacity-50 py-2 cursor-pointer">
              View All {post?.comments?.length} Comments
            </p>
          )}
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
