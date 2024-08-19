import React, { useEffect, useState } from 'react';
const fakeData = [
  { id: 1, device: "den", action: 0, time: '2024-08-18T12:00:00Z' },
  { id: 2, device: "den", action: 1, time: '2024-08-18T13:00:00Z' },
  { id: 3, device: "den", action: 0, time: '2024-08-18T14:00:00Z' },
  { id: 4, device: "den", action: 0, time: '2024-08-18T15:00:00Z' },
  { id: 5, device: "den", action: 0, time: '2024-08-18T16:00:00Z' },
  { id: 6, device: "den", action: 1, time: '2024-08-18T12:00:00Z' },
  { id: 7, device: "den", action: 1, time: '2024-08-18T13:00:00Z' },
  { id: 8, device: "den", action: 1, time: '2024-08-18T14:00:00Z' },
  { id: 9, device: "den", action: 1, time: '2024-08-18T15:00:00Z' },
];
const ActionHistory = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(fakeData);
  },[])
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Action History</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b">
            {['ID', 'Device', 'Action', 'Time'].map((header) => (
              <th
                key={header}
                className="py-2 px-4 text-left cursor-pointer"
              >
                {header}              
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.device}</td>
              <td className="py-2 px-4">{item.action}</td>
              <td className="py-2 px-4">{new Date(item.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ActionHistory;
