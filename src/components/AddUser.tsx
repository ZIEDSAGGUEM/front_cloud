import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [job, setJob] = useState("");
  //phoneNumber, dateOfBirth, status
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/add`, {
        name,
        email,
        address,
        phoneNumber,
        dateOfBirth,
        job,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">DateOfBirth</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">job</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
