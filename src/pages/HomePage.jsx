import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-teal-600 mb-6">Welcome to Ehsan Blog!</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Discover insightful articles, share your thoughts, and connect with a community of like-minded individuals.
      </p>
      <Link to="/create-post">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-colors">
          Start Writing
        </button>
      </Link>
    </div>
  );
}

export default HomePage;