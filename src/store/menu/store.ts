import { create } from 'zustand';
import type { MenuState, MenuStore } from './types';
import { generateBarcode } from '../../utils/barcodeUtils';

const initialState: MenuState = {
  items: [
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      available: true,
      barcode: 'MENU00000001'
    },
  ],
  categories: [
    {
      id: '1',
      name: 'Pizza',
      description: 'Traditional Italian pizzas'
    },
    {
      id: '2',
      name: 'Pasta',
      description: 'Fresh homemade pasta dishes'
    }
  ],
  searchTerm: '',
  selectedCategory: null,
  isMenuModalOpen: false,
  isCategoryModalOpen: false,
  editingItem: null,
  editingCategory: null,
};

export const useMenuStore = create<MenuStore>((set) => ({
  ...initialState,

  // Menu Items
  addMenuItem: (item) => {
    const id = crypto.randomUUID();
    const barcode = generateBarcode(id);
    set((state) => ({
      items: [...state.items, { ...item, id, barcode }]
    }));
  },

  updateMenuItem: (id, item) => set((state) => ({
    items: state.items.map((existing) => 
      existing.id === id ? { ...item, id, barcode: existing.barcode } : existing
    )
  })),

  deleteMenuItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id)
  })),

  setEditingItem: (item) => set({ editingItem: item }),

  // Categories
  addCategory: (category) => set((state) => ({
    categories: [...state.categories, { ...category, id: crypto.randomUUID() }]
  })),

  updateCategory: (id, category) => set((state) => ({
    categories: state.categories.map((existing) =>
      existing.id === id ? { ...category, id } : existing
    )
  })),

  deleteCategory: (id) => set((state) => ({
    categories: state.categories.filter((category) => category.id !== id)
  })),

  setEditingCategory: (category) => set({ editingCategory: category }),

  // UI State
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  toggleMenuModal: (isOpen) => set({ isMenuModalOpen: isOpen }),
  toggleCategoryModal: (isOpen) => set({ isCategoryModalOpen: isOpen }),
}));