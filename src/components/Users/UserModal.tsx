import React from 'react';
import { Modal, Form } from 'antd';
import type { User } from '../../types/user';
import UserForm from './UserForm';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: Omit<User, 'id' | 'createdAt'>) => void;
  editUser?: User | null;
}

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  editUser,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title={editUser ? 'Edit User' : 'Add New User'}
      open={isOpen}
      onCancel={onClose}
      onOk={handleSubmit}
      okText={editUser ? 'Update' : 'Add'}
      width={500}
      okButtonProps={{
        className: 'bg-blue-600 hover:bg-blue-700',
      }}
    >
      <UserForm
        initialValues={editUser}
        form={form}
      />
    </Modal>
  );
};

export default UserModal;