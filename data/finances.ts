import { Transaction } from '@/types';

export const transactionData: Transaction[] = [
  {
    id: '1',
    date: '2024-03-15',
    description: 'Paiement fournisseur ABC',
    type: 'expense',
    category: 'Fournisseurs',
    amount: 2500,
  },
  {
    id: '2',
    date: '2024-03-14',
    description: 'Facture client XYZ',
    type: 'income',
    category: 'Ventes',
    amount: 4800,
  },
  {
    id: '3',
    date: '2024-03-13',
    description: 'Loyer bureau',
    type: 'expense',
    category: 'Locaux',
    amount: 1500,
  },
  {
    id: '4',
    date: '2024-03-12',
    description: 'Services de consultation',
    type: 'income',
    category: 'Services',
    amount: 3200,
  },
];