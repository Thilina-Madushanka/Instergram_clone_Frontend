import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, SetFile] = useState();

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      SetFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    setIsDragOver(false);
  };

  const handleOnchange =(e)=>{
    const file = e.target.file(0);
    if(file && file.type.startsWith("image/") || )
  }
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post</p>
            <Button
              className="inline-flex"
              variant={"ghost"}
              size="sm"
              colorScheme={"blue"}
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div>
              <div>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="drag-drop h-full"
                >
                  <div>
                    <FaPhotoVideo className="text-3xl" />
                    <p>Drag Photos or Vidoes Here</p>
                  </div>
                  <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>
                  <input type="text" id="file-upload" accept="image/*, video/" onChange={handleOnchange}/>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
