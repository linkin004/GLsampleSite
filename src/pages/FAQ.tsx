import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';

const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'products', name: 'Products & Quality' },
  { id: 'orders', name: 'Orders & Shipping' },
  { id: 'farming', name: 'Farming Practices' },
  { id: 'wholesale', name: 'Wholesale & Business' },
];

const faqItems = [
  {
    id: 1,
    category: 'products',
    question: 'What makes Glenn Leigh Farms meat different from store-bought meat?',
    answer: 'Our meat is raised using the Glenn Leigh method - sustainable farming practices that prioritize animal welfare, soil health, and environmental stewardship. Our livestock are grass-fed, pasture-raised, and never given hormones or unnecessary antibiotics. This results in meat that is more flavorful, nutritious, and ethically produced.',
  },
  {
    id: 2,
    category: 'products',
    question: 'Are your products organic certified?',
    answer: 'Yes, we achieved organic certification in 2015. Our farming practices meet or exceed all organic standards, including no synthetic pesticides, fertilizers, or GMOs. We undergo regular inspections to maintain our certification.',
  },
  {
    id: 3,
    category: 'orders',
    question: 'How do I place an order?',
    answer: 'You can place orders through our online shop, visit us at farmers markets, or call us directly at (555) 123-4567. Online orders are processed within 24 hours and typically delivered within 2-3 business days.',
  },
  {
    id: 4,
    category: 'orders',
    question: 'What are your shipping options and costs?',
    answer: 'We offer local delivery within a 50-mile radius for a flat fee of $15. For orders over $100, local delivery is free. We also ship nationwide via overnight cold shipping. Shipping costs vary by location and order size, calculated at checkout.',
  },
  {
    id: 5,
    category: 'farming',
    question: 'What is the Glenn Leigh method?',
    answer: 'The Glenn Leigh method is our comprehensive approach to sustainable farming that combines traditional wisdom with modern science. It includes regenerative agriculture practices, rotational grazing, soil health management, and ethical animal husbandry. This method produces superior quality meat while improving the land and reducing environmental impact.',
  },
  {
    id: 6,
    category: 'farming',
    question: 'How do you ensure animal welfare?',
    answer: 'Our livestock are raised in spacious, natural environments with constant access to pasture. We follow strict animal welfare guidelines, provide clean water and nutritious feed, and minimize stress through gentle handling practices. We believe happy, healthy animals produce the best quality meat.',
  },
  {
    id: 7,
    category: 'wholesale',
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, we offer competitive wholesale pricing for restaurants, grocery stores, and food service businesses. Minimum order quantities apply, and we provide flexible delivery schedules. Contact our wholesale team at wholesale@glennleighfarms.com for current pricing and availability.',
  },
  {
    id: 8,
    category: 'wholesale',
    question: 'Can I visit the farm?',
    answer: 'We welcome farm visits by appointment. Educational tours are available for schools, groups, and interested customers. Tours typically last 1-2 hours and include a walk through our facilities, explanation of our farming practices, and an opportunity to meet our team. Schedule your visit by calling (555) 123-4567.',
  },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  useSeoMeta({
    title: 'FAQ - Glenn Leigh Farms LLC',
    description: 'Frequently asked questions about Glenn Leigh Farms products, farming practices, orders, and wholesale opportunities.',
  });

  const filteredItems = faqItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const toggleItem = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about our products, farming practices, and services. 
              Can't find what you're looking for? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto"
                    onClick={() => toggleItem(item.id)}
                  >
                    <CardTitle className="text-left text-lg flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item.question}</span>
                    </CardTitle>
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </Button>
                </CardHeader>
                {expandedItems.has(item.id) && (
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.answer}
                    </CardDescription>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No questions found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif mb-8">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help! Contact us through any of these channels and we'll get back to you promptly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Fill out our detailed contact form for comprehensive assistance.
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <a href="/contact-us">Contact Form</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Speak directly with our team during business hours.
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <a href="tel:(555)123-4567">(555) 123-4567</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Send us an email and we'll respond within 24 hours.
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <a href="mailto:info@glennleighfarms.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}