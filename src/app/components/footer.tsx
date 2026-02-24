import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative road line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <span className="font-bold text-primary text-2xl">S</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Salus</h3>
                <p className="text-accent text-sm">Driving Academy</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner for professional driving education in Abuja. We're committed to making safe, confident drivers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Courses', path: '/courses' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Testimonials', path: '/testimonials' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {[
                'Beginner Driving',
                'Defensive Driving',
                'Refresher Course',
                'Corporate Training',
                'Interstate Preparation',
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Suite 211, His Glory Plaza,<br />
                  Sedafu Close, Off Ademola Adetokunbo Crescent,<br />
                  Wuse 2, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:08035981433" className="text-white/80 hover:text-accent transition-colors text-sm">
                  08035981433
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@salusdriving.com" className="text-white/80 hover:text-accent transition-colors text-sm">
                  info@salusdriving.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Salus Driving Academy. All rights reserved. | CEO: Mr. Destiny Sunday Ameh
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-accent/50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
