"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function ContactForm () {
  const ContactSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-sm p-8">
      
      <h1 className="text-2xl font-semibold text-[#3a2f28] mb-6 text-center">
        Contact Us
      </h1>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
       onSubmit={async (values, { resetForm }) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    alert("Message saved to database!");
    resetForm();
  } catch (err) {
    alert(err.message);
  }
}}

      >
        {() => (
          <Form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="w-full rounded-lg border border-[#e6dccf] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
                placeholder="Your name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full rounded-lg border border-[#e6dccf] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="w-full rounded-lg border border-[#e6dccf] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8b6f4e]"
                placeholder="Write your message..."
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#3a2f28] text-white py-2.5 rounded-lg hover:bg-[#2b231d] transition"
            >
              Send Message
            </button>

          </Form>
        )}
      </Formik>
    </div>
  );
}
