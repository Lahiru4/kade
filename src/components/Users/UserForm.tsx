import React from 'react';
import { Form, Input, Select } from 'antd';
import type { User, UserRole } from '../../types/user';

interface UserFormProps {
  initialValues?: User;
  form: any;
}

const roles: { label: string; value: UserRole }[] = [
  { label: 'Stock Manager', value: 'stock_manager' },
  { label: 'Social Media Manager', value: 'social_media_manager' },
  { label: 'Sales Manager', value: 'sales_manager' },
];

const UserForm: React.FC<UserFormProps> = ({ initialValues, form }) => {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
    >
      <Form.Item
        name="name"
        label="Full Name"
        rules={[{ required: true, message: 'Please enter full name' }]}
      >
        <Input className="rounded-lg" placeholder="Enter full name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input className="rounded-lg" placeholder="Enter email address" />
      </Form.Item>

      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: 'Please select a role' }]}
      >
        <Select className="rounded-lg">
          {roles.map((role) => (
            <Select.Option key={role.value} value={role.value}>
              {role.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {!initialValues && (
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter password' }]}
        >
          <Input.Password className="rounded-lg" placeholder="Enter password" />
        </Form.Item>
      )}
    </Form>
  );
};

export default UserForm;