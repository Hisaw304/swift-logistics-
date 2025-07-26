// src/components/ContactForm.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your actual Service ID
        "your_template_id", // Replace with your actual Template ID
        formRef.current,
        "your_public_key" // Replace with your actual Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-20 px-6 bg-white text-gray-800" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-10 text-gray-600">
          Have a question about your shipment or need help? Contact us directly
          below.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
