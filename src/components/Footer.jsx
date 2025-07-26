// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">Swift Logistics</h2>
          <p className="mt-2 text-sm text-gray-600">
            Delivering trust across every mile. Real-time tracking, secure
            delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/track/abc123" className="hover:text-green-600">
                Track Package
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>📞 +1 (800) 123-4567</li>
            <li>📧 support@swiftlogistics.com</li>
            <li>📍 123 Swift Ave, San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Swift Logistics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
