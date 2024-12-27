import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/Navigation/TopNav';
import Dashboard from './pages/Dashboard';
import MenuManagement from './pages/MenuManagement';
import OrderManagement from './pages/OrderManagement';
import UserManagement from './pages/UserManagement';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <TopNav />
          <main className="mt-16 bg-gray-50 min-h-[calc(100vh-4rem)]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/menu" element={<MenuManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;