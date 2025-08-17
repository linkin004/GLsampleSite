import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Where to Find Us', href: '/where-to-find-us' },
    { name: 'About Us', href: '/about-us' },
  ] as NavigationItem[],
  support: [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ] as NavigationItem[],
  connect: [
    { name: 'Blog', href: '/blog' },
    { name: 'Facebook', href: 'https://facebook.com/glennleighfarms', external: true },
    { name: 'Instagram', href: 'https://instagram.com/glennleighfarms', external: true },
  ] as NavigationItem[],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://facebook.com/glennleighfarms" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/glennleighfarms" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/glennleighfarms" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex justify-center space-x-6 md:justify-start">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold font-serif text-foreground">Glenn Leigh Farms LLC</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Connect</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <li key={item.name}>
                    {item.external ? (
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Contact Info</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">123 Farm Road, Countryside, ST 12345</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">info@glennleighfarms.com</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
            &copy; 2025 Glenn Leigh Farms LLC. All rights reserved. Vibed with <a href="https://soapbox.pub/mkstack" className="hover:text-primary" target="_blank" rel="noopener noreferrer">MKStack</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}