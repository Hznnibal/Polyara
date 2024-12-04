import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FinancialOverview } from '@/components/finances/financial-overview';
import { ExpenseTracker } from '@/components/finances/expense-tracker';
import { PaymentManagement } from '@/components/finances/payment-management';
import { FinancialReports } from '@/components/finances/financial-reports';

export default function FinancesPage() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <FinancialOverview />
        
        <Card>
          <CardHeader>
            <CardTitle>Gestion Financière</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="expenses" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="expenses">Dépenses & Revenus</TabsTrigger>
                <TabsTrigger value="payments">Paiements</TabsTrigger>
                <TabsTrigger value="reports">Rapports Financiers</TabsTrigger>
              </TabsList>
              <TabsContent value="expenses">
                <ExpenseTracker />
              </TabsContent>
              <TabsContent value="payments">
                <PaymentManagement />
              </TabsContent>
              <TabsContent value="reports">
                <FinancialReports />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}