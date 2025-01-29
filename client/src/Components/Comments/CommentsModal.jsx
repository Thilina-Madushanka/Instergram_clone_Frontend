import React, { useState } from "react";
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

const CommentsModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  handlePostLike,
  handleSavePost,
}) => {
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
                  src="https://tse4.mm.bing.net/th?id=OIP.sIFBOg4WYtSLLCAkeFqOoQHaD5&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://tse3.mm.bing.net/th?id=OIP.EUyw5OVpOdt_5ED9dw4TzwHaFr&pid=Api&P=0&h=180"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>User Name</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>
                <hr />

                {/* both implementations are work */}

                {/* <div className="comment">
                  {[1, 1, 1, 1].map((_, index) => (
                    <CommentCard key={index} />
                  ))}
                </div> */}

                <div className="comment">
                  {[1, 1, 1, 1].map(() => (
                    <CommentCard />
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
                  <p>10 likes</p>
                  <p className="flex opacity-50 text-sm">1 day ago</p>
                </div>

                <div className="border-t w-full">
                  <div className="flex items-center space-x-5 w-full py-2 px-5">
                    <BsEmojiSmile className="text-2xl" />
                    <input
                      className="commentInput"
                      type="text"
                      placeholder="Add a Comment..."
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
