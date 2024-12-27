import type { MenuItem } from '../types';

export const filterItemsByCategory = (
  items: MenuItem[],
  categoryId: string | null,
  categories: { id: string; name: string }[]
): MenuItem[] => {
  if (!categoryId) return items;
  
  const category = categories.find(c => c.id === categoryId);
  if (!category) return items;
  
  return items.filter(item => item.category === category.name);
};