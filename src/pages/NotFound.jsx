import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
      {/* Message Box */}
      <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-md mb-6 max-w-md">
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-lg">
          Sorry, we couldn’t find the page you were looking for.
        </p>
      </div>

      {/* Back Button */}
      <Link to="/">
        <button className="bg-[#8DD3BB] text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-[#76cbb0]">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
