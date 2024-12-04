import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CommandesPage() {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Gestion des Commandes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Liste des commandes à venir...</p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}