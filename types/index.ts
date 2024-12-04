export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  type: 'prospect' | 'client';
  lastContact: string;
  notes: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  type: 'expense' | 'income';
  category: string;
  amount: number;
}

export interface Payment {
  id: string;
  date: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  type: 'supplier' | 'client';
  entityName: string;
  reference: string;
}

export interface FinancialReport {
  id: string;
  title: string;
  period: string;
  type: 'balance' | 'income' | 'cashflow';
  status: 'draft' | 'final';
  createdAt: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  status: 'active' | 'inactive';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  minStock: number;
}

export interface Order {
  id: string;
  clientId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  items: OrderItem[];
  total: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  products: string[];
}