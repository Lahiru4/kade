import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileDetails from '../components/Profile/ProfileDetails';
import ProfileActivity from '../components/Profile/ProfileActivity';

const Profile = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h1>
      <div className="space-y-6">
        <ProfileHeader />
        <ProfileDetails />
        <ProfileActivity />
      </div>
    </div>
  );
};

export default Profile;