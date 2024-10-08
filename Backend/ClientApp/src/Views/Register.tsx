import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/joy/Button";
import * as Yup from "yup";

import useAuthService from "../api/auth";
import { useNavigate } from "react-router-dom";
const RegisterSchema = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password is too short")
    .max(20, "Password is too long"),
  /* .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
      "Password must contain at least one letter and one number"
    ), */
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const { register } = useAuthService();
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await register(values.email, values.password);
      if (response === 200  ) {
        navigate("/login");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-[#4ec7e2] flex justify-center items-center">
        <div className="text-center text-white text-2xl">Find your movie</div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gray-800">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-3/4 max-w-md">
              <h1 className=" flex items-center text-white justify-center text-3xl mb-5 ">
                Register
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-white">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="rounded-lg w-full h-12 p-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="mb-1 text-white">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="rounded-lg w-full h-12 p-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="mb-1 text-white">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="rounded-lg w-full h-12 p-2"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </Button>
                <div>
                  <div className="text-white text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
