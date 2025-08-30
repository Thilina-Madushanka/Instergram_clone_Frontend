import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ChangeProfilePhotoModal({
  isOpen,
  onOpen,
  onClose,
  handleProfileImageChange,
}) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Change Profile Photo</ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center">
              <label
                for="profileImage"
                className="font-bold py-3 text-blue-600 text-center cursor-pointer text-xs w-full"
              >
                Upload Photo
              </label>

              <input
                onChange={handleProfileImageChange}
                type="file"
                id="profileImage"
                name="profileImage"
              />
            </div>

            <hr />

            <p className="font-bold py-3 text-red-600 text-center cursor-pointer">
              Remove Current Photo
            </p>

            <hr />

            <p className="py-3 text-center" onClick={onClose}>
              cancel
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ChangeProfilePhotoModal;
