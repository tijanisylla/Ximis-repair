import { Loader2 } from 'lucide-react';

export const PageLoader = () => (
  <div
    className="flex min-h-[60vh] w-full items-center justify-center bg-background"
    role="status"
    aria-label="Loading page"
  >
    <Loader2 className="h-10 w-10 animate-spin text-brand-maroon" />
  </div>
);
