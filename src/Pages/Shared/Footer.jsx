import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const paymentIcons = [
  "https://i.ibb.co/rfs5MNTd/294654-visa-icon.png",
  "https://i.ibb.co/KzB4fyWR/1933703-charge-credit-card-debit-mastercard-payment-icon.png",
  "https://i.ibb.co/KcRPqP12/bkash-seeklogo.png",
  "https://i.ibb.co/TDJx7T5m/nagad-seeklogo.png",
  "https://i.ibb.co/4n23SYMQ/dutch-bangla-rocket-seeklogo.png",
  "https://i.ibb.co/20rvjdNf/dutch-bangla-bank-ltd-logo-png-seeklogo-310356.png",
];

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content py-12 px-6 md:px-20 shadow-2xl">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

        {/* Discover Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Discover</h3>
          <ul className="space-y-2 text-sm text-base-content/80">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Talent & Culture</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="grid grid-cols-3 gap-3">
            {paymentIcons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="payment"
                className="w-12 h-8 object-contain bg-white p-1 rounded shadow"
              />
            ))}
          </div>
        </div>

        {/* Help & Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
          <p className="text-sm text-base-content/80 mb-3">
            We're here 24/7! Reach out via Messenger or call anytime.
          </p>
          <h4 className="text-md font-semibold mb-1">Experience Center</h4>
          <p className="text-sm text-base-content/80">
            Sheltech Ayaan,<br />
            House 58, Road 6 & 11,<br />
            Block C, Level 2, Banani, Dhaka
          </p>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-sm text-base-content/80 mb-2">
            <FaEnvelope /> info@wandernest.com
          </p>
          <p className="flex items-center gap-2 text-sm text-base-content/80 mb-4">
            <FaPhoneAlt /> +88 09678 123456
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-primary"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary"><FaYoutube /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-base-content/20 mt-10 pt-6 text-center text-sm text-base-content/60">
        © {new Date().getFullYear()} WanderNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
