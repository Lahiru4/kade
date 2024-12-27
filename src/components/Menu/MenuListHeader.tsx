import React from 'react';
import SearchBar from './SearchBar';
import { ListPlus, PlusCircle } from 'lucide-react';

interface MenuListHeaderProps {
  onAddItem: () => void;
  onAddCategory: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const MenuListHeader: React.FC<MenuListHeaderProps> = ({
  onAddItem,
  onAddCategory,
  searchValue,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="w-full sm:w-64">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onAddCategory}
            className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-xl 
                     hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <ListPlus className="w-5 h-5" />
            Add Category
          </button>
          <button 
            onClick={onAddItem}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl 
                     hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            Add Menu Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuListHeader;