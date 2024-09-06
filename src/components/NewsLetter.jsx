import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const NewsLetter = () => {
  const handleSubmit = (values, { resetForm }) => {
    toast.success("Successfully subscribed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast",
    });
    resetForm();
  };

  return (
    <>
      <div className="flex items-center justify-center mx-auto min-h-screen px-4">
        <div className="bg-white w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center border-red-900 rounded-xl py-12 px-6 gap-4 md:gap-6 h-[700px]">
          <div className="w-full md:w-1/2 max-w-md flex items-center justify-center p-4">
            <img
              src="/undraw_subscribe_vspl.svg"
              alt="img"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6">
            <p className="text-xl font-extrabold mb-2">Sign up to our</p>
            <p className="text-4xl md:text-6xl font-extrabold mb-4">
              Newsletter
            </p>
            <p className="font-bold mb-6">
              Subscribe to our newsletter and stay updated.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="relative w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`w-full px-12 py-2 border border-[#F9A826] rounded-lg focus:outline-none transition-colors`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <svg
                      className="absolute top-3 left-3 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#e89a19"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="my-4 px-6 py-2 bg-[#F9A826] w-full font-bold rounded-lg hover:bg-[#e89a19] transition-colors"
                  >
                    Sign up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewsLetter;
