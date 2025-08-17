import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { Beef, Coffee, Search, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/Layout';

// Mock product data
const products = [
  // Meat Products
  {
    id: 1,
    name: 'Premium Ribeye Steak',
    category: 'meat',
    subcategory: 'beef',
    price: 24.99,
    description: 'Perfectly marbled, tender ribeye steak from our grass-fed cattle',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop',
    rating: 4.8,
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Ground Beef Bundle',
    category: 'meat',
    subcategory: 'beef',
    price: 89.99,
    description: '10 lbs of premium ground beef, perfect for family meals',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Pork Chops (4 pack)',
    category: 'meat',
    subcategory: 'pork',
    price: 19.99,
    description: 'Juicy, flavorful pork chops from our pasture-raised pigs',
    image: 'https://images.unsplash.com/photo-1529193594544-26d2890254c4?w=400&h=300&fit=crop',
    rating: 4.7,
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Bacon Slab',
    category: 'meat',
    subcategory: 'pork',
    price: 34.99,
    description: 'Thick-cut, naturally smoked bacon slab',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  // Branded Accessories
  {
    id: 5,
    name: 'Glenn Leigh Farms T-Shirt',
    category: 'accessories',
    subcategory: 'clothing',
    price: 24.99,
    description: 'Comfortable cotton t-shirt with our farm logo',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    rating: 4.6,
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: 'Farm Logo Mug',
    category: 'accessories',
    subcategory: 'drinkware',
    price: 14.99,
    description: 'Ceramic mug perfect for your morning coffee',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop',
    rating: 4.8,
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: 'Farmers Cap',
    category: 'accessories',
    subcategory: 'clothing',
    price: 19.99,
    description: 'Adjustable cap with embroidered farm logo',
    image: 'https://images.unsplash.com/photo-1588850568320-9cb8f8da4e3a?w=400&h=300&fit=crop',
    rating: 4.5,
    inStock: false,
    featured: false,
  },
  {
    id: 8,
    name: 'Premium Beef Jerky',
    category: 'meat',
    subcategory: 'beef',
    price: 12.99,
    description: 'Handcrafted beef jerky with our special seasoning',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
    rating: 4.7,
    inStock: true,
    featured: true,
  },
];

const categories = [
  { id: 'all', name: 'All Products', icon: Search },
  { id: 'meat', name: 'Meat Products', icon: Beef },
  { id: 'accessories', name: 'Branded Accessories', icon: Coffee },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useSeoMeta({
    title: 'Shop - Glenn Leigh Farms LLC',
    description: 'Shop our premium farm fresh meat products and branded accessories. Quality beef, pork, and farm merchandise available online.',
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">({rating})</span>
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-muted/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
              Farm Shop
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Premium quality meat products and farm-branded merchandise, delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-serif">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Featured</Badge>
                    {renderStars(product.rating)}
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm" disabled={!product.inStock}>
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Categories</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-2`}>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="mr-2 h-4 w-4" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="capitalize">
                          {product.subcategory}
                        </Badge>
                        {renderStars(product.rating)}
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        <Button size="sm" disabled={!product.inStock}>
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}