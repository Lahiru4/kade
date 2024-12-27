import React from 'react';
import type { Order } from '../../types';

interface OrderListProps {
  orders: Order[];
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

const OrderList = ({ orders, onUpdateStatus }: OrderListProps) => {
  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      preparing: 'bg-blue-100 text-blue-800',
      ready: 'bg-green-100 text-green-800',
      delivered: 'bg-gray-100 text-gray-800',
    };
    return colors[status];
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Order #{order.id}</h3>
                <p className="text-sm text-gray-500">
                  Table {order.tableNumber} • {new Date(order.createdAt).toLocaleTimeString()}
                </p>
              </div>
              <select
                value={order.status}
                onChange={(e) => onUpdateStatus(order.id, e.target.value as Order['status'])}
                className={`${getStatusColor(
                  order.status
                )} px-3 py-1 rounded-full text-sm font-medium`}
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center">
                    <span className="font-medium">{item.quantity}x</span>
                    <span className="ml-2">{item.menuItem.name}</span>
                  </div>
                  <span className="text-gray-500">
                    ${(item.menuItem.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;