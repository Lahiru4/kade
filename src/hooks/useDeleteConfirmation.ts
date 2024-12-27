import { useState } from 'react';

export const useDeleteConfirmation = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setDeletingId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setIsDeleteModalOpen(false);
    setDeletingId(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeletingId(null);
  };

  return {
    isDeleteModalOpen,
    deletingId,
    handleDelete,
    confirmDelete,
    cancelDelete
  };
};