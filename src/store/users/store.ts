import { create } from 'zustand';
import type { UsersState, UsersStore } from './types';

const initialState: UsersState = {
  users: [
    {
      id: '1',
      email: 'stock@example.com',
      name: 'John Stock',
      role: 'stock_manager',
      createdAt: new Date('2024-01-01'),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
  ],
  searchTerm: '',
  isUserModalOpen: false,
  editingUser: null,
};

export const useUsersStore = create<UsersStore>((set) => ({
  ...initialState,

  addUser: (user) => set((state) => ({
    users: [...state.users, {
      ...user,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }],
  })),

  updateUser: (id, user) => set((state) => ({
    users: state.users.map((existing) =>
      existing.id === id ? { ...existing, ...user } : existing
    ),
  })),

  deleteUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),

  setEditingUser: (user) => set({ editingUser: user }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  toggleUserModal: (isOpen) => set({ isUserModalOpen: isOpen }),
}));