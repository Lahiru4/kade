export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  barcode?: string; // Optional for existing items
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  tableNumber: number;
  totalAmount: number;
  createdAt: Date;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}