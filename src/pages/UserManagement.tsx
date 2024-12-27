import React from 'react';
import { UserPlus } from 'lucide-react';
import UserList from '../components/Users/UserList';
import UserModal from '../components/Users/UserModal';
import DeleteConfirmModal from '../components/Menu/DeleteConfirmModal';
import { useUsersStore } from '../store/users/store';
import { useDeleteConfirmation } from '../hooks/useDeleteConfirmation';

const UserManagement = () => {
  const store = useUsersStore();
  
  const {
    isDeleteModalOpen,
    deletingId,
    handleDelete,
    confirmDelete,
    cancelDelete,
  } = useDeleteConfirmation();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <button
          onClick={() => store.toggleUserModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl 
                   hover:bg-blue-700 transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          Add User
        </button>
      </div>

      <UserList
        users={store.users}
        onEdit={(user) => {
          store.setEditingUser(user);
          store.toggleUserModal(true);
        }}
        onDelete={handleDelete}
      />

      <UserModal
        isOpen={store.isUserModalOpen}
        onClose={() => {
          store.toggleUserModal(false);
          store.setEditingUser(null);
        }}
        onSubmit={(user) => {
          if (store.editingUser) {
            store.updateUser(store.editingUser.id, user);
          } else {
            store.addUser(user);
          }
          store.toggleUserModal(false);
          store.setEditingUser(null);
        }}
        editUser={store.editingUser}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDelete}
        onConfirm={() => {
          if (deletingId) {
            store.deleteUser(deletingId);
            confirmDelete();
          }
        }}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
      />
    </div>
  );
};

export default UserManagement;