import { useState } from 'react';
import { Phone, Calendar as CalendarIcon, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { toast } from 'sonner';
import { BUSINESS, SERVICE_TYPES } from '../data/business';
import { cn } from '../lib/utils';

const BookAppointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceType: '',
    preferredTime: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = 'Vehicle year is required';
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!selectedDate) newErrors.preferredDate = 'Please select a date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    const submissionData = {
      ...formData,
      preferredDate: selectedDate ? format(selectedDate, 'PPP') : ''
    };

    console.log('Appointment Request:', submissionData);
    toast.success('Appointment request submitted! We will call you shortly to confirm.');
    setIsSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-36 lg:pt-44" data-testid="book-success">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Request Received
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Thank you for choosing {BUSINESS.name}. We've received your appointment request and will call you at <strong className="text-foreground">{formData.phone}</strong> to confirm the details.
          </p>
          <div className="bg-card border border-border p-8 mb-10 text-left">
            <h3 className="font-heading text-lg tracking-wide text-foreground mb-5 pb-3 border-b border-border">Request Summary</h3>
            <div className="space-y-3 text-sm">
              <p className="flex justify-between"><span className="text-muted-foreground">Service:</span> <span className="text-foreground">{formData.serviceType}</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Vehicle:</span> <span className="text-foreground">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Preferred Date:</span> <span className="text-foreground">{selectedDate ? format(selectedDate, 'PPP') : ''}</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Preferred Time:</span> <span className="text-foreground">{formData.preferredTime}</span></p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-8">
            Need immediate assistance? Call us directly.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button className="bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide px-8 transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              {BUSINESS.phone}
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-36 lg:pt-44" data-testid="book-page">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <span className="text-brand-maroon font-medium text-sm tracking-[0.2em] uppercase mb-3 block">Schedule Service</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 line-accent">
              Book Appointment
            </h1>
            <p className="text-muted-foreground mb-10">
              Fill out the form below and we'll contact you to confirm your appointment. All fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-10" data-testid="booking-form">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wide text-foreground border-b border-border pb-4">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80 text-sm">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={cn(
                        "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12",
                        errors.name && 'border-red-500'
                      )}
                      data-testid="input-name"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80 text-sm">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 555-5555"
                      className={cn(
                        "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12",
                        errors.phone && 'border-red-500'
                      )}
                      data-testid="input-phone"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80 text-sm">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12"
                    data-testid="input-email"
                  />
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wide text-foreground border-b border-border pb-4">
                  Vehicle Information
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear" className="text-foreground/80 text-sm">Year *</Label>
                    <Input
                      id="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                      placeholder="2024"
                      className={cn(
                        "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12",
                        errors.vehicleYear && 'border-red-500'
                      )}
                      data-testid="input-year"
                    />
                    {errors.vehicleYear && <p className="text-red-500 text-xs">{errors.vehicleYear}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake" className="text-foreground/80 text-sm">Make *</Label>
                    <Input
                      id="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                      placeholder="Toyota"
                      className={cn(
                        "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12",
                        errors.vehicleMake && 'border-red-500'
                      )}
                      data-testid="input-make"
                    />
                    {errors.vehicleMake && <p className="text-red-500 text-xs">{errors.vehicleMake}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel" className="text-foreground/80 text-sm">Model *</Label>
                    <Input
                      id="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                      placeholder="Camry"
                      className={cn(
                        "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon h-12",
                        errors.vehicleModel && 'border-red-500'
                      )}
                      data-testid="input-model"
                    />
                    {errors.vehicleModel && <p className="text-red-500 text-xs">{errors.vehicleModel}</p>}
                  </div>
                </div>
              </div>

              {/* Service & Schedule */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wide text-foreground border-b border-border pb-4">
                  Service & Schedule
                </h3>
                <div className="space-y-2">
                  <Label className="text-foreground/80 text-sm">Service Type *</Label>
                  <Select 
                    value={formData.serviceType} 
                    onValueChange={(value) => handleInputChange('serviceType', value)}
                  >
                    <SelectTrigger 
                      className={cn(
                        "bg-card border-border text-foreground focus:border-brand-maroon h-12",
                        errors.serviceType && 'border-red-500'
                      )}
                      data-testid="select-service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {SERVICE_TYPES.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="text-popover-foreground hover:bg-brand-maroon/20 focus:bg-brand-maroon/20"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && <p className="text-red-500 text-xs">{errors.serviceType}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Calendar Date Picker */}
                  <div className="space-y-2">
                    <Label className="text-foreground/80 text-sm">Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 bg-card border-border hover:bg-card hover:border-brand-maroon",
                            !selectedDate && "text-muted-foreground",
                            errors.preferredDate && "border-red-500"
                          )}
                          data-testid="date-picker-trigger"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-brand-maroon" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-popover border-border" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            if (errors.preferredDate) {
                              setErrors(prev => ({ ...prev, preferredDate: '' }));
                            }
                          }}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                          className="bg-popover"
                          data-testid="calendar"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.preferredDate && <p className="text-red-500 text-xs">{errors.preferredDate}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="text-foreground/80 text-sm">Preferred Time *</Label>
                    <Select 
                      value={formData.preferredTime} 
                      onValueChange={(value) => handleInputChange('preferredTime', value)}
                    >
                      <SelectTrigger 
                        className={cn(
                          "bg-card border-border text-foreground focus:border-brand-maroon h-12",
                          errors.preferredTime && 'border-red-500'
                        )}
                        data-testid="select-time"
                      >
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {['Morning (8AM - 12PM)', 'Afternoon (12PM - 5PM)', 'Evening (5PM - 9PM)', 'Night (9PM - 8AM)'].map((time) => (
                          <SelectItem 
                            key={time} 
                            value={time}
                            className="text-popover-foreground hover:bg-brand-maroon/20 focus:bg-brand-maroon/20"
                          >
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && <p className="text-red-500 text-xs">{errors.preferredTime}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground/80 text-sm">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Describe your issue or any special requests..."
                    rows={4}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-brand-maroon resize-none"
                    data-testid="input-notes"
                  />
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide py-6 text-base transition-all duration-300 btn-premium"
                data-testid="submit-booking"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Submit Appointment Request
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Urgent Help Panel */}
            <div className="bg-brand-maroon/10 border border-brand-maroon/30 p-6" data-testid="urgent-help-panel">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-brand-maroon" />
                <h3 className="font-heading text-lg tracking-wide text-foreground">Need Urgent Help?</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                For emergency repairs or immediate assistance, call us directly. We're available 24/7.
              </p>
              <a href={BUSINESS.phoneLink}>
                <Button className="w-full bg-brand-maroon hover:bg-brand-maroon-light text-white font-medium tracking-wide transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-gold" />
                <h3 className="font-heading text-lg tracking-wide text-foreground">Hours</h3>
              </div>
              <p className="text-foreground">
                We're open <span className="text-brand-gold font-semibold">24/7</span> for your convenience.
              </p>
              <p className="text-muted-foreground text-sm mt-3">
                {BUSINESS.address.full}
              </p>
            </div>

            {/* Promo */}
            <div className="bg-card border border-brand-maroon/20 p-6">
              <div className="text-center">
                <span className="font-heading text-4xl font-bold text-brand-maroon">{BUSINESS.promo}</span>
                <p className="font-heading text-sm tracking-[0.15em] uppercase text-foreground mt-2">New Customers</p>
                <p className="text-muted-foreground text-sm mt-4">
                  Mention this offer when you call to confirm your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
