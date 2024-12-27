import type { User } from '../../types/user';

export interface UsersState {
  users: User[];
  searchTerm: string;
  isUserModalOpen: boolean;
  editingUser: User | null;
}

export interface UsersStore extends UsersState {
  // User Operations
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, user: Partial<Omit<User, 'id'>>) => void;
  deleteUser: (id: string) => void;
  setEditingUser: (user: User | null) => void;
  
  // UI State
  setSearchTerm: (term: string) => void;
  toggleUserModal: (isOpen: boolean) => void;
}