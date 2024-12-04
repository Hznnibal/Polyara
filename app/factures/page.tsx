import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FacturesPage() {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Gestion des Factures</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Liste des factures à venir...</p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}