'use client';

import { transactionColumns } from '@/components/finances/transaction-columns';
import { Card, CardContent } from '@/components/ui/card';
import { transactionData } from '@/data/finances';
import { DataTable } from '../clients/data-table';

export function ExpenseTracker() {
  return (
    <Card>
      <CardContent className="p-6">
        <DataTable columns={transactionColumns} data={transactionData} />
      </CardContent>
    </Card>
  );
}