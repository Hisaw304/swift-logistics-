// src/components/TrustedBanner.jsx
import React from "react";
import CountUp from "react-countup";

import visa from "../assets/visa.png";
import mastercard from "../assets/visa.png";
import paypal from "../assets/visa.png";
import discover from "../assets/visa.png";
// import mastercard from "../assets/mastercard.svg";
// import paypal from "../assets/paypal.svg";
// import discover from "../assets/discover.svg"; // optional, you can remove this if not using

const TrustedBanner = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase text-blue-600 font-medium tracking-widest mb-3">
          Trusted Worldwide
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trusted by{" "}
          <span className="text-blue-700">
            <CountUp end={10000} duration={3} separator="," />+
          </span>{" "}
          users and growing
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Swift Logistics is the preferred solution for thousands of customers
          and businesses around the world.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-6">
          <img
            src={visa}
            alt="Visa"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
          <img
            src={mastercard}
            alt="Mastercard"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
          <img
            src={paypal}
            alt="PayPal"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
          <img
            src={discover}
            alt="Discover"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBanner;
