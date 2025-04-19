import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signinAction } from "../../Redux/Auth/Action";
import { useDispatch } from "react-redux";
import { store } from "../../Redux/Store/Store";
import { getUserProfileAction } from "../../Redux/User/Action";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "password must me minimum 8 characters")
    .required("Required"),
});

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const jwt = localStorage.getItem("token");

  const handleSubmit = (values, actions) => {
    dispatch(signinAction(values));
    actions.setSubmitting(false);
    console.log(values);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfileAction(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (user.reqUser?.username) {
      navigate(`/${user.reqUser?.username}`);
    }
  }, [jwt, user.reqUser]);

  const handleNavigate = () => navigate("/signup");

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
                        placeholder="Mobile number or email"
                      ></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          If you don't have an account{" "}
          <span
            onClick={handleNavigate}
            className="ml-2 text-blue-700 cursor-pointer"
          >
            Sign Up
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signin;
