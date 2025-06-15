import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-12 shadow-2xl px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Address */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co/RG51Tmxt/wendar-removebg-preview.png"
              alt="logo"
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>
          <p className="text-sm mb-2 leading-relaxed">
            WanderNest Inc. <br />
            123 Tech Park, Silicon Valley, CA
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 WanderNest. All rights reserved.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="link link-hover">Branding</a></li>
            <li><a href="#" className="link link-hover">Design</a></li>
            <li><a href="#" className="link link-hover">Marketing</a></li>
            <li><a href="#" className="link link-hover">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="link link-hover">About Us</a></li>
            <li><a href="#" className="link link-hover">Contact</a></li>
            <li><a href="#" className="link link-hover">Jobs</a></li>
            <li><a href="#" className="link link-hover">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="footer-title">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="link link-hover">Terms of Use</a></li>
            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
            <li><a href="#" className="link link-hover">Cookie Policy</a></li>
          </ul>

          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-primary" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
