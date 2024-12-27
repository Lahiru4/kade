import React, { useState } from 'react';
import { ChevronDown, LogOut, Settings, User } from 'lucide-react';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          alt="User"
          className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div className="text-left hidden sm:block">
          <div className="text-sm font-semibold text-gray-700">John Doe</div>
          <div className="text-xs text-gray-500">Restaurant Manager</div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border py-1">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <User className="w-4 h-4" />
            Profile
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <div className="border-t my-1" />
          <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;