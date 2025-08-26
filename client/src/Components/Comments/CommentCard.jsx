import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { isCommentLikedByUser, timeDifference } from "../../Config/Logic";
import { useDispatch, useSelector } from "react-redux";
import {
  likeCommentAction,
  unLikeCommentAction,
} from "../../Redux/Comment/Action";

const CommentCard = ({ comment }) => {
  const [isCommentLike, setIsCommentLike] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store.user);

  const data = {
    commentId: comment.id,
    jwt: token,
  };

  const handleLikeComment = () => {
    setIsCommentLike(true);
    dispatch(likeCommentAction(data));
    console.log("handle like comment", data);
  };

  const handleUnLikeComment = () => {
    setIsCommentLike(false);
    dispatch(unLikeCommentAction(data));
    console.log("handle unlike comment", data);
  };

  // useEffect(() => {
  //   if (user?.reqUser?.id) {
  //     setIsCommentLike(isCommentLikedByUser(comment, user.reqUser.id));
  //   }
  // }, [user?.reqUser?.id, comment]);

  useEffect(() => {
    setIsCommentLike(isCommentLikedByUser(comment, user?.reqUser?.id));
  }, []);

  return (
    <div className="p-3 border-b">
      <div className="flex items-center justify-between py-5">
        {/* Profile Image & Comment */}
        <div className="flex items-center">
          <img
            className="w-9 h-9 rounded-full"
            src={
              comment.user.userImage ||
              "https://tse1.mm.bing.net/th?id=OIP.ULdaKJ-nJlOAZqR5lToUWgHaHa&pid=Api&P=0&h=180"
            }
            alt=""
          />
          <div className="ml-3">
            <p>
              <span className="font-semibold">{comment?.user.username}</span>
              <span className="ml-2">{comment.content}</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>{timeDifference(comment?.createdAt)}</span>
              {comment?.likedByUsers?.length > 0 && (
                <span>{comment?.likedByUsers?.length}Likes</span>
              )}
            </div>
          </div>
        </div>

        {/* Heart Icon Moved to Right */}
        <div className="ml-auto">
          {isCommentLike ? (
            <AiFillHeart
              onClick={handleUnLikeComment}
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
