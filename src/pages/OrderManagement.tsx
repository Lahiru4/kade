import React, { useState } from 'react';
import OrderList from '../components/Orders/OrderList';
import type { Order } from '../types';

const OrderManagement = () => {
  const [orders] = useState<Order[]>([
    {
      id: '1',
      items: [
        {
          menuItem: {
            id: '1',
            name: 'Margherita Pizza',
            description: 'Fresh tomatoes, mozzarella, and basil',
            price: 12.99,
            category: 'Pizza',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
            available: true,
          },
          quantity: 2,
        },
      ],
      status: 'pending',
      tableNumber: 5,
      totalAmount: 25.98,
      createdAt: new Date(),
    },
    // Add more orders as needed
  ]);

  const handleUpdateStatus = (orderId: string, status: Order['status']) => {
    // Implement status update functionality
    console.log('Update order status:', orderId, status);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h1>
      <OrderList orders={orders} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
};

export default OrderManagement;