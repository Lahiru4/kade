export type UserRole = 'stock_manager' | 'social_media_manager' | 'sales_manager';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
}