
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <img
        src={`https://github.com/truong.png`}
        alt="Logo"
        className="w-10 h-10 rounded-full"
      />
      <h1 className="text-xl">IoT Dashboard</h1>
      <div>
        <button className="bg-gray-800 p-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;
