import React from "react";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <Link to="/profile">
        <img src={avatar} alt="Logo" className="w-10 h-10 rounded-full border-2" />
      </Link>

      <h1 className="text-xl">IoT Dashboard</h1>
      <div>
        <button className="bg-gray-800 p-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;
