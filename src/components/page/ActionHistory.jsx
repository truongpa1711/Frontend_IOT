import React, { useEffect, useState } from "react";

const fakeData = [
  { id: 1, device: "den", action: 0, time: "2024-08-18T12:00:00Z" },
  { id: 2, device: "den", action: 1, time: "2024-08-18T13:00:00Z" },
  { id: 3, device: "den", action: 0, time: "2024-08-18T14:00:00Z" },
  { id: 4, device: "quat", action: 0, time: "2024-08-18T15:00:00Z" },
  { id: 5, device: "den", action: 0, time: "2024-08-18T16:00:00Z" },
  { id: 6, device: "quat", action: 1, time: "2024-08-18T12:00:00Z" },
  { id: 7, device: "den", action: 1, time: "2024-08-18T13:00:00Z" },
  { id: 8, device: "quat", action: 1, time: "2024-08-18T14:00:00Z" },
  { id: 9, device: "den", action: 1, time: "2024-08-18T15:00:00Z" },
  { id: 10, device: "den", action: 0, time: "2024-08-18T16:00:00Z" },
  { id: 11, device: "quat", action: 1, time: "2024-08-18T12:00:00Z" },
  { id: 12, device: "den", action: 1, time: "2024-08-18T13:00:00Z" },
  { id: 13, device: "den", action: 0, time: "2024-08-18T14:00:00Z" },
  { id: 14, device: "quat", action: 0, time: "2024-08-18T15:00:00Z" },
  { id: 15, device: "den", action: 1, time: "2024-08-18T16:00:00Z" },
];

const ActionHistory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

  useEffect(() => {
    setData(fakeData);
  }, []);

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const createPageRange = () => {
    const pageRange = [];
    const maxPagesToShow = 5;
    const start = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
    const end = Math.min(totalPages - 1, start + maxPagesToShow - 3);

    for (let i = start; i <= end; i++) {
      pageRange.push(i);
    }

    if (start > 2) {
      pageRange.unshift("..."); // Add ellipsis at the beginning
    }

    if (end < totalPages - 1) {
      pageRange.push("..."); // Add ellipsis at the end
    }

    return [1, ...pageRange, totalPages].filter(
      (value, index, self) => self.indexOf(value) === index
    );
  };

  const pageNumbers = createPageRange();

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Action History</h2>
      <input
        type="text"
        placeholder="Search..."
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
            {["ID", "Device", "Action", "Time"].map((header) => (
              <th key={header} className="py-2 px-4 text-left"onClick={() => handleSort(header.toLowerCase())}>
                {header}
                {sortConfig.key === header.toLowerCase() ? (
                  sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length ? (
            paginatedData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.device}</td>
                <td className="py-2 px-4">{item.action}</td>
                <td className="py-2 px-4">
                  {new Date(item.time).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="pageSize" className="text-gray-700">
          Page Size:
        </label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
          className="border rounded p-2"
        >
          {[1, 5, 10, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Previous
            </button>
          )}
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-4 py-2">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } hover:bg-blue-300`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default ActionHistory;
