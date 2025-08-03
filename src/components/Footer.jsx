import React from 'react'
import { Link } from 'react-router-dom'
import email from "../assets/email.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
       <footer className="bg-[#1E3A8A] text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Aarti Yadav. All rights reserved.</p>
          {/* <div className="mt-4">
            <Link to="/privacy-policy" className="text-white hover:text-gray-300 mx-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white hover:text-gray-300 mx-4">Terms of Service</Link>
          </div> */}
        <div className="flex justify-center items-center px-14 py-4 space-x-4 mt-4">
  <a
    href="https://www.linkedin.com/in/aarti-yadav-691891199"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedin} alt="linkedin" className="bg-white rounded-2xl md:w-12 md:h-12 sm:w-6 sm:h-6" />
  </a>
  <a
    href="https://github.com/2405aartiyadav"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={github} alt="github" className="bg-white rounded-2xl md:w-12 md:h-12 sm:w-6 sm:h-6" />
  </a>
  <a
    href="mailto:aartiyadav2405@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={email} alt="email" className="bg-white rounded-2xl md:w-12 md:h-12 sm:w-6 sm:h-6" />
  </a>
</div>


        </div>
      </footer>
  )
}

export default Footer
