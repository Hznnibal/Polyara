import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable } from '@/components/clients/data-table';
import { columns } from '@/components/clients/columns';
import { clientData } from '@/data/clients';
import { ClientForm } from '@/components/clients/client-form';

export default function ClientsPage() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Gestion des Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="liste" className="space-y-4">
              <TabsList>
                <TabsTrigger value="liste">Liste des clients</TabsTrigger>
                <TabsTrigger value="ajouter">Ajouter un client</TabsTrigger>
              </TabsList>
              <TabsContent value="liste">
                <DataTable columns={columns} data={clientData} />
              </TabsContent>
              <TabsContent value="ajouter">
                <ClientForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}