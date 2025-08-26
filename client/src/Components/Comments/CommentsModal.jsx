import React, { use, useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import CommentCard from "./CommentCard";
import {
  BsBookmark,
  BsThreeDots,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentsModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createCommentAction,
  findPostCommentAction,
} from "../../Redux/Comment/Action";
import { findPostByIdAction } from "../../Redux/Post/Action";
import { timeDifference } from "../../Config/Logic";

const CommentsModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  handlePostLike,
  handleSavePost,
}) => {
  const [commentContent, setCommentContent] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  const { comment, post, user } = useSelector((store) => store);

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  console.log("post", post);

  useEffect(() => {
    const data = { jwt: token, postId };
    if (postId) {
      dispatch(findPostByIdAction(data));
    }
  }, [comment.createdComment, postId, comment.likeComment]);

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[85vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src={post.singlePost?.image}
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src={
                          user.reqUser.image ||
                          "https://tse1.mm.bing.net/th?id=OIP.ULdaKJ-nJlOAZqR5lToUWgHaHa&pid=Api&P=0&h=180"
                        }
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>{user.reqUser.username}</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>
                <hr />

                <div className="comment">
                  {post.singlePost?.comments?.map((item) => (
                    <CommentCard comment={item} />
                  ))}
                </div>

                {/* Icons Section */}
                <div className="flex justify-between items-center w-full py-4">
                  <div className="flex items-center space-x-3">
                    {isPostLiked ? (
                      <AiFillHeart
                        className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                        onClick={handlePostLike}
                      />
                    ) : (
                      <AiOutlineHeart
                        className="text-2xl hover:opacity-50 cursor-pointer"
                        onClick={handlePostLike}
                      />
                    )}
                    <FaRegComment className="text-2xl hover:opacity-50 cursor-pointer" />
                    <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer" />
                  </div>

                  <div className="cursor-pointer">
                    {isSaved ? (
                      <BsBookmarkFill
                        onClick={handleSavePost}
                        className="text-2xl hover:opacity-50 cursor-pointer"
                      />
                    ) : (
                      <BsBookmark
                        onClick={handleSavePost}
                        className="text-2xl hover:opacity-50 cursor-pointer"
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-10 w-full py-2">
                  {post.singlePost?.likedByUsers?.length > 0 && (
                    <p>{post.singlePost.likedByUsers.length}likes</p>
                  )}
                  <p className="flex opacity-50 text-sm">
                    {timeDifference(post.singlePost?.createdAt)}
                  </p>
                </div>

                <div className="border-t w-full">
                  <div className="flex items-center space-x-5 w-full py-2 px-5">
                    <BsEmojiSmile className="text-2xl" />
                    <input
                      className="commentInput"
                      type="text"
                      placeholder="Add a Comment..."
                      onChange={(e) => setCommentContent(e.target.value)}
                      value={commentContent}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const data = {
                            postId,
                            jwt: token,
                            data: {
                              content: commentContent,
                            },
                          };

                          dispatch(createCommentAction(data));
                          setCommentContent("");
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentsModal;
