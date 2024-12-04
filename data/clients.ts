import { Client } from '@/types';

export const clientData: Client[] = [
  {
    id: '1',
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '01 23 45 67 89',
    status: 'active',
    type: 'client',
    lastContact: '2024-01-15',
    notes: 'Client fidèle depuis 2020',
  },
  {
    id: '2',
    name: 'Marie Martin',
    email: 'marie.martin@email.com',
    phone: '01 98 76 54 32',
    status: 'active',
    type: 'prospect',
    lastContact: '2024-01-10',
    notes: 'Intéressée par nos services premium',
  },
  {
    id: '3',
    name: 'Pierre Bernard',
    email: 'pierre.bernard@email.com',
    phone: '01 45 67 89 10',
    status: 'inactive',
    type: 'client',
    lastContact: '2023-12-20',
    notes: 'À recontacter pour renouvellement',
  },
];