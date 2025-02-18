import React, { useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const serviceID = "your_service_id"; // Replace with EmailJS Service ID
    const templateID = "your_template_id"; // Replace with EmailJS Template ID
    const publicKey = "your_public_key"; // Replace with EmailJS Public Key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        setStatus("Failed to send message. Please try again.");
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="static">
      <div className="h-full static sm:h-full sm:pt-6 p-4 sm:px-80 bg-[url('https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg')]">
        <div className="flex flex-col items-center space-y-4 mt-6 sm:pt-12 static">
          <p className="font-extrabold font-custom tracking-wide text-3xl sm:text-4xl text-center">CONTACT</p>
          <p className="border-4 border-yellow-400 w-10 rounded-lg"></p>
        </div>
        <div className="p-4 pt-6 text-center static">
          <p className="font-custom text-gray-800 text-lg sm:text-xl">
            You can contact me by submitting the form below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white static drop-shadow-2xl p-6 rounded-lg space-y-6 sm:p-10 sm:mt-10">
          <div>
            <h1 className="font-custom text-gray-500 font-bold text-sm pb-2">Name</h1>
            <input
              maxLength={30}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-200 w-full rounded-lg py-2 bg-gray-100 p-2 placeholder:text-gray-400 font-semibold"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <h1 className="font-custom text-gray-500 font-bold text-sm pb-2">Email</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-200 w-full rounded-lg py-2 bg-gray-100 p-2 placeholder:text-gray-400 font-semibold"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h1 className="font-custom text-gray-500 font-bold text-sm pb-2">Message</h1>
            <textarea
              maxLength={150}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-200 w-full rounded-lg bg-gray-100 h-40 p-2 placeholder:text-gray-400 font-semibold"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-end sm:pt-4">
            <Button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "SUBMIT"}
            </Button>
          </div>

          {/* Status Message */}
          {status && <p className="text-center text-green-500">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
