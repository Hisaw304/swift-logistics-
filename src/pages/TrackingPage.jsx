// src/pages/TrackingPage.jsx

import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import productImage from "../assets/img_4775.png";
import { Link } from "react-router-dom"; // make sure this is at the top of your file
const trackingData = {
  "15b6fc6f-327a-4ec4-896f-486349e85a5d": {
    status: "Shipped",
    deliveryDate: "Arriving Monday, July 29",
    product: "Bluetooth Headphones",
    quantity: 1,
    name: "John Doe",
    address: "742 Evergreen Terrace, Springfield, IL 62704, USA",
  },
  "83d4ca15-0f35-48f5-b7a3-1ea210004f9m": {
    status: "Delivered",
    deliveryDate: "Delivered Friday, July 19",
    product: "Running Shoes - Size 10",
    quantity: 2,
    name: "Emily Carter",
    address: "123 Main Street, Austin, TX 73301, USA",
  },
  "d40217f5-7a10-4b15-b9a3-320b67d0912a": {
    status: "On Hold",
    deliveryDate: "Pending",
    product: "Smartwatch",
    quantity: 1,
    name: "Michael Smith",
    address: "456 Oak Drive, San Diego, CA 92103, USA",
  },
};

// Status progress levels
const statusProgress = {
  "On Hold": 25,
  Shipped: 60,
  Delivered: 100,
};

const TrackingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Restrict direct access
  useEffect(() => {
    if (!location.state?.fromHome) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const data = trackingData[id];
  const progress = data ? statusProgress[data.status] : 0;

  return (
    <div className="max-w-3xl mx-auto mt-5 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Tracking ID: {id}</h2>

      {data ? (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={productImage}
              alt="Product"
              className="w-40 h-40 object-cover rounded shadow"
            />
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-800">
                {data.product}
              </p>
              <p className="text-gray-600">Quantity: {data.quantity}</p>
              <p className="text-gray-600">{data.deliveryDate}</p>
              <p
                className={`mt-2 font-medium ${
                  data.status === "Delivered"
                    ? "text-green-600"
                    : data.status === "Shipped"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                Status: {data.status}
              </p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="border-t pt-4 text-left">
            <p className="font-semibold text-gray-700">Recipient:</p>
            <p>{data.name}</p>
            <p className="text-gray-600">{data.address}</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <p className="mb-2 font-medium">Delivery Progress:</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ease-out ${
                  progress === 100
                    ? "bg-green-500"
                    : progress >= 60
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1 text-gray-500">{progress}% complete</p>
          </div>

          {/* Status Note */}
          <div className="text-center mt-6 font-medium text-lg">
            {data.status === "Delivered" && (
              <span className="text-green-700">
                ✅ Your order has been delivered successfully.
              </span>
            )}
            {data.status === "Shipped" && (
              <span className="text-blue-700">
                🚚 Your order is on the way.
              </span>
            )}
            {data.status === "On Hold" && (
           <span className="text-yellow-700">
  ⚠️ Your order is on hold.{" "}
  <Link
    to="/contact"
    className="underline text-blue-700 hover:text-blue-900"
  >
    Contact support
  </Link>{" "}
  for assistance.
</span>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600 text-lg font-semibold">
          ❌ No tracking data found for this ID.
        </p>
      )}
    </div>
  );
};

export default TrackingPage;
