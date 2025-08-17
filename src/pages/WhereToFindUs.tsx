import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/Layout';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock events data - in a real implementation, this would come from a database or API
const upcomingEvents = [
  {
    id: 1,
    name: 'Downtown Farmers Market',
    type: 'market',
    date: '2025-08-16',
    time: '8:00 AM - 2:00 PM',
    location: 'Main Street Plaza, Downtown',
    address: '123 Main Street, Downtown, ST 12345',
    description: 'Our weekly spot at the downtown farmers market. Fresh meat, seasonal produce, and farm merchandise available.',
    recurring: 'Every Saturday',
    contact: 'Market Coordinator: (555) 123-4567',
    website: 'https://downtownfarmersmarket.com',
    featured: true,
  },
  {
    id: 2,
    name: 'Countryside Food Festival',
    type: 'festival',
    date: '2025-08-22',
    time: '10:00 AM - 6:00 PM',
    location: 'County Fairgrounds',
    address: '456 Fair Road, Countryside, ST 12345',
    description: 'Annual food festival featuring local farms and artisans. Come taste our premium beef and learn about sustainable farming.',
    recurring: 'Annual',
    contact: 'Festival Info: (555) 987-6543',
    website: 'https://countrysidefoods.com',
    featured: true,
  },
  {
    id: 3,
    name: 'Westside Community Market',
    type: 'market',
    date: '2025-08-18',
    time: '9:00 AM - 1:00 PM',
    location: 'Westside Park',
    address: '789 Park Avenue, Westside, ST 12345',
    description: 'Monthly community market in the heart of Westside. Family-friendly atmosphere with live music.',
    recurring: 'Third Sunday of each month',
    contact: 'Community Center: (555) 456-7890',
    website: 'https://westsidemarket.org',
    featured: false,
  },
  {
    id: 4,
    name: 'Farm-to-Table Dinner',
    type: 'event',
    date: '2025-08-25',
    time: '6:00 PM - 9:00 PM',
    location: 'The Harvest Restaurant',
    address: '321 Culinary Lane, Foodie District, ST 12345',
    description: 'Exclusive farm-to-table dinner featuring our premium beef. Limited seating, reservations required.',
    recurring: 'Quarterly',
    contact: 'Reservations: (555) 234-5678',
    website: 'https://harvestrestaurant.com',
    featured: true,
  },
  {
    id: 5,
    name: 'Organic Living Expo',
    type: 'expo',
    date: '2025-08-30',
    time: '11:00 AM - 5:00 PM',
    location: 'Convention Center',
    address: '654 Expo Drive, Metro City, ST 12345',
    description: 'Regional expo focused on organic and sustainable living. Educational talks and product demonstrations.',
    recurring: 'Bi-annual',
    contact: 'Expo Info: (555) 345-6789',
    website: 'https://organiclivingexpo.com',
    featured: false,
  },
  {
    id: 6,
    name: 'Riverside Farmers Market',
    type: 'market',
    date: '2025-08-23',
    time: '7:00 AM - 12:00 PM',
    location: 'Riverside Park',
    address: '987 River Road, Riverside, ST 12345',
    description: 'Scenic farmers market along the river. Perfect for a morning stroll and fresh shopping.',
    recurring: 'Every Friday',
    contact: 'Market Manager: (555) 567-8901',
    website: 'https://riversidemarket.net',
    featured: false,
  },
];

const eventTypes = [
  { value: 'all', label: 'All Events' },
  { value: 'market', label: 'Farmers Markets' },
  { value: 'festival', label: 'Food Festivals' },
  { value: 'event', label: 'Special Events' },
  { value: 'expo', label: 'Expos & Shows' },
];

export default function WhereToFindUs() {
  const [selectedType, setSelectedType] = useState('all');

  useSeoMeta({
    title: 'Where to Find Us - Glenn Leigh Farms LLC',
    description: 'Find Glenn Leigh Farms at local farmers markets, food festivals, and special events. Check our schedule of upcoming appearances.',
  });

  const filteredEvents = upcomingEvents.filter(event =>
    selectedType === 'all' || event.type === selectedType
  );

  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'market': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'festival': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'event': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'expo': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              Where to Find Us
            </h1>
            <p className="mx-auto mt-6 text-lg leading-8 text-muted-foreground">
              Meet us at local farmers markets, food festivals, and special events throughout the region.
              Experience our premium products and learn about sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Featured Events
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't miss these special appearances and regular market spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getEventTypeColor(event.type)} variant="secondary">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div className="text-muted-foreground">{event.address}</div>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Recurring:</span> {event.recurring}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Contact:</span> {event.contact}
                    </div>
                    {event.website && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={event.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Event Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-64">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Filter Events</h3>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Events List */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
                  Upcoming Events
                </h2>
                <p className="text-muted-foreground">
                  All times are local. Events subject to weather and other conditions.
                </p>
              </div>

              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getEventTypeColor(event.type)} variant="secondary">
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                            {event.featured && (
                              <Badge variant="outline">Featured</Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl">{event.name}</CardTitle>
                          <CardDescription className="mt-2">{event.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">{formatDate(event.date)}</div>
                          <div className="text-sm text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <div className="font-medium">{event.location}</div>
                              <div className="text-muted-foreground">{event.address}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.recurring}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium">Contact:</span> {event.contact}
                          </div>
                          {event.website && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={event.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Event Website
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No events found for the selected filter.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Want Us at Your Event?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for new opportunities to connect with our community.
              Contact us to discuss bringing Glenn Leigh Farms to your farmers market, festival, or special event.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact-us">Contact Us</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:(555)123-4567">Call (555) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}