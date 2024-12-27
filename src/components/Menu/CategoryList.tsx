import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryItem from './CategoryItem';
import { searchCategories } from '../../utils/searchUtils';
import type { Category } from '../../types';

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCategories = searchCategories(categories, searchTerm);

  return (
    <div className="space-y-4">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search categories..."
      />
      
      <div className="space-y-2 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2 custom-scrollbar">
        {filteredCategories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;