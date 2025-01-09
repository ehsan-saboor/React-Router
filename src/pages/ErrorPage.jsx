import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Please check the URL or go back to the homepage.
      </p>
      <Link to="/">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
