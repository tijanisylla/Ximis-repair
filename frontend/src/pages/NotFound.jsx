import { Link } from 'react-router-dom';
import { Home, Phone, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BUSINESS } from '../data/business';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44 flex items-center justify-center" data-testid="404-page">
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <div className="w-24 h-24 bg-brand-maroon/10 border border-brand-maroon/30 flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-12 h-12 text-brand-maroon" />
        </div>
        <h1 className="font-heading text-8xl lg:text-9xl font-bold text-brand-maroon/30 mb-4">404</h1>
        <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300 btn-premium">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <a href={BUSINESS.phoneLink}>
            <Button variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-medium tracking-wide transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call {BUSINESS.phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
