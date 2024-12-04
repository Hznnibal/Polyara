import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProduitsPage() {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Gestion des Produits</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Liste des produits à venir...</p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}