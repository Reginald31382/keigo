import React, { useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { MdOutlinePhoneIphone } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);

      setFormData({
        firstName: "",
        phoneNumber: "",
        subject: "",
        email: "",
        message: "",
      });

      emailjs
        .sendForm("service_6xbe3wi", "template_141opnr", form.current, {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success("Thank you for your message");
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="email-container">
      {/* Email form */}
      <div className="form-container">
        <h1 className="form-heading">Call or email for Keigo?</h1>
        <p className="contact-info">
          <MdOutlinePhoneIphone />
          313-474-1286
        </p>

        <form ref={form} onSubmit={sendEmail} className="email-form">
          <div className="input-container">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
              className="form-input"
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="input-container">
            <label className="form-label">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="000-000-0000"
              onChange={handleChange}
              className="form-input"
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </div>

          <div className="input-container">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="input-container">
            <label className="form-label">Message:</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="form-input"
              style={{ height: "5rem" }}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>

          <div className="button-container">
            <button type="submit" className="submit-button">
              Send
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default Email;
