import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../Redux/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  username: Yup.string().required("Username is required"),
  name: Yup.string().required("Full name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signup = () => {
  const initialValues = { email: "", username: "", name: "", password: "" };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const toast = useToast();
  console.log("store signup" + auth.signup);

  const handleNavigate = () => navigate("/login");

  const handleSubmit = (values, actions) => {
    console.log("values:" + values);
    dispatch(signupAction(values));
    actions.setIsSubmitting(false);
  };

  useEffect(() => {
    if (auth.signup?.username) {
      navigate("/login");
      toast({
        title: `Account created. ${auth.signup?.username}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [auth.signup]);

  return (
    <div>
      <div className="border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            className="mb-5"
            src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180"
            alt=""
          />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className="space-y-8">
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="email"
                        placeholder="Mobile Number or Email"
                      ></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="username"
                        placeholder=" User Name"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="name"
                        placeholder=" Full Name"
                      ></Input>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="password"
                        placeholder="password"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className="text-center text-sm">
                  people who use our service they need to add contact
                  informations{" "}
                </p>
                <p className="text-center text-sm">
                  By signing up, you agree to our terms, privacy policy and
                  cookies policy
                </p>

                <Button
                  className="w-full"
                  mt={4}
                  colorScheme="blue"
                  type="submit"
                  isLoading={formikProps.isSubmitting}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          If you Already have an account{" "}
          <span
            onClick={handleNavigate}
            className="ml-2 text-blue-700 cursor-pointer"
          >
            Sign In
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
