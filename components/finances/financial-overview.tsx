'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Euro, TrendingUp, TrendingDown, Wallet } from 'lucide-react';

const stats = [
  {
    title: 'Revenus Mensuels',
    value: '€45,231',
    trend: '+12.5%',
    icon: TrendingUp,
    trendColor: 'text-green-500',
  },
  {
    title: 'Dépenses Mensuelles',
    value: '€32,845',
    trend: '+8.2%',
    icon: TrendingDown,
    trendColor: 'text-red-500',
  },
  {
    title: 'Trésorerie',
    value: '€78,594',
    trend: '+15.3%',
    icon: Wallet,
    trendColor: 'text-green-500',
  },
  {
    title: 'Bénéfice Net',
    value: '€12,386',
    trend: '+18.7%',
    icon: Euro,
    trendColor: 'text-green-500',
  },
];

export function FinancialOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trendColor}>{stat.trend}</span> depuis le mois dernier
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}