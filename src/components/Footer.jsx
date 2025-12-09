import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-cyan-400">HKS Travel</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Simplifying travel across Bangladesh - book dependable transport
              anytime, anywhere, with confidence.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-cyan-400" />
                <a
                  href="mailto:info@hkstravel.com"
                  className="hover:text-cyan-400 transition"
                >
                  info@hkstravel.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-cyan-400" />
                <a
                  href="tel:09643404040"
                  className="hover:text-cyan-400 transition"
                >
                  09643404040
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <p className="leading-tight">
                  Road 24, House 15, Gulshan-02,
                  <br />
                  Dhaka 1212
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition inline-flex items-center gap-2"
                >
                  Careers
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Bus ticketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Car rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Launch ticketing
                </a>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Others</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div>© 2025 HKS Travel All rights reserved.</div>

          <div className="flex gap-6 underline underline-offset-4">
            <a href="#" className="hover:text-cyan-400 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Refund Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-cyan-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
