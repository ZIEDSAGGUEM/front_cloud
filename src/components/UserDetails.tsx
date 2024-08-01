import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  dateOfBirth: string;
  job: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user details!", error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <div className="border p-4 rounded">
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
        <p>
          <strong>DateOfBirth:</strong> {user.dateOfBirth}
        </p>
        <p>
          <strong>Job:</strong> {user.job}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
