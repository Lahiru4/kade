import React from 'react';
import { Modal } from 'antd';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message
}) => {
  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="w-5 h-5" />
          <span>{title}</span>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      onOk={onConfirm}
      okText="Delete"
      okButtonProps={{ 
        className: 'bg-red-600 hover:bg-red-700',
        danger: true 
      }}
    >
      <p className="text-gray-600">{message}</p>
    </Modal>
  );
};

export default DeleteConfirmModal;