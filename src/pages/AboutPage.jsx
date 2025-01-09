import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        We are a passionate team dedicated to providing quality content and
        innovative solutions. Our mission is to empower individuals and businesses
        through the use of technology and creativity. With a focus on user experience
        and customer satisfaction, we aim to deliver exceptional products and services
        that meet the needs of our diverse audience.
      </p>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Our vision is to be a leader in the industry by continuously evolving, staying
        ahead of trends, and creating meaningful connections with our community.
        Join us on this exciting journey and be a part of something incredible!
      </p>
    </div>
  );
}

export default AboutPage;
