import React, { useState } from "react";
import Chart from "./Chart";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Dashboard = () => {
  const [isDevice1On, setIsDevice1On] = useState(false);
  const [isDevice2On, setIsDevice2On] = useState(false);
  const [isDevice3On, setIsDevice3On] = useState(false);

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
    return `hsl(60, 100%, ${percent}%)`;
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
                  <div className="flex items-center justify-between gap-9">
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 72 72"
                      id="emoji"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="color">
                        <path
                          fill="#92d3f5"
                          stroke="none"
                          d="M31.3882,26.7177c0,0,9.2367-1.8188,8.4221-9.1964c-1.3538-12.261-1.4678-10.4237-1.4678-10.4237 l-5.5293,1.0104C32.8133,8.1081,35.9998,21.7018,31.3882,26.7177z"
                        />
                        <path
                          fill="#92d3f5"
                          stroke="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M34.5417,7.0359c-8.1462,0-14.75,7.496-14.75,16.7427v16.388h29.5"
                        />
                        <rect
                          x="26.8333"
                          y="44.5"
                          width="4"
                          height="22.095"
                          fill="#d0cfce"
                          stroke="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <rect
                          x="41.3333"
                          y="44.5"
                          width="4"
                          height="16.4792"
                          fill="#d0cfce"
                          stroke="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <path
                          fill="#61b2e4"
                          stroke="none"
                          d="M34.5417,7.5625c0,0,15.3232,0.5495,15.9047,13.875c0.9664,22.1458,0.0665,18.9191,0.0665,18.9191 l-9.3254-0.19C41.1875,40.1667,42.6247,15.125,34.5417,7.5625z"
                        />
                        <rect
                          x="43.3333"
                          y="40.7917"
                          width="11.8333"
                          height="3.0833"
                          fill="#61b2e4"
                          stroke="none"
                        />
                        <rect
                          x="16.3353"
                          y="40.7917"
                          width="26.998"
                          height="3.0833"
                          fill="#92d3f5"
                          stroke="none"
                        />
                      </g>
                      <g id="hair" />
                      <g id="skin" />
                      <g id="skin-shadow" />
                      <g id="line">
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M34.5417,7.0359c-8.1462,0-14.75,7.496-14.75,16.7427v16.388h29.5"
                        />
                        <rect
                          x="26.8333"
                          y="44.5"
                          width="4"
                          height="22.095"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <rect
                          x="41.3333"
                          y="44.5"
                          width="4"
                          height="16.4792"
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M25.8125,19.0625"
                        />
                        <path
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M35.2497,7.0359c8.1462,0,14.75,7.496,14.75,16.7427v7.388"
                        />
                        <polygon
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          points="16,44.5 45.5309,44.5 45.9063,44.5 56,44.5 56,40.1667 45.9063,40.1667 45.4999,40.1667 16,40.1667"
                        />
                      </g>
                    </svg>
                    <FaToggleOn className="text-green-500 text-5xl" />
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-9">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000"
                        d="M256 20.5c-45.5 0-74.137 18.276-92.676 44.23C144.784 90.685 137 125 137 155.5v151h238v-151c0-30.5-7.785-64.815-26.324-90.77C330.136 38.776 301.5 20.5 256 20.5zm8.756 11.885c1.285 0 2.554.018 3.812.047A184 235.5 0 0 0 145.91 160.336c1.113-28.645 9.045-59.746 26.17-83.72 18.54-25.955 47.176-44.23 92.676-44.23zM105 324.5v46h302v-46H105zm78 64v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18zm128 0v39h-7v32h7v32h18v-32h7v-32h-7v-39h-18z"
                      />
                    </svg>
                    <FaToggleOff className="text-gray-700 text-5xl" />
                  </div>
                )}
              </button>
            </div>

            <div className="bg-gray-100 p-1 rounded-lg flex items-center justify-between">
              <h3 className="text-md font-semibold mb-2">Device 2</h3>
              <button
                onClick={() => setIsDevice2On(!isDevice2On)}
                aria-label={`Turn ${isDevice2On ? "off" : "on"} Device 2`}
                className="flex items-center justify-between gap-9"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 ml-2"
                  style={{
                    animation: isDevice2On
                      ? "spin 0.2s linear infinite"
                      : "none",
                  }}
                >
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,11a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C17,2,17.1,5.57,14.73,6.75a3.36,3.36,0,0,0-1.62,2.47,3.17,3.17,0,0,1,1.23.91C18,8.13,22,8.92,22,12.5c0,4.5-3.58,4.6-4.75,2.23a3.44,3.44,0,0,0-2.5-1.62,3.24,3.24,0,0,1-.91,1.23c2,3.69,1.2,7.66-2.38,7.66C7,22,6.89,18.42,9.26,17.24a3.46,3.46,0,0,0,1.62-2.45,3,3,0,0,1-1.25-.92C5.94,15.85,2,15.07,2,11.5,2,7,5.54,6.89,6.72,9.26A3.39,3.39,0,0,0,9.2,10.87a2.91,2.91,0,0,1,.92-1.22C8.13,6,8.92,2,12.48,2Z" />
                </svg>
                {isDevice2On ? (
                  <FaToggleOn className="text-green-500 text-5xl" />
                ) : (
                  <FaToggleOff className="text-gray-700 text-5xl" />
                )}
              </button>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg flex items-center justify-between">
              <h3 className="text-md font-semibold mb-2">Device 3</h3>
              <button
                onClick={() => setIsDevice3On(!isDevice3On)}
                aria-label={`Turn ${isDevice2On ? "off" : "on"} Device 2`}
                className="flex items-center justify-between gap-9"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m0 0h32v32h-32z" />

                    <path
                      d="m16 17c.5522847 0 1 .4477153 1 1v10c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-10c0-.5522847.4477153-1 1-1zm6 0c.5522847 0 1 .4477153 1 1 0 3.5960656 1.7367768 6.8992385 4.6073687 8.9529161.4491716.3213461.5527946.9459741.2314484 1.3951457-.3213461.4491716-.9459741.5527946-1.3951457.2314485-3.3900202-2.4252868-5.4436714-6.3311225-5.4436714-10.5795103 0-.5522847.4477153-1 1-1zm-12 0c.5522847 0 1 .4477153 1 1 0 4.2435001-2.04890255 8.1453882-5.43243138 10.5714599-.44883053.3218223-1.0735681.2188618-1.3953904-.2299687-.32182231-.4488306-.2188618-1.0735681.22996874-1.3953904 2.86509777-2.0543441 4.59785304-5.3541679 4.59785304-8.9461008 0-.5522847.44771525-1 1-1zm17-15c2.7614237 0 5 2.23857625 5 5v4c0 2.7614237-2.2385763 5-5 5h-22c-2.76142375 0-5-2.2385763-5-5v-4c0-2.76142375 2.23857625-5 5-5zm0 2h-22c-1.65685425 0-3 1.34314575-3 3v4c0 1.6568542 1.34314575 3 3 3h22c1.6568542 0 3-1.3431458 3-3v-4c0-1.65685425-1.3431458-3-3-3zm0 6c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-22c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z"
                      fill="#000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                {isDevice3On ? (
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
