import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Layout } from '@/components/Layout';
import { useToast } from '@/hooks/useToast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(555) 123-4567',
    description: 'Monday - Friday, 8:00 AM - 6:00 PM',
    action: 'tel:(555)123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@glennleighfarms.com',
    description: 'We respond within 24 hours',
    action: 'mailto:info@glennleighfarms.com',
  },
  {
    icon: MapPin,
    title: 'Farm Address',
    details: '123 Farm Road, Countryside, ST 12345',
    description: 'Visits by appointment only',
    action: 'https://maps.google.com/?q=123+Farm+Road+Countryside+ST+12345',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Monday - Friday: 8:00 AM - 6:00 PM',
    description: 'Saturday: 7:00 AM - 3:00 PM (Market Days)',
    action: null,
  },
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'orders', label: 'Orders & Products' },
  { value: 'wholesale', label: 'Wholesale & Bulk Orders' },
  { value: 'events', label: 'Events & Farmers Markets' },
  { value: 'farm-visits', label: 'Farm Visits & Tours' },
  { value: 'partnerships', label: 'Business Partnerships' },
  { value: 'media', label: 'Media & Press' },
  { value: 'other', label: 'Other' },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useSeoMeta({
    title: 'Contact Us - Glenn Leigh Farms LLC',
    description: 'Get in touch with Glenn Leigh Farms. Contact us for orders, wholesale inquiries, farm visits, or general questions about our premium farm products.',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        subject: '',
        message: '',
      });
    } catch {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 text-lg leading-8 text-muted-foreground">
              We'd love to hear from you. Get in touch with any questions about our products,
              wholesale opportunities, or to schedule a farm visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Multiple ways to reach us for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="font-medium">{info.details}</div>
                  <CardDescription>{info.description}</CardDescription>
                  {info.action && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.title === 'Phone' && 'Call Now'}
                        {info.title === 'Email' && 'Send Email'}
                        {info.title === 'Farm Address' && 'Get Directions'}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Inquiry Form</span>
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us assist you better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        <Building className="h-4 w-4 inline mr-2" />
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Wholesale Inquiries</CardTitle>
                <CardDescription>
                  Interested in carrying our products in your restaurant, store, or market?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We offer competitive wholesale pricing for restaurants, grocery stores, and other food service businesses.
                  Our products are available in bulk quantities with flexible delivery options.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Minimum order quantities available</li>
                  <li>• Custom packaging options</li>
                  <li>• Regular delivery schedules</li>
                  <li>• Volume discounts</li>
                </ul>
                <Button variant="outline" asChild>
                  <a href="mailto:wholesale@glennleighfarms.com">
                    Contact Wholesale Team
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Farm Visits & Tours</CardTitle>
                <CardDescription>
                  Experience sustainable farming firsthand with a guided tour of our facilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We welcome visitors to learn about our farming practices and see the Glenn Leigh method in action.
                  Tours are available by appointment and include educational components suitable for all ages.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Educational tours for schools and groups</li>
                  <li>• Behind-the-scenes farm operations</li>
                  <li>• Meet our livestock and team</li>
                  <li>• Learn about sustainable agriculture</li>
                </ul>
                <Button variant="outline" asChild>
                  <a href="mailto:tours@glennleighfarms.com">
                    Schedule a Visit
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}