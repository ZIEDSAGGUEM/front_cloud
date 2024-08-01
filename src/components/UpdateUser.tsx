import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  dateOfBirth: string;
  job: string;
}

const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
    job: "",
  });

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .put(`${import.meta.env.VITE_API_URL}/update/${id}`, user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the user!", error);
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">dateOfBirth</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={user.dateOfBirth}
            onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">job</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={user.job}
            onChange={(e) => setUser({ ...user, job: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Validate
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
