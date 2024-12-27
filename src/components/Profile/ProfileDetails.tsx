import React from 'react';
import { Form, Input, Button, Select, DatePicker, Divider } from 'antd';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ProfileDetails = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Updated profile:', values);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          location: 'New York, USA',
          language: 'english',
          timezone: 'EST'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input prefix={<Mail className="w-4 h-4 text-gray-400" />} className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
          >
            <Input prefix={<Phone className="w-4 h-4 text-gray-400" />} className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
          >
            <Input prefix={<MapPin className="w-4 h-4 text-gray-400" />} className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="language"
            label="Language"
          >
            <Select className="rounded-lg">
              <Select.Option value="english">English</Select.Option>
              <Select.Option value="spanish">Spanish</Select.Option>
              <Select.Option value="french">French</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Divider />

        <div className="flex justify-end gap-2">
          <Button htmlType="reset">
            Reset
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProfileDetails;