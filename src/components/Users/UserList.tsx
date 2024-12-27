import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { User } from '../../types/user';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  const getRoleBadgeColor = (role: User['role']) => {
    const colors = {
      stock_manager: 'bg-green-100 text-green-800',
      social_media_manager: 'bg-blue-100 text-blue-800',
      sales_manager: 'bg-purple-100 text-purple-800',
    };
    return colors[role];
  };

  const formatRole = (role: User['role']) => {
    return role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(user.role)}`}>
                {formatRole(user.role)}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(user)}
                  className="p-1.5 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="p-1.5 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;