import type { MenuItem, Category } from '../../types';

export interface MenuState {
  items: MenuItem[];
  categories: Category[];
  searchTerm: string;
  selectedCategory: string | null;
  isMenuModalOpen: boolean;
  isCategoryModalOpen: boolean;
  editingItem: MenuItem | null;
  editingCategory: Category | null;
}

export interface MenuStore extends MenuState {
  // Menu Items
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Omit<MenuItem, 'id'>) => void;
  deleteMenuItem: (id: string) => void;
  setEditingItem: (item: MenuItem | null) => void;
  
  // Categories
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Omit<Category, 'id'>) => void;
  deleteCategory: (id: string) => void;
  setEditingCategory: (category: Category | null) => void;
  
  // UI State
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  toggleMenuModal: (isOpen: boolean) => void;
  toggleCategoryModal: (isOpen: boolean) => void;
}