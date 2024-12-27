import React from 'react';
import { Modal, Form, Input } from 'antd';
import type { Category } from '../../types';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (category: Omit<Category, 'id'>) => void;
  editCategory?: Category | null;
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  editCategory
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
      title={editCategory ? 'Edit Category' : 'Add New Category'}
      open={isOpen}
      onCancel={onClose}
      onOk={handleSubmit}
      okText={editCategory ? 'Update' : 'Add'}
      width={400}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={editCategory || {}}
      >
        <Form.Item
          name="name"
          label="Category Name"
          rules={[{ required: true, message: 'Please enter category name' }]}
        >
          <Input placeholder="e.g., Appetizers, Main Course, Desserts" />
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Description"
        >
          <Input.TextArea 
            placeholder="Brief description of this category"
            rows={3}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;