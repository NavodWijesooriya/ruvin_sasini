
import AdminDashboard from '@/components/admin/AdminDashboard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Invitation
        </Link>
        <AdminDashboard />
      </div>
    </div>
  );
}
