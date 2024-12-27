import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Category } from '../../types';

interface CategoryItemProps {
  category: Category;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
      <div>
        <h3 className="font-medium text-gray-800">{category.name}</h3>
        {category.description && (
          <p className="text-sm text-gray-500">{category.description}</p>
        )}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(category)}
          className="p-1.5 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(category.id)}
          className="p-1.5 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;