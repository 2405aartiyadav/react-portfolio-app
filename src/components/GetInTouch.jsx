import React, { useState } from "react";
import email from "../assets/email.png";
import github from "../assets/github.png";
import location from "../assets/location.png";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
  
    <div className="text-black py-16 px-8 bg-gray-800 min-h-screen">
  <div className="text-center mb-12 text-4xl ">
     <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
         Let's Connects
        </h2>
    <p className="text-xl mt-4 text-white">
      Got an idea? Let’s connect and explore how we can turn it into something amazing.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
    {/* Left Section: Contact Info */}
    <div className="w-full lg:w-1/3 bg-gradient-to-r from-green-200 to-blue-500 p-8 rounded-lg shadow-lg text-center lg:text-left">
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mb-1.5 from-yellow-600 to-blue-100">
          Get In Touch
        </h2>
      <p className="mb-2">
        <strong>Email:</strong>
        <span className="flex items-center">
          <img src={email} alt="Email Icon" className="w-5 h-5 mr-2" />
          aartiyadav2405@gmail.com
        </span>
      </p>
      <p className="mb-2">
        <strong>Mobile no:</strong>
        <span className="flex items-center justify-start">
          <img src={phone} alt="phone Icon" className="w-5 h-5 mr-2" />
          +91 7083790481
        </span>
      </p>
      <p className="mb-2">
        <strong>Location:</strong>
        <span className="flex items-center justify-start">
          <img src={location} alt="location Icon" className="w-5 h-5 mr-2" />
          Nagpur, Maharashtra
        </span>
      </p>

      <div className="mt-6 font-semibold p-4 align-middle">
        <p className="text-center text-xl">Follow Me</p>
        <div className="flex justify-center px-14 m-2 lg:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/aarti-yadav-691891199"
            target="_balnk"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="md:w-12 md:h-12 mr-2" />
          </a>
          <a
            href="https://github.com/2405aartiyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="md:w-12 md:h-12 sm:w-6 sm:h-6 mr-2" />
          </a>
          <a
            href="mailto:aartiyadav2405@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="email" className="md:w-12 md:h-12 sm:w-6 sm:h-6 mr-2" />
          </a>
        </div>
      </div>
    </div>

    {/* Right Section: Contact Form */}
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-2/4 bg-gradient-to-r from-green-200 to-blue-500 p-8 rounded-lg shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="subject"
        placeholder="Enter Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-3 mb-4 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="message"
        placeholder="Type some message..."
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-400 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send Message
      </button>
      {submitted && (
        <p className="text-yellow-500 mt-4 text-center text-bold text-xl">
          Thanks! Your message has been sent.
        </p>
      )}
    </form>
  </div>
  
</div>

  );
}

export default GetInTouch;
