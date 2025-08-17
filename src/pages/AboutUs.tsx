import { useSeoMeta } from '@unhead/react';
import { Leaf, Award, Users, Clock, Globe, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/Layout';

const teamMembers = [
  {
    name: 'Glenn Leigh',
    role: 'Founder & CEO',
    bio: 'Third-generation farmer with over 30 years of experience in sustainable agriculture. Passionate about preserving farming traditions while embracing innovation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    experience: '30+ years',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Farm Manager',
    bio: 'Agricultural science graduate with expertise in organic farming practices and animal husbandry. Dedicated to maintaining the highest standards of animal welfare.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    experience: '15+ years',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    bio: 'MBA with a background in food supply chain management. Ensures our products reach customers with maximum freshness and quality.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    experience: '12+ years',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Customer Relations',
    bio: 'Passionate about connecting customers with farm-fresh products. Manages our community outreach and customer service programs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    experience: '8+ years',
  },
];

const timeline = [
  {
    year: '1995',
    title: 'Farm Founded',
    description: 'Glenn Leigh establishes the family farm with a commitment to sustainable agriculture and quality livestock.',
    icon: Globe,
  },
  {
    year: '2005',
    title: 'First Expansion',
    description: 'Expanded operations to include premium beef production, implementing the first version of the Glenn Leigh method.',
    icon: Leaf,
  },
  {
    year: '2015',
    title: 'Organic Certification',
    description: 'Achieved organic certification and began direct-to-consumer sales through local farmers markets.',
    icon: Award,
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched online store and delivery service, bringing farm-fresh products directly to customers\' homes.',
    icon: Globe,
  },
  {
    year: '2025',
    title: 'Sustainable Innovation',
    description: 'Implemented cutting-edge sustainable farming technologies and expanded product line to include pork and farm accessories.',
    icon: Heart,
  },
];

const methodPrinciples = [
  {
    title: 'Regenerative Agriculture',
    description: 'Our farming practices focus on soil health, biodiversity, and ecosystem restoration. We use crop rotation, cover cropping, and minimal tillage to build healthy soil.',
    icon: Leaf,
  },
  {
    title: 'Animal Welfare First',
    description: 'All our livestock are raised in spacious, natural environments with access to pasture. We never use hormones or unnecessary antibiotics.',
    icon: Heart,
  },
  {
    title: 'Quality from Start to Finish',
    description: 'From breeding to processing, every step is carefully monitored to ensure the highest quality. Our meat is dry-aged for optimal flavor and tenderness.',
    icon: Award,
  },
  {
    title: 'Environmental Stewardship',
    description: 'We implement water conservation, renewable energy, and waste reduction practices. Our carbon footprint is 40% lower than conventional farming.',
    icon: Globe,
  },
];

export default function AboutUs() {
  useSeoMeta({
    title: 'About Us - Glenn Leigh Farms LLC',
    description: 'Learn about Glenn Leigh Farms\' rich history, our dedicated team, and the science behind the Glenn Leigh method of sustainable farming.',
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              About Glenn Leigh Farms
            </h1>
            <p className="mx-auto mt-6 text-lg leading-8 text-muted-foreground">
              Three generations of farming excellence, sustainable practices, and unwavering commitment to quality. 
              Discover the story behind our premium farm-fresh products.
            </p>
          </div>
        </div>
      </section>

      {/* Farm History */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Our Farm History
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From humble beginnings to becoming a leader in sustainable agriculture.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-5 w-5 text-primary" />
                          <Badge variant="secondary">{item.year}</Badge>
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Passionate individuals dedicated to sustainable farming and quality products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  <Badge variant="outline">{member.experience} experience</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Glenn Leigh Method */}
      <section className="py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                The Glenn Leigh Method
              </h2>
              <Star className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              Our scientifically-backed approach to sustainable farming that produces superior quality meat while caring for our environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodPrinciples.map((principle) => (
              <Card key={principle.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Science Behind the Method */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-muted/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center font-serif">The Science Behind Our Success</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <p className="text-muted-foreground">Lower carbon footprint than conventional farming</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3x</div>
                    <p className="text-muted-foreground">Higher soil biodiversity index</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">Grass-fed and pasture-raised livestock</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-background rounded-lg">
                  <h4 className="font-semibold mb-3">Research-Backed Results</h4>
                  <p className="text-muted-foreground mb-4">
                    Our method has been validated by independent agricultural studies showing significant improvements in:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Meat quality and nutritional density</li>
                    <li>Soil health and water retention</li>
                    <li>Animal welfare and stress reduction</li>
                    <li>Environmental sustainability metrics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">Honest, transparent practices in everything we do</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Building strong relationships with customers and neighbors</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tradition</h3>
                <p className="text-muted-foreground">Honoring farming heritage while embracing innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}