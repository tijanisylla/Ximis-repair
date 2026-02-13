import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Lock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = login(username.trim(), password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error || 'Login failed.');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44 pb-20 flex items-start justify-center px-6" data-testid="admin-login-page">
      <Card className="w-full max-w-md border-border">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-maroon" />
            </div>
            <div>
              <CardTitle className="font-heading text-xl">Admin Login</CardTitle>
              <CardDescription>Sign in to view the dashboard</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="border-border"
                required
              />
            </div>
            <Button type="submit" className="w-full gap-2 bg-brand-maroon hover:bg-brand-maroon/90">
              <Lock className="w-4 h-4" />
              Sign in
            </Button>
          </form>
          <p className="mt-4 text-muted-foreground text-xs text-center">
            Mock login: username <code className="bg-muted px-1 rounded">admin</code>, password <code className="bg-muted px-1 rounded">admin123</code>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
