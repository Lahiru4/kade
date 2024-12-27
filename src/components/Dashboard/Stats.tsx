import React from 'react';
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      label: 'Daily Revenue',
      value: '$1,234',
      icon: DollarSign,
      trend: '+12.5%',
    },
    {
      label: 'Active Orders',
      value: '23',
      icon: Clock,
      trend: '+5.0%',
    },
    {
      label: 'Customers Today',
      value: '156',
      icon: Users,
      trend: '+8.2%',
    },
    {
      label: 'Avg Order Value',
      value: '$42',
      icon: TrendingUp,
      trend: '+3.1%',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-full">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-500 text-sm font-medium">
                {stat.trend}
              </span>
              <span className="text-gray-600 text-sm ml-2">vs last week</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;