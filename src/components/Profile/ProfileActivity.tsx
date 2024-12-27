import React from 'react';
import { Clock, Edit, ShoppingBag, Plus } from 'lucide-react';
import { Timeline } from 'antd';

const activities = [
  {
    action: 'Updated menu item',
    item: 'Margherita Pizza',
    time: '2 hours ago',
    icon: Edit,
    color: 'blue'
  },
  {
    action: 'Completed order',
    item: '#1234',
    time: '4 hours ago',
    icon: ShoppingBag,
    color: 'green'
  },
  {
    action: 'Added new menu item',
    item: 'Vegetarian Pasta',
    time: '1 day ago',
    icon: Plus,
    color: 'purple'
  }
];

const ProfileActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
      
      <Timeline
        items={activities.map((activity) => {
          const Icon = activity.icon;
          return {
            dot: (
              <div className={`p-2 bg-${activity.color}-50 rounded-lg`}>
                <Icon className={`w-4 h-4 text-${activity.color}-600`} />
              </div>
            ),
            children: (
              <div className="ml-2">
                <p className="text-gray-800">
                  {activity.action} <span className="font-medium">{activity.item}</span>
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default ProfileActivity;