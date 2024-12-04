import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ParametresPage() {
  return (
    <MainLayout>
      <Card>
        <CardHeader>
          <CardTitle>Paramètres du Système</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configuration du système à venir...</p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}