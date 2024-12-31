"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../../../utils/supabase/client"; // Adjust the path
import { toast } from "sonner";

const ContactPage = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) errors.phone = "Phone is required";
    if (!values.description) errors.description = "Description is required";
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { data, error } = await supabase
      .from("enquiry")
      .insert([values]);

    //   console.log("Supabase Response:", { data, error });

    // if (data) {
    //   toast.success("Enquiry Sent Successfully!");
    //   resetForm();
    // } else {
    //   toast.error("Error submitting the form. Please try again.");
    // }
    
      toast.success("Enquiry Sent Successfully!");
      resetForm();
    
    setSubmitting(false);
  };

  return (
    <div className="p-5 md:p-20 bg-gray-50">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* About Section */}
          <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li><strong>Name:</strong> Chitransh Ferwani</li>
              <li><strong>Email:</strong> threeskyrealty@gmail.com</li>
              <li><strong>Phone:</strong> +91 79872 02918</li>
              <li><strong>Address:</strong> Three Sky Reality, Kolar Road, Bhopal, Madhya Pradesh</li>
            </ul>
          </div>

          {/* Form Section */}
          <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Send us your Enquiry</h2>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="mt-6 space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Describe your enquiry"
                      className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.description && touched.description && (
                      <p className="text-red-500 text-sm">{errors.description}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition ${
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
