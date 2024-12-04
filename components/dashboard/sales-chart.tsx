'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart } from '@tremor/react';

const data = [
  { date: 'Jan', sales: 4500 },
  { date: 'Feb', sales: 5200 },
  { date: 'Mar', sales: 4800 },
  { date: 'Apr', sales: 6300 },
  { date: 'May', sales: 5900 },
  { date: 'Jun', sales: 7500 },
];

export function SalesChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Évolution des Ventes</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          data={data}
          index="date"
          categories={['sales']}
          colors={['blue']}
          valueFormatter={(number) => `€${number.toLocaleString()}`}
          height="h-72"
        />
      </CardContent>
    </Card>
  );
}