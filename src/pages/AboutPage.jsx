import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-teal-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        We are a passionate team dedicated to providing quality content and innovative solutions. Our mission is to empower individuals and businesses through the use of technology and creativity.
      </p>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Join us on this exciting journey and be a part of something incredible!
      </p>
    </div>
  );
}

export default AboutPage;