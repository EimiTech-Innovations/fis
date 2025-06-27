import { useState } from 'react';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar } from 'recharts';

// Sample data
const serviceData = [
  { name: '10/10', 'Hair Cut': 45000, 'Massage': 25000, 'Others': 19745 },
  { name: '20/10', 'Hair Cut': 50000, 'Massage': 28000, 'Others': 15456 },
  { name: '30/10', 'Hair Cut': 55000, 'Massage': 31000, 'Others': 15234 },
  { name: '10/11', 'Hair Cut': 60000, 'Massage': 35000, 'Others': 15987 },
  { name: '20/11', 'Hair Cut': 65000, 'Massage': 39000, 'Others': 18456 },
  { name: '30/11', 'Hair Cut': 70000, 'Massage': 42000, 'Others': 22111 },
  { name: '10/12', 'Hair Cut': 75000, 'Massage': 45000, 'Others': 25678 }
];

const MainDashboard = () => {
  const [activeView, setActiveView] = useState('billing');

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  return (
    <div className="w-full max-w-full mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${activeView === 'billing' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleViewChange('billing')}
          >
            Billing
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeView === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleViewChange('services')}
          >
            Services
          </button>
        </div>
      </div>
      {activeView === 'billing' && (
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-bold mb-2">Total Income</div>
            <div className="text-4xl font-bold">$129,230</div>
          </div>
          <div className="col-span-1 bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-bold mb-2">Total Sales</div>
            <div className="text-4xl font-bold">2,456</div>
          </div>
          <div className="col-span-1 bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-bold mb-2">Total Expenses</div>
            <div className="text-4xl font-bold">$5,354</div>
          </div>
          <div className="col-span-3 bg-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-bold mb-4">Sales Revenue</div>
            <LineChart width={1200} height={400} data={serviceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Hair Cut" stroke="#8884d8" />
              <Line type="monotone" dataKey="Massage" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Others" stroke="#ffc658" />
            </LineChart>
          </div>
        </div>
      )}
      {activeView === 'services' && (
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 bg-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-bold mb-4">Services Revenue</div>
            <BarChart width={1200} height={400} data={serviceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Hair Cut" fill="#8884d8" />
              <Bar dataKey="Massage" fill="#82ca9d" />
              <Bar dataKey="Others" fill="#ffc658" />
            </BarChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDashboard;