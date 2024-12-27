import React from 'react';
import { Camera } from 'lucide-react';
import { Button, Upload, message } from 'antd';

const ProfileHeader = () => {
  const handleImageUpload = () => {
    message.success('Profile photo updated successfully');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative group">
          <Upload
            accept="image/*"
            showUploadList={false}
            onChange={handleImageUpload}
          >
            <div className="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </Upload>
        </div>
        
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500">Restaurant Manager</p>
          <p className="text-sm text-gray-400 mt-1">Member since March 2024</p>
          <div className="mt-3 flex gap-2 justify-center sm:justify-start">
            <Button type="default" className="rounded-lg">Edit Profile</Button>
            <Button type="primary" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
              View Public Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;