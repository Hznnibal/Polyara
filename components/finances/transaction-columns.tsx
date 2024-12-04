'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Transaction } from '@/types';
import { Badge } from '@/components/ui/badge';

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      const type = row.getValue('type') as string;
      return (
        <Badge variant={type === 'expense' ? 'destructive' : 'success'}>
          {type === 'expense' ? 'Dépense' : 'Revenu'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'category',
    header: 'Catégorie',
  },
  {
    accessorKey: 'amount',
    header: 'Montant',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const type = row.getValue('type') as string;
      return (
        <div className={type === 'expense' ? 'text-red-500' : 'text-green-500'}>
          {type === 'expense' ? '-' : '+'}€{amount.toLocaleString()}
        </div>
      );
    },
  },
];