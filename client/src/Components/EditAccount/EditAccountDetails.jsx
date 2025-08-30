import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import ChangeProfilePhotoModal from "./ChangeProfilePhotoModal";
import { editUserAction, getUserProfileAction } from "../../Redux/User/Action";
import { uploadToCloudinary } from "../../Config/UploadToCloudinary";

const EditAccountDetails = () => {
  const { user } = useSelector((store) => store);
  const toast = useToast();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageFile, setImageFile] = useState(null);

  const [initialValues, setInitialValues] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    mobile: "",
    gender: "",
    website: "",
    private: false,
  });

  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token]);

  useEffect(() => {
    const newValue = {};
    for (let item in initialValues) {
      if (user.reqUser && user.reqUser[item]) {
        newValue[item] = user.reqUser[item];
      }
    }
    formik.setValues(newValue);
  }, [user.reqUser]);

  const formik = useFormik({
    initialValues: { ...initialValues },
    enableReinitialize: true,
    onSubmit: (values) => {
      const data = {
        jwt: token,
        data: { ...values, id: user.reqUser?.id },
      };
      dispatch(editUserAction(data));
      toast({
        title: "Account Updated...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  async function handleProfileImageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const image = await uploadToCloudinary(selectedFile);
      setImageFile(image);
      const data = {
        jwt: token,
        data: { image, id: user.reqUser?.id },
      };
      dispatch(editUserAction(data));
    }

    onClose();
  }

  return (
    <div className="border rounded-md p-10 bg-white shadow-sm lg:px-32">
      {/* Profile section */}
      <div className="flex items-center gap-4 pb-8">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={
            imageFile ||
            user.reqUser?.image ||
            "https://tse1.mm.bing.net/th?id=OIP.ULdaKJ-nJlOAZqR5lToUWgHaHa&pid=Api&P=0&h=180"
          }
          alt=""
        />
        <div>
          <p className="font-medium">{user.reqUser?.username}</p>
          <p
            onClick={onOpen}
            className="font-semibold text-blue-600 cursor-pointer text-sm"
          >
            Change Profile Photo
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={6}>
          {[
            {
              id: "name",
              label: "Name",
              helper:
                "Help people discover your account by using your real/full name.",
            },
            {
              id: "username",
              label: "Username",
              helper: "In most cases, you can change this back within 14 days.",
            },
            {
              id: "website",
              label: "Website",
              helper: "Editing links is only available on mobile.",
            },
            {
              id: "bio",
              label: "Bio",
              helper: "Describe yourself in a few words.",
            },
            { id: "email", label: "Email" },
            { id: "mobile", label: "Mobile" },
            { id: "gender", label: "Gender" },
          ].map((field) => (
            <FormControl
              key={field.id}
              id={field.id}
              display="flex"
              alignItems="flex-start"
            >
              <FormLabel w="20%" minW="120px" mt="2">
                {field.label}
              </FormLabel>
              <div className="flex-1">
                <Input
                  placeholder={field.label}
                  type="text"
                  {...formik.getFieldProps(field.id)}
                />
                {field.helper && (
                  <FormHelperText fontSize="xs">{field.helper}</FormHelperText>
                )}
              </div>
            </FormControl>
          ))}

          {/* Section divider */}
          <div className="pt-6">
            <p className="font-bold text-sm">Personal Information</p>
            <p className="text-xs text-gray-600">
              Provide your personal information even if this account is used for
              a business, pet, or something else. This won’t be part of your
              public profile.
            </p>
          </div>

          <Button colorScheme="blue" type="submit" alignSelf="flex-start">
            Submit
          </Button>
        </Stack>
      </form>

      <ChangeProfilePhotoModal
        handleProfileImageChange={handleProfileImageChange}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </div>
  );
};

export default EditAccountDetails;
