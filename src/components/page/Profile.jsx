import React from "react";
import avatar from '../assets/avatar.jpg';

const Profile = () => {
  // Example data
  const user = {
    name: "Phạm Anh Trường",
    studentId: "B21DCCN741",
    className: "D21CQCN09-B",
    group: "IOT-Nhóm 5",
    github: "https://github.com/truongpa1711/Frontend_IOT.git",
    docapi: "",
    avatarUrl: avatar
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 flex flex-col items-center justify-center lg:justify-start transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          src={user.avatarUrl}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md mb-4 lg:mb-0 transition-transform transform hover:scale-110"
        />
        <h1 className="text-2xl font-bold mt-4 transition-colors hover:text-blue-600">{user.name}</h1>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-2/3 p-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 w-1/3">Student ID:</span>
            <span className="text-gray-800">{user.studentId}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 w-1/3">Class:</span>
            <span className="text-gray-800">{user.className}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 w-1/3">Group:</span>
            <span className="text-gray-800">{user.group}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-600 w-1/3">Github:</span>
            <span className="text-gray-800"><a href={user.github} target="_blank" rel="noopener noreferrer">{user.github}</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
