import { useNavigate } from 'react-router-dom';
import { Calendar, Mail, Tag, Shield, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import {
  MOCK_APPOINTMENTS,
  MOCK_CONTACT_SUBMISSIONS,
  MOCK_SPECIAL_OFFER_SIGNUPS,
} from '../data/adminMock';
import { useAuth } from '../context/AuthContext';

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

const statusVariant = (status) => {
  switch (status) {
    case 'confirmed':
      return 'default';
    case 'pending':
      return 'secondary';
    case 'completed':
      return 'outline';
    case 'cancelled':
      return 'destructive';
    default:
      return 'outline';
  }
};

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44 pb-20" data-testid="admin-page">
      <section className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-2 block">
              Admin
            </span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Mock data for appointments, contact messages, and special-offer signups.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2 shrink-0 border-border"
          >
            <LogOut className="w-4 h-4" />
            Log out
          </Button>
        </div>

        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted p-1">
            <TabsTrigger value="appointments" className="gap-2">
              <Calendar className="w-4 h-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="w-4 h-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="signups" className="gap-2">
              <Tag className="w-4 h-4" />
              Signups
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>Recent and upcoming bookings (mock)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        <th className="pb-3 pr-4 font-medium">Name</th>
                        <th className="pb-3 pr-4 font-medium">Service</th>
                        <th className="pb-3 pr-4 font-medium">Date & Time</th>
                        <th className="pb-3 pr-4 font-medium">Status</th>
                        <th className="pb-3 font-medium">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_APPOINTMENTS.map((apt) => (
                        <tr key={apt.id} className="border-b border-border/60 hover:bg-muted/50">
                          <td className="py-4 pr-4">
                            <div className="font-medium text-foreground">{apt.name}</div>
                            <div className="text-muted-foreground text-xs">{apt.phone}</div>
                          </td>
                          <td className="py-4 pr-4 text-foreground">{apt.service}</td>
                          <td className="py-4 pr-4 text-foreground">
                            {apt.date} · {apt.time}
                          </td>
                          <td className="py-4 pr-4">
                            <Badge variant={statusVariant(apt.status)}>{apt.status}</Badge>
                          </td>
                          <td className="py-4 text-muted-foreground max-w-[200px] truncate">
                            {apt.notes || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>Form submissions (mock)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {MOCK_CONTACT_SUBMISSIONS.map((sub) => (
                    <div
                      key={sub.id}
                      className={`rounded-lg border border-border p-4 ${
                        !sub.read ? 'bg-brand-maroon/5 border-brand-maroon/20' : 'bg-card'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="font-medium text-foreground">{sub.name}</div>
                          <div className="text-muted-foreground text-sm">
                            {sub.email}
                            {sub.phone && ` · ${sub.phone}`}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-muted-foreground text-xs">
                            {formatDate(sub.createdAt)}
                          </span>
                          {!sub.read && (
                            <Badge variant="default" className="bg-brand-maroon">New</Badge>
                          )}
                        </div>
                      </div>
                      <div className="font-medium text-foreground mb-1">{sub.subject}</div>
                      <p className="text-muted-foreground text-sm">{sub.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signups" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Special Offer Signups</CardTitle>
                <CardDescription>Promo code signups from email, banner, landing (mock)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        <th className="pb-3 pr-4 font-medium">Email</th>
                        <th className="pb-3 pr-4 font-medium">Code</th>
                        <th className="pb-3 pr-4 font-medium">Source</th>
                        <th className="pb-3 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_SPECIAL_OFFER_SIGNUPS.map((s) => (
                        <tr
                          key={s.id}
                          className="border-b border-border/60 hover:bg-muted/50"
                        >
                          <td className="py-4 pr-4 text-foreground">{s.email}</td>
                          <td className="py-4 pr-4">
                            <Badge variant="secondary">{s.code}</Badge>
                          </td>
                          <td className="py-4 pr-4 text-foreground capitalize">{s.source}</td>
                          <td className="py-4 text-muted-foreground">
                            {formatDate(s.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="mt-8 text-muted-foreground text-sm flex items-center gap-2">
          <Shield className="w-4 h-4" />
          This page uses mock data. Connect a backend to load real appointments and messages.
        </p>
      </section>
    </div>
  );
};

export default Admin;
