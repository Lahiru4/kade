import type { MenuItem, Category } from '../types';

export const searchMenuItems = (items: MenuItem[], searchTerm: string): MenuItem[] => {
  const term = searchTerm.toLowerCase().trim();
  
  if (!term) return items;
  
  return items.filter(item => 
    item.name.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term)
  );
};

export const searchCategories = (categories: Category[], searchTerm: string): Category[] => {
  const term = searchTerm.toLowerCase().trim();
  
  if (!term) return categories;
  
  return categories.filter(category => 
    category.name.toLowerCase().includes(term) ||
    (category.description?.toLowerCase() || '').includes(term)
  );
};