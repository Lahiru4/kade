import React from 'react';
import { Modal, Form } from 'antd';
import type { MenuItem, Category } from '../../types';
import MenuForm from './MenuForm';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: Omit<MenuItem, 'id'>) => void;
  editItem?: MenuItem | null;
  categories: Category[];
}

const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  editItem,
  categories,
}) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = React.useState(editItem?.image || '');

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit({
        ...values,
        image: imageUrl,
      });
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title={editItem ? 'Edit Menu Item' : 'Add New Item'}
      open={isOpen}
      onCancel={onClose}
      onOk={handleSubmit}
      okText={editItem ? 'Update Item' : 'Add Item'}
      width={600}
      className="rounded-xl"
      okButtonProps={{
        className: 'bg-blue-600 hover:bg-blue-700',
      }}
    >
      <MenuForm
        initialValues={editItem}
        onImageSelect={setImageUrl}
        form={form}
        categories={categories}
      />
    </Modal>
  );
};

export default MenuModal;