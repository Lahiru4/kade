import React from 'react';
import { Form, Input, InputNumber, Select, Switch } from 'antd';
import type { MenuItem, Category } from '../../types';
import ImageUpload from './ImageUpload';

interface MenuFormProps {
  initialValues?: MenuItem;
  onImageSelect: (url: string) => void;
  form: any;
  categories: Category[];
}

const MenuForm: React.FC<MenuFormProps> = ({ 
  initialValues, 
  onImageSelect, 
  form,
  categories 
}) => {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        available: true,
        ...initialValues,
      }}
      className="space-y-4"
    >
      <div className="mb-6">
        <ImageUpload
          onImageSelect={onImageSelect}
          currentImage={initialValues?.image}
        />
      </div>

      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter item name' }]}
      >
        <Input placeholder="Enter item name" className="rounded-lg" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter item description' }]}
      >
        <Input.TextArea
          placeholder="Enter item description"
          rows={3}
          className="rounded-lg"
        />
      </Form.Item>

      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter price' }]}
        >
          <InputNumber
            prefix="$"
            min={0}
            step={0.01}
            className="w-full rounded-lg"
            placeholder="0.00"
          />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please select category' }]}
        >
          <Select 
            className="w-full rounded-lg"
            placeholder="Select a category"
          >
            {categories.map((category) => (
              <Select.Option key={category.id} value={category.name}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item
        name="available"
        label="Availability"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default MenuForm;