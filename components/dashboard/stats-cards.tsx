'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Ventes Totales',
    value: '€24,563',
    icon: BarChart3,
    trend: '+12%',
  },
  {
    title: 'Nouveaux Clients',
    value: '573',
    icon: Users,
    trend: '+8%',
  },
  {
    title: 'Commandes',
    value: '127',
    icon: ShoppingCart,
    trend: '+23%',
  },
  {
    title: 'Revenu',
    value: '€16,789',
    icon: TrendingUp,
    trend: '+15%',
  },
];

export function StatsCards() {
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
                <span className="text-green-500">{stat.trend}</span> depuis le mois dernier
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}