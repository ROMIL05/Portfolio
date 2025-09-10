"use client";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CometCard from "../UI/CometCard";
import { Toast } from "primereact/toast";
import { Mail, User, FileText, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const toast = useRef(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Message sent successfully!",
            life: 3000,
          });
          resetForm();
        },
        (error) => {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to send message. Try again!",
            life: 3000,
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  const InputField = ({
    name,
    placeholder,
    icon: Icon,
    type = "text",
    as = "input",
    rows,
  }) => {
    const isTextarea = as === "textarea";

    return (
      <div className="relative w-full flex flex-col">
        <div className="relative w-full">
          <div
            className={`absolute left-3 text-gray-400 pointer-events-none ${
              isTextarea ? "top-3" : "top-1/2 -translate-y-1/2"
            }`}
          >
            <Icon size={20} />
          </div>

          <Field
            name={name}
            type={type}
            as={as}
            rows={rows}
            placeholder={placeholder}
            className={`bg-transparent w-full text-white placeholder-gray-500 border-b border-gray-500 focus:outline-none focus:border-purple-500 transition-colors rounded-sm ${
              isTextarea ? "py-3 pl-10 pr-3 resize-none" : "py-2 pl-10 pr-3"
            }`}
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className={`text-red-500 text-xs mt-1 ml-10`}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />
      <section
        id="contact"
        className="container mx-auto flex flex-col items-center justify-center px-5 lg:px-28 py-14"
      >
        <h1 className="text-5xl font-bold text-center mb-3 text-white">
          Contact
        </h1>
        <p className="text-gray-400 text-center text-lg mb-10">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        <CometCard className="w-full max-w-lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-6 p-6 bg-[#1F2121] rounded-[16px] shadow-xl">
                <InputField
                  name="email"
                  placeholder="Your Email"
                  icon={Mail}
                  type="email"
                />
                <InputField name="name" placeholder="Your Name" icon={User} />
                <InputField
                  name="subject"
                  placeholder="Subject"
                  icon={FileText}
                />
                <InputField
                  name="message"
                  placeholder="Write your message..."
                  icon={MessageCircle}
                  as="textarea"
                  rows={4}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 rounded-md bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700 transition-colors shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </CometCard>
      </section>
    </>
  );
};

export default Contact;
