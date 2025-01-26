import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import CommentCard from "./CommentCard";
import { BsBookmark, BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

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
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
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
                <div>
                  {[1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>
                {/* --------------- */}
                <div className="flex justify-between items-center w-full py-4">
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
                {/* ------------- */}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentsModal;
