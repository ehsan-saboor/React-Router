import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Ehsan", email: "abc@example.com" },
  { id: 2, name: "Saboor", email: "abc2@example.com" },
];

function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return <h1 className="text-center text-red-600 text-2xl">User not found</h1>;

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Profile Page</h1>
      <p className="text-lg text-gray-700 mb-8">Welcome to your Profile.</p>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Information</h2>
        <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Email:</strong> {user.email}</p>
      </div>

      <button 
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ProfilePage;
