import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-secondary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-accent leading-none mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wrong Turn!
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Looks like you've taken a wrong turn. This page doesn't exist.
            </p>
            <p className="text-lg text-white/80">
              Don't worry—even the best drivers make wrong turns sometimes. Let's get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold flex items-center space-x-2 group"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
            <a
              href="tel:08035981433"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Courses', path: '/courses' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Enroll', path: '/enroll' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-accent transition-colors font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Car */}
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: '100vw' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-8 left-0 opacity-20"
        >
          <svg viewBox="0 0 128 64" className="w-32 h-16 text-accent">
            <path
              fill="currentColor"
              d="M20,40 L30,20 L70,20 L80,40 L20,40 M15,40 Q10,40 10,45 Q10,50 15,50 L25,50 Q30,50 30,45 Q30,40 25,40 M70,40 Q65,40 65,45 Q65,50 70,50 L80,50 Q85,50 85,45 Q85,40 80,40"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
