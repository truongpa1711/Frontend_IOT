import React, { useState, useEffect } from 'react';

const fakeData = [
  { id: 1, temperature: 22.5, humidity: 60, light: 300, time: '2024-08-18T12:00:00Z' },
  { id: 2, temperature: 24.0, humidity: 55, light: 350, time: '2024-08-18T13:00:00Z' },
  { id: 3, temperature: 21.0, humidity: 70, light: 280, time: '2024-08-18T14:00:00Z' },
  { id: 4, temperature: 23.0, humidity: 65, light: 320, time: '2024-08-18T15:00:00Z' },
  { id: 5, temperature: 25.0, humidity: 50, light: 330, time: '2024-08-18T16:00:00Z' },
  { id: 6, temperature: 22.5, humidity: 60, light: 300, time: '2024-08-18T12:00:00Z' },
  { id: 7, temperature: 24.0, humidity: 55, light: 350, time: '2024-08-18T13:00:00Z' },
  { id: 8, temperature: 21.0, humidity: 70, light: 280, time: '2024-08-18T14:00:00Z' },
  { id: 9, temperature: 23.0, humidity: 65, light: 320, time: '2024-08-18T15:00:00Z' },
  { id: 10, temperature: 25.0, humidity: 50, light: 330, time: '2024-08-18T16:00:00Z' },
];

const DataSensor = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  const [searchQuery, setSearchQuery] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    setData(fakeData);
  }, []);

  useEffect(() => {
    const filtered = data
      .filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .filter(item => {
        const itemTime = new Date(item.time);
        const start = startTime ? new Date(startTime) : null;
        const end = endTime ? new Date(endTime) : null;
        return (
          (!start || itemTime >= start) &&
          (!end || itemTime <= end)
        );
      });
    setFilteredData(filtered);
  }, [searchQuery, data, startTime, endTime]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    setCurrentPage(1);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Data Sensor</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 border rounded"
      />
      <div className="mb-4">
        <label className="block mb-1">Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={handleStartTimeChange}
          className="mb-2 p-2 border rounded"
        />
        <label className="block mb-1">End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={handleEndTimeChange}
          className="mb-2 p-2 border rounded"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b">
            {['ID', 'Temperature', 'Humidity', 'Light', 'Time'].map((header) => (
              <th
                key={header}
                onClick={() => handleSort(header.toLowerCase())}
                className="py-2 px-4 text-left cursor-pointer"
              >
                {header}
                {sortConfig.key === header.toLowerCase() ? (
                  sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.temperature} °C</td>
              <td className="py-2 px-4">{item.humidity} %</td>
              <td className="py-2 px-4">{item.light} lux</td>
              <td className="py-2 px-4">{new Date(item.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataSensor;
