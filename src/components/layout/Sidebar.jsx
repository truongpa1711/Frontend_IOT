import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCogs, FaDatabase, FaHistory, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-gray-700' : '';

  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${isActive('/')}`}>
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/data-sensor" className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${isActive('/data-sensor')}`}>
              <FaDatabase />
              <span>Data Sensor</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/action-history" className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${isActive('/action-history')}`}>
              <FaHistory />
              <span>Action History</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${isActive('/profile')}`}>
              <FaUser />
              <span>Profile</span>
            </Link>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaCogs />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
