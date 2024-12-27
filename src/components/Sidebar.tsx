import React from 'react';
import { LayoutDashboard, Menu, ShoppingBag, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Menu, label: 'Menu Management', path: '/menu' },
    { icon: ShoppingBag, label: 'Orders', path: '/orders' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 border-r border-gray-100 shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-800">Restaurant Manager</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-xl mb-2 transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-600' : ''}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;