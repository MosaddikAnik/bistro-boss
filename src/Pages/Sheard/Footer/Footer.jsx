import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <footer className="bg-[#121826] text-white py-12">
        <div className="max-w-6xl items-center mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-8 px-6">
          {/* Contact Us */}
          <div className="px-36">
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Follow Us */}
          <div className="px-44 ">
            <h3 className="text-xl font-semibold mb-4">Follow US</h3>
            <p className="mb-4">Join us on social media</p>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="bg-black footer sm:footer-horizontal footer-center text-base-content p-4">
        <aside>
          <p className="text-white text-xl">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
