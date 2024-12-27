import React from 'react';
import UserProfile from './UserProfile';
import { Bell, Search } from 'lucide-react';

const TopNav = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center flex-1">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <UserProfile />
      </div>
    </div>
  );
};

export default TopNav;