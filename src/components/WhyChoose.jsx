import React from "react";
import { Truck, ShieldCheck, Globe, Activity } from "lucide-react"; // Lucide icons

const features = [
  {
    title: "Fast Delivery",
    description: "Swift and reliable parcel delivery right on schedule.",
    icon: <Truck size={28} className="text-white" />,
  },
  {
    title: "Secure Logistics",
    description: "End-to-end protection with encrypted tracking systems.",
    icon: <ShieldCheck size={28} className="text-white" />,
  },
  {
    title: "Global Coverage",
    description: "We deliver across the world with a vast network.",
    icon: <Globe size={28} className="text-white" />,
  },
  {
    title: "Real-Time Tracking",
    description: "Monitor your shipments live with instant status updates.",
    icon: <Activity size={28} className="text-white" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Why Choose <span className="text-green-600">Swift Logistics?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience premium logistics service designed for speed, safety, and
          scale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
