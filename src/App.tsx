import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import UserDetails from "./components/UserDetails";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">User Management</h1>
          <div>
            <Link className="mx-2 text-blue-500" to="/">
              Home
            </Link>
            <Link className="mx-2 text-blue-500" to="/add">
              Add User
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
