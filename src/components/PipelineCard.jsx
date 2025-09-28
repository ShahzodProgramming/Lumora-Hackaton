import React from "react";

const PipelineCard = ({
  startup_name,
  owner_name,
  users_count,
  description,
  created_at,
  is_deleted,
}) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow-md bg-white transition 
        ${is_deleted ? "opacity-50 line-through" : "hover:shadow-lg"}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-900">{startup_name}</h2>
        {is_deleted && (
          <span className="text-sm text-red-600 font-semibold bg-red-100 px-2 py-1 rounded">
            Deleted
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-1">
        Owner: <span className="font-medium">{owner_name}</span>
      </p>

      <div className="flex items-center text-gray-700 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a4 4 0 00-5-3.87M9 20h6M5 20h2a4 4 0 014-4h2a4 4 0 014 4h2"
          />
        </svg>
        <span>{users_count} users</span>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

      <p className="text-sm text-gray-500 mb-4">
        Created: {new Date(created_at).toLocaleDateString()}
      </p>

      {/* Invest Button */}
      <button
        disabled={is_deleted}
        className={`w-full py-2 rounded text-white font-semibold transition
          ${
            is_deleted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }
        `}
        onClick={() => alert(`Investing in ${startup_name}!`)} // Example handler
      >
        Invest
      </button>
    </div>
  );
};

export default PipelineCard;
