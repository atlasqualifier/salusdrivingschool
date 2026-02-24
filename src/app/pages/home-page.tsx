import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { 
  Shield, 
  Award, 
  Users, 
  Car, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety training with certified instructors',
    },
    {
      icon: Award,
      title: 'Certified Training',
      description: 'Government-approved curriculum and certification',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Experienced professionals dedicated to your success',
    },
    {
      icon: Car,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles equipped with dual controls',
    },
  ];

  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Driving Course',
      duration: '4 Weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1619662413798-367880946883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxOTMxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect for first-time learners. Master the basics of driving with our comprehensive beginner program.',
    },
    {
      id: 'defensive',
      title: 'Defensive Driving',
      duration: '2 Weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1671198514584-5aaa823bae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGRyaXZpbmd8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced techniques to anticipate and react to potential hazards on the road.',
    },
    {
      id: 'refresher',
      title: 'Refresher Course',
      duration: '1 Week',
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Refresh your skills and boost confidence for drivers returning to the road.',
    },
  ];

  const testimonials = [
    {
      name: 'Chioma Okafor',
      role: 'New Driver',
      rating: 5,
      text: 'Salus Driving Academy made learning to drive enjoyable and stress-free. The instructors are patient and professional!',
      image: 'https://images.unsplash.com/photo-1604447199408-9798f9f64f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXIlMjBwYXNzZWQlMjB0ZXN0fGVufDF8fHx8MTc3MTkzMTA1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Ibrahim Musa',
      role: 'Corporate Driver',
      rating: 5,
      text: 'The defensive driving course was exactly what I needed. I feel much more confident navigating Abuja roads now.',
      image: 'https://images.unsplash.com/photo-1767022705480-1266a3865c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4MzU4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Blessing Adeyemi',
      role: 'Refresher Student',
      rating: 5,
      text: 'Best driving school in Abuja! Modern cars, excellent facilities, and instructors who truly care about your success.',
      image: 'https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hpbmclMjBkcml2aW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzE5MzEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '20+', label: 'Expert Instructors' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Animated Car */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1920')",
        }}
      >
        {/* Animated Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </motion.div>

        {/* Road Lines Animation */}
        <div className="absolute left-1/4 top-0 bottom-0 w-2 road-line-animation opacity-30" />
        <div className="absolute right-1/4 top-0 bottom-0 w-2 road-line-animation opacity-30" style={{ animationDelay: '1s' }} />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30"
              >
                <span className="text-accent font-semibold">🏆 Abuja's #1 Driving Academy</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Drive with Confidence.<br />
                <span className="text-accent">Drive with Salus.</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional driving education designed to make you a safe, skilled, and confident driver on Nigerian roads.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/enroll"
                  className="px-8 py-4 bg-accent text-primary rounded-xl font-semibold hover:bg-accent-light transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 flex items-center space-x-2 group"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View Courses
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Animated Car */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100vw' }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-32 left-0 w-32 h-16 opacity-30"
            >
              <svg viewBox="0 0 128 64" className="w-full h-full text-accent">
                <path
                  fill="currentColor"
                  d="M20,40 L30,20 L70,20 L80,40 L20,40 M15,40 Q10,40 10,45 Q10,50 15,50 L25,50 Q30,50 30,45 Q30,40 25,40 M70,40 Q65,40 65,45 Q65,50 70,50 L80,50 Q85,50 85,45 Q85,40 80,40"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Salus Driving Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just teaching you to drive—we're building confident, responsible drivers for life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive driving programs tailored to your skill level and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-accent text-primary rounded-full font-semibold text-sm">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{course.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                    <div className="flex space-x-3">
                      <Link
                        to={`/courses/${course.id}`}
                        className="flex-1 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-light transition-all text-center"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/enroll"
                        className="flex-1 px-4 py-2.5 bg-accent text-primary rounded-lg hover:bg-accent-light transition-all text-center font-semibold"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-light transition-all font-semibold group"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the CEO Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="/Salus%20Images/CEO%20IMAGE.bgblur.jpg"
                    alt="Mr. Destiny Sunday Ameh background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10">
                    <ImageWithFallback
                      src="/Salus%20Images/CEO%20IMAGE.jpg"
                      alt="Mr. Destiny Sunday Ameh"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-8">
                      <h3 className="text-2xl font-bold mb-1">Mr. Destiny Sunday Ameh</h3>
                      <p className="text-accent font-semibold">Founder and Proprietor</p>
                    </div>
                  </div>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership with Vision & Expertise
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                With over 15 years of experience in driver education, Mr. Destiny Sunday Ameh founded Salus Driving Academy with a clear mission: to create the safest, most competent drivers in Nigeria.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                His dedication to excellence and passion for road safety has transformed thousands of lives, making Salus the most trusted driving school in Abuja and beyond.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Certified Master Driving Instructor',
                  'Road Safety Advocate',
                  '15+ Years in Driver Education',
                  'Trained 5000+ Successful Drivers',
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-white/90">{achievement}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all font-semibold group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real success stories from real students who learned to drive with confidence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-light transition-all font-semibold group"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-accent via-accent-light to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Driving Journey?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Join thousands of successful students who learned to drive with confidence at Salus Driving Academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/enroll"
                className="px-10 py-5 bg-primary text-white rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg group"
              >
                <span>Enroll Today</span>
              </Link>
              <a
                href="tel:08035981433"
                className="px-10 py-5 bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                Call: 08035981433
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
