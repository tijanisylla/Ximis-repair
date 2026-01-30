import { useState } from 'react';
import { Phone, Calendar, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { BUSINESS, SERVICE_TYPES } from '../data/business';

const BookAppointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceType: '',
    preferredDate: '',
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
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
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

    // Store in local state (no backend)
    console.log('Appointment Request:', formData);
    
    // Show success toast
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
      <div className="min-h-screen bg-midnight pt-32 md:pt-40" data-testid="book-success">
        <div className="max-w-2xl mx-auto px-6 md:px-12 py-20 text-center">
          <div className="w-20 h-20 bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
            Request Received
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Thank you for choosing {BUSINESS.name}. We've received your appointment request and will call you at <strong className="text-white">{formData.phone}</strong> to confirm the details.
          </p>
          <div className="bg-slate-900/50 border border-white/10 p-6 mb-8 text-left">
            <h3 className="font-heading text-lg tracking-wider uppercase text-white mb-4">Request Summary</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p><span className="text-slate-500">Service:</span> {formData.serviceType}</p>
              <p><span className="text-slate-500">Vehicle:</span> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</p>
              <p><span className="text-slate-500">Preferred Date:</span> {formData.preferredDate}</p>
              <p><span className="text-slate-500">Preferred Time:</span> {formData.preferredTime}</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            Need immediate assistance? Call us directly.
          </p>
          <a href={BUSINESS.phoneLink}>
            <Button className="bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase px-8 transition-all hover:shadow-neon">
              <Phone className="w-4 h-4 mr-2" />
              {BUSINESS.phone}
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight pt-32 md:pt-40" data-testid="book-page">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <span className="text-neon-blue font-heading text-sm tracking-widest uppercase mb-2 block">Schedule Service</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6">
              Book Appointment
            </h1>
            <p className="text-slate-300 mb-8">
              Fill out the form below and we'll contact you to confirm your appointment. All fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8" data-testid="booking-form">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wider uppercase text-white border-b border-white/10 pb-3">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={`bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue ${errors.name ? 'border-neon-red' : ''}`}
                      data-testid="input-name"
                    />
                    {errors.name && <p className="text-neon-red text-xs">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-300">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 555-5555"
                      className={`bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue ${errors.phone ? 'border-neon-red' : ''}`}
                      data-testid="input-phone"
                    />
                    {errors.phone && <p className="text-neon-red text-xs">{errors.phone}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue"
                    data-testid="input-email"
                  />
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wider uppercase text-white border-b border-white/10 pb-3">
                  Vehicle Information
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear" className="text-slate-300">Year *</Label>
                    <Input
                      id="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                      placeholder="2024"
                      className={`bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue ${errors.vehicleYear ? 'border-neon-red' : ''}`}
                      data-testid="input-year"
                    />
                    {errors.vehicleYear && <p className="text-neon-red text-xs">{errors.vehicleYear}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake" className="text-slate-300">Make *</Label>
                    <Input
                      id="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                      placeholder="Toyota"
                      className={`bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue ${errors.vehicleMake ? 'border-neon-red' : ''}`}
                      data-testid="input-make"
                    />
                    {errors.vehicleMake && <p className="text-neon-red text-xs">{errors.vehicleMake}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel" className="text-slate-300">Model *</Label>
                    <Input
                      id="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                      placeholder="Camry"
                      className={`bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue ${errors.vehicleModel ? 'border-neon-red' : ''}`}
                      data-testid="input-model"
                    />
                    {errors.vehicleModel && <p className="text-neon-red text-xs">{errors.vehicleModel}</p>}
                  </div>
                </div>
              </div>

              {/* Service & Schedule */}
              <div className="space-y-6">
                <h3 className="font-heading text-lg tracking-wider uppercase text-white border-b border-white/10 pb-3">
                  Service & Schedule
                </h3>
                <div className="space-y-2">
                  <Label className="text-slate-300">Service Type *</Label>
                  <Select 
                    value={formData.serviceType} 
                    onValueChange={(value) => handleInputChange('serviceType', value)}
                  >
                    <SelectTrigger 
                      className={`bg-slate-900 border-white/20 text-white focus:border-neon-blue ${errors.serviceType ? 'border-neon-red' : ''}`}
                      data-testid="select-service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/20">
                      {SERVICE_TYPES.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="text-white hover:bg-neon-blue/20 focus:bg-neon-blue/20"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && <p className="text-neon-red text-xs">{errors.serviceType}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-slate-300">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`bg-slate-900 border-white/20 text-white focus:border-neon-blue ${errors.preferredDate ? 'border-neon-red' : ''}`}
                      data-testid="input-date"
                    />
                    {errors.preferredDate && <p className="text-neon-red text-xs">{errors.preferredDate}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="text-slate-300">Preferred Time *</Label>
                    <Select 
                      value={formData.preferredTime} 
                      onValueChange={(value) => handleInputChange('preferredTime', value)}
                    >
                      <SelectTrigger 
                        className={`bg-slate-900 border-white/20 text-white focus:border-neon-blue ${errors.preferredTime ? 'border-neon-red' : ''}`}
                        data-testid="select-time"
                      >
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/20">
                        {['Morning (8AM - 12PM)', 'Afternoon (12PM - 5PM)', 'Evening (5PM - 9PM)', 'Night (9PM - 8AM)'].map((time) => (
                          <SelectItem 
                            key={time} 
                            value={time}
                            className="text-white hover:bg-neon-blue/20 focus:bg-neon-blue/20"
                          >
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && <p className="text-neon-red text-xs">{errors.preferredTime}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-slate-300">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Describe your issue or any special requests..."
                    rows={4}
                    className="bg-slate-900 border-white/20 text-white placeholder:text-slate-500 focus:border-neon-blue resize-none"
                    data-testid="input-notes"
                  />
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white font-heading tracking-wider uppercase py-6 text-base transition-all hover:shadow-neon"
                data-testid="submit-booking"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Submit Appointment Request
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Urgent Help Panel */}
            <div className="bg-neon-red/10 border border-neon-red/30 p-6" data-testid="urgent-help-panel">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-neon-red" />
                <h3 className="font-heading text-lg tracking-wider uppercase text-white">Need Urgent Help?</h3>
              </div>
              <p className="text-slate-300 text-sm mb-6">
                For emergency repairs or immediate assistance, call us directly. We're available 24/7.
              </p>
              <a href={BUSINESS.phoneLink}>
                <Button className="w-full bg-neon-red hover:bg-neon-red/90 text-white font-heading tracking-wider uppercase transition-all hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-slate-900/50 border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-neon-blue" />
                <h3 className="font-heading text-lg tracking-wider uppercase text-white">Hours</h3>
              </div>
              <p className="text-slate-300">
                We're open <span className="text-neon-blue font-bold">24/7</span> for your convenience.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                {BUSINESS.address.full}
              </p>
            </div>

            {/* Promo */}
            <div className="bg-slate-900/50 border border-neon-blue/30 p-6">
              <div className="text-center">
                <span className="font-heading text-4xl font-bold text-neon-blue">{BUSINESS.promo}</span>
                <p className="font-heading text-sm tracking-widest uppercase text-white mt-2">New Customers</p>
                <p className="text-slate-400 text-sm mt-4">
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
