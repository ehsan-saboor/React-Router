import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        Welcome to Our Website!
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        This is the home page where you can find exciting content, learn new
        things, and explore all the features we offer. We aim to bring you the
        best experience possible. Stay tuned for more amazing updates!
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
