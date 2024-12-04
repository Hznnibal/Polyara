import { MainLayout } from '@/components/layout/main-layout';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { SalesChart } from '@/components/dashboard/sales-chart';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <StatsCards />
        <SalesChart />
      </div>
    </MainLayout>
  );
}