import React from 'react';
import Stats from '../components/Dashboard/Stats';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <Stats />
    </div>
  );
};

export default Dashboard;