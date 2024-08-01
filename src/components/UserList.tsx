import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.VITE_REACT_APP_API_KEY}/`)
      .then((response) => {
        setUsers(response.data.results);
        console.log(users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
        setLoading(false);
      });
  }, []);

  const deleteUser = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:8787/delete/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.error("There was an error deleting the user!", error);
        });
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">User List</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600">ID</th>
                <th className="py-3 px-6 text-left text-gray-600">Name</th>
                <th className="py-3 px-6 text-left text-gray-600">Email</th>
                <th className="py-3 px-6 text-left text-gray-600">Address</th>
                <th className="py-3 px-6 text-left text-gray-600">
                  phoneNumber
                </th>
                <th className="py-3 px-6 text-left text-gray-600">
                  dateOfBirth
                </th>
                <th className="py-3 px-6 text-left text-gray-600">job</th>
                <th className="py-3 px-6 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6 text-gray-700">{user.id}</td>
                  <td className="py-3 px-6 text-gray-700">{user.name}</td>
                  <td className="py-3 px-6 text-gray-700">{user.email}</td>
                  <td className="py-3 px-6 text-gray-700">{user.address}</td>
                  <td className="py-3 px-6 text-gray-700">
                    {user.phoneNumber}
                  </td>
                  <td className="py-3 px-6 text-gray-700">
                    {user.dateOfBirth}
                  </td>
                  <td className="py-3 px-6 text-gray-700">{user.job}</td>
                  <td className="py-3 px-6">
                    <div className="flex space-x-2">
                      <Link
                        to={`/user/${user.id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View
                      </Link>
                      <Link
                        to={`/update/${user.id}`}
                        className="text-green-500 hover:text-green-700"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
