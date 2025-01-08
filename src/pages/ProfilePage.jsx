import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Ehsan", email: "abc@example.com" },
  { id: 2, name: "Saboor", email: "abc2@example.com" },
];

function ProfilePage() {
  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return <h1>User not found</h1>;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to your Profile.</p>
      <div>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
      </div>
    </div>
  );
}

export default ProfilePage;