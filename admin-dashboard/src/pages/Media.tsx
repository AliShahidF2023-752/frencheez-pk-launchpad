import { AdminLayout } from '@/components/AdminLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Media = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Media Library</h1>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Media library feature coming soon</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Media;
