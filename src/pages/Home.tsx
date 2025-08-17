import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { Leaf, Truck, Award, Users, Facebook, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';

// Mock Facebook posts data - in a real implementation, this would come from Facebook Graph API
const mockFacebookPosts = [
  {
    id: '1',
    message: 'Fresh harvest day! Our premium beef is now available at the farmers market. Come visit us this weekend! 🌾🥩',
    created_time: '2025-08-14T10:30:00+0000',
    full_picture: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
    permalink_url: 'https://facebook.com/glennleighfarms/posts/1',
  },
  {
    id: '2',
    message: 'Meet our newest team member, Sarah! She brings years of agricultural experience to Glenn Leigh Farms. Welcome to the family! 👩‍🌾',
    created_time: '2025-08-12T14:15:00+0000',
    full_picture: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
    permalink_url: 'https://facebook.com/glennleighfarms/posts/2',
  },
  {
    id: '3',
    message: 'The Glenn Leigh method in action: Our sustainable farming practices ensure the highest quality meat while caring for our land. 🌱♻️',
    created_time: '2025-08-10T09:45:00+0000',
    full_picture: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop',
    permalink_url: 'https://facebook.com/glennleighfarms/posts/3',
  },
];

const features = [
  {
    name: 'Farm Fresh',
    description: 'Premium quality meat raised with care and dedication',
    icon: Leaf,
  },
  {
    name: 'Local Delivery',
    description: 'Fresh delivery to your doorstep within our service area',
    icon: Truck,
  },
  {
    name: 'Quality Assured',
    description: '100% satisfaction guarantee with every purchase',
    icon: Award,
  },
  {
    name: 'Family Owned',
    description: 'Three generations of farming expertise and tradition',
    icon: Users,
  },
];

export default function Home() {
  const [posts] = useState(mockFacebookPosts);

  useSeoMeta({
    title: 'Glenn Leigh Farms LLC - Premium Farm Fresh Meat',
    description: 'Family-owned farm providing premium quality meat products using sustainable farming practices. Shop our selection of beef, pork, and farm accessories.',
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif">
              Premium Farm Fresh Meat
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Experience the Glenn Leigh difference. Three generations of farming excellence,
              sustainable practices, and uncompromising quality in every cut.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="/shop">Shop Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about-us">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Why Choose Glenn Leigh Farms?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our commitment to quality, sustainability, and tradition sets us apart.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Facebook className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                Latest from Facebook
              </h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay connected with our farm community and get the latest updates.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={post.full_picture}
                    alt="Facebook post"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.created_time)}</span>
                  </div>
                  <CardTitle className="text-lg">Farm Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.message}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={post.permalink_url} target="_blank" rel="noopener noreferrer">
                      View on Facebook
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="https://facebook.com/glennleighfarms" target="_blank" rel="noopener noreferrer">
                Follow Us on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
              Ready to Taste the Difference?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg opacity-90">
              Join hundreds of satisfied customers who have discovered the Glenn Leigh Farms difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <a href="/shop">Shop Our Products</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="/contact-us">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}