import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import heroImage from "../assets/hero-bg.jpg"; // your hero background image

// Mock tracking data (used to validate input)
const trackingData = {
  "15b6fc6f-327a-4ec4-896f-486349e85a5d": {},
  "83d4ca15-0f35-48f5-b7a3-1ea210004f9m": {},
  "d40217f5-7a10-4b15-b9a3-320b67d0912a": {},
};

const HeroSection = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    const trimmedId = trackingId.trim();

    if (!trimmedId) {
      toast.error("Please enter a tracking ID");
      return;
    }

    if (!trackingData[trimmedId]) {
      toast.error("❌ Tracking ID not found!");
      return;
    }

    navigate(`/track/${trimmedId}`, { state: { fromHome: true } });
  };

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Swift Logistics – Reliable, Real-time Tracking
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Track all your deliveries with confidence - real-time updates, secure
          handling,zero hassle.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl mx-auto">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="px-4 py-3 w-full rounded-md bg-white/90 text-gray-900 font-medium shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleTrack}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition shadow-md"
          >
            Track
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
