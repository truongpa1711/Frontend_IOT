import React, { useState } from "react";
import Chart from "./Chart";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Dashboard = () => {
  const [isDevice1On, setIsDevice1On] = useState(false);
  const [isDevice2On, setIsDevice2On] = useState(false);
  const [data, setData] = useState({
    temperature: "25",
    humidity: "89",
    light: "500",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const bgtemperature = () => {
    const temperature = Math.max(0, Math.min(50, data.temperature));
    const percent = 100 - (temperature / 50) * 50;
    return `hsl(0, 100%, ${percent}%)`;
  };
  const bghumidity = () => {
    const humidity = Math.max(0, Math.min(100, data.humidity));
    const percent = 100 - (humidity / 100) * 50;
    return `hsl(240, 100%, ${percent}%)`;
  };
  const bglight = () => {
    const light = Math.max(0, Math.min(1000, data.light));
    const percent = 100 - (light / 1000) * 50;
    return `hsl(39, 100%, ${percent}%)`;
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          className="bg-white p-4 shadow rounded-lg"
          style={{ backgroundColor: bgtemperature() }}
        >
          <h2 className="text-lg font-semibold mb-4">Temperature</h2>
          <input
            type="number"
            name="temperature"
            onChange={handleChange}
            value={data.temperature}
            aria-label="Temperature input"
          />
        </div>
        <div
          className="bg-white p-4 shadow rounded-lg"
          style={{ backgroundColor: bghumidity() }}
        >
          <h2 className="text-lg font-semibold mb-4">Humidity</h2>
          <input
            type="number"
            name="humidity"
            onChange={handleChange}
            value={data.humidity}
            aria-label="Humidity input"
          />
        </div>
        <div
          className="bg-white p-4 shadow rounded-lg"
          style={{ backgroundColor: bglight() }}
        >
          <h2 className="text-lg font-semibold mb-4">Light Intensity</h2>
          <input
            type="number"
            name="light"
            onChange={handleChange}
            value={data.light}
            aria-label="Light intensity input"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart */}
        <div className="flex-1 bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Temperature Trend</h2>
          <Chart />
        </div>

        {/* Device Controls */}
        <div className="bg-white p-4 shadow rounded-lg w-full lg:w-64">
          <h2 className="text-lg font-semibold mb-4">Device Controls</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-1 rounded-lg flex items-center justify-between">
              <h3 className="text-md font-semibold mb-2">Device 1</h3>
              <button
                onClick={() => setIsDevice1On(!isDevice1On)}
                aria-label={`Turn ${isDevice1On ? "off" : "on"} Device 1`}
              >
                {isDevice1On ? (
                  <FaToggleOn className="text-green-500 text-5xl" />
                ) : (
                  <FaToggleOff className="text-gray-700 text-5xl" />
                )}
              </button>
            </div>

            <div className="bg-gray-100 p-1 rounded-lg flex items-center justify-between">
              <h3 className="text-md font-semibold mb-2">Device 2</h3>
              <button
                onClick={() => setIsDevice2On(!isDevice2On)}
                aria-label={`Turn ${isDevice2On ? "off" : "on"} Device 2`}
              >
                {isDevice2On ? (
                  <FaToggleOn className="text-green-500 text-5xl" />
                ) : (
                  <FaToggleOff className="text-gray-700 text-5xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
