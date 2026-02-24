import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { Clock, Users, Award, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CoursesPage() {
  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Driving Course',
      tagline: 'Start Your Driving Journey',
      duration: '4 Weeks',
      lessons: '20 Lessons',
      level: 'Beginner',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1619662413798-367880946883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxOTMxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect for first-time learners. This comprehensive course covers everything from basic controls to confident road driving.',
      includes: [
        'Vehicle familiarization and controls',
        'Basic driving techniques',
        'Road rules and regulations',
        'Parking skills (parallel, reverse, bay)',
        'City driving practice',
        'Highway driving introduction',
      ],
      rating: 4.9,
      students: '2500+',
    },
    {
      id: 'defensive',
      title: 'Defensive Driving Course',
      tagline: 'Drive Smart, Drive Safe',
      duration: '2 Weeks',
      lessons: '10 Lessons',
      level: 'Intermediate',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1583430318790-38d740c8e008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nJTIwY291cnNlfGVufDF8fHx8MTc3MTkzMTE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced techniques to anticipate and avoid potential hazards. Learn to drive defensively in challenging conditions.',
      includes: [
        'Hazard perception and anticipation',
        'Emergency braking techniques',
        'Adverse weather driving',
        'Night driving skills',
        'Accident avoidance strategies',
        'Advanced road positioning',
      ],
      rating: 5.0,
      students: '1200+',
    },
    {
      id: 'refresher',
      title: 'Refresher Course',
      tagline: 'Rebuild Your Confidence',
      duration: '1 Week',
      lessons: '5 Lessons',
      level: 'All Levels',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'For licensed drivers who haven\'t driven in a while or want to improve specific skills and rebuild confidence.',
      includes: [
        'Skills assessment',
        'Confidence building exercises',
        'Parking practice',
        'Modern road rules update',
        'City and highway practice',
        'Personalized focus areas',
      ],
      rating: 4.8,
      students: '800+',
    },
    {
      id: 'corporate',
      title: 'Corporate Driver Training',
      tagline: 'Professional Excellence',
      duration: '3 Weeks',
      lessons: '15 Lessons',
      level: 'Professional',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1740859743702-e52ec69325c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Specialized training for corporate drivers. Learn professional driving standards, client service, and vehicle maintenance.',
      includes: [
        'Professional driving standards',
        'Client service excellence',
        'Advanced safety protocols',
        'Route planning and navigation',
        'Vehicle maintenance basics',
        'Corporate etiquette',
      ],
      rating: 4.9,
      students: '500+',
    },
    {
      id: 'interstate',
      title: 'Interstate Driving Preparation',
      tagline: 'Master Long-Distance Travel',
      duration: '2 Weeks',
      lessons: '8 Lessons',
      level: 'Advanced',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1671198514584-5aaa823bae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGRyaXZpbmd8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Prepare for interstate travel with highway driving techniques, long-distance safety, and navigation skills.',
      includes: [
        'Highway driving mastery',
        'Long-distance driving techniques',
        'Fatigue management',
        'Navigation and route planning',
        'Emergency preparedness',
        'Interstate road rules',
      ],
      rating: 4.9,
      students: '600+',
    },
    {
      id: 'advanced',
      title: 'Advanced Skills Course',
      tagline: 'Master Every Situation',
      duration: '3 Weeks',
      lessons: '12 Lessons',
      level: 'Advanced',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1751655406956-72da5712926e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmVyJTIwZHJpdmVyJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced driving techniques for experienced drivers who want to master challenging conditions and scenarios.',
      includes: [
        'Advanced maneuvering',
        'Challenging terrain navigation',
        'High-speed driving techniques',
        'Advanced emergency procedures',
        'Performance driving basics',
        'Expert road positioning',
      ],
      rating: 5.0,
      students: '400+',
    },
  ];

  const benefits = [
    'Government-approved curriculum',
    'Certified professional instructors',
    'Modern, well-maintained vehicles',
    'Flexible scheduling options',
    'Practical road experience',
    'Post-course support',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
              <span className="text-accent font-semibold">Our Courses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Choose Your Perfect<br />
              <span className="text-accent">Driving Course</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              From beginner to advanced, we have the right program to help you become a confident, skilled driver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
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
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-accent text-primary rounded-full font-semibold text-sm shadow-lg">
                      {course.level}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{course.title}</h3>
                      <p className="text-accent text-sm font-semibold">{course.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="font-semibold text-primary">{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {course.description}
                    </p>

                    {/* Course Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Award className="w-4 h-4" />
                          <span>{course.lessons}</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">{course.price}</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3">
                      <Link
                        to={`/courses/${course.id}`}
                        className="flex-1 px-4 py-3 bg-muted text-primary rounded-xl hover:bg-muted/80 transition-all text-center font-semibold group/btn"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                      <Link
                        to="/enroll"
                        className="flex-1 px-4 py-3 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all text-center font-semibold shadow-lg hover:shadow-accent/50"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, practical training designed for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Structured Curriculum',
                description: 'Carefully designed programs that build skills progressively',
                icon: '📚',
              },
              {
                title: 'Practical Experience',
                description: 'Real-world driving on Abuja roads and highways',
                icon: '🚗',
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from certified professionals with years of experience',
                icon: '👨‍🏫',
              },
              {
                title: 'Flexible Schedule',
                description: 'Choose times that work for your busy lifestyle',
                icon: '⏰',
              },
              {
                title: 'Modern Vehicles',
                description: 'Train in well-maintained cars with dual controls',
                icon: '🔧',
              },
              {
                title: 'High Success Rate',
                description: '98% of students pass on their first attempt',
                icon: '🎯',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-muted rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation. We'll help you find the perfect course for your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-5 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
              >
                Contact Us
              </Link>
              <a
                href="tel:08035981433"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold text-lg"
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
