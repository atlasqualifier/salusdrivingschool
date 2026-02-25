import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { 
  Target, 
  Eye, 
  Award, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CEOImage from '../../../CEO IMAGE.jpg';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority in every aspect of training',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in driving education',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all we do',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Using modern teaching methods and technology',
    },
  ];

  const certifications = [
    'Federal Road Safety Corps (FRSC) Approved',
    'National Automotive Design & Development Council (NADDC) Certified',
    'ISO 9001:2015 Quality Management',
    'Professional Driver Training Association Member',
  ];

  const milestones = [
    { year: '2021', title: 'Foundation', description: 'Salus Driving Academy established in Abuja' },
    { year: '2022', title: 'Expansion', description: 'Opened second training facility' },
    { year: '2024', title: 'Recognition', description: "Awarded 'Best Driving School in FCT'" },
    { year: '2026', title: 'Leadership', description: '5000+ successful students trained' },
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
              <span className="text-accent font-semibold">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Confident Drivers<br />
              <span className="text-accent">Since 2021</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Salus Driving Academy is Abuja's premier driving school, dedicated to creating safe, skilled, and confident drivers through world-class training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2021 by Mr. Destiny Sunday Ameh, Salus Driving Academy has grown to become the most trusted name in driver education across Abuja and the Federal Capital Territory.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We combine years of professional experience with modern teaching techniques to deliver comprehensive, practical, and effective driving courses. Our state-of-the-art facilities, experienced instructors, and well-maintained fleet ensure every student receives the highest quality training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Wuse 2, we serve students from all across Abuja, offering flexible scheduling, personalized instruction, and a commitment to road safety that sets us apart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619662413798-367880946883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxOTMxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Driving training"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hpbmclMjBkcml2aW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzE5MzEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Instructor teaching"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Steering wheel"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1671198514584-5aaa823bae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGRyaXZpbmd8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Highway driving"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
                <span className="text-accent font-semibold">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mr. Destiny Sunday Ameh
              </h2>
              <p className="text-xl text-accent mb-4 font-semibold">
                Founder and Proprietor
              </p>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                A visionary leader with over 15 years of experience in driver education and road safety advocacy. Mr. Ameh founded Salus Driving Academy with a passion for creating safer roads through quality driver training.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                His dedication to excellence and innovative approach to teaching has helped thousands of students become confident, responsible drivers. Under his leadership, Salus has become Abuja's most trusted driving academy.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Qualifications & Achievements</h4>
                {[
                  'Certified Master Driving Instructor',
                  'FRSC Advanced Driving Certificate',
                  '15+ Years in Driver Education',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative lg:pl-8">
                <div className="hidden lg:block absolute inset-0 bg-accent/20 rounded-3xl transform -rotate-3" />
                <div className="flex items-center justify-center">
                  <ImageWithFallback
                    src="/team-pictures/CEO%20IMAGE.jpg"
                    alt="Mr. Destiny Sunday Ameh"
                    className="rounded-3xl shadow-2xl w-full max-w-xs h-[420px] object-cover bg-white"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-light p-12 rounded-3xl text-white shadow-2xl"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide world-class driver education that creates safe, skilled, and confident drivers who contribute to safer roads in Nigeria. We're committed to excellence in every lesson, every student, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-secondary-light p-12 rounded-3xl text-white shadow-2xl"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be Nigeria's leading driving academy, recognized for excellence in driver education, innovation in training methods, and unwavering commitment to road safety across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate removed per request */}

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-muted rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Salus Stands Out */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Salus in Abuja?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes us the preferred choice for driving education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strategic Location',
                description: 'Conveniently located in Wuse 2, easily accessible from all parts of Abuja',
                icon: '📍',
              },
              {
                title: 'Modern Fleet',
                description: 'Well-maintained vehicles with dual controls for maximum safety',
                icon: '🚗',
              },
              {
                title: 'Experienced Instructors',
                description: '20+ certified professionals with years of teaching experience',
                icon: '👨‍🏫',
              },
              {
                title: 'Flexible Scheduling',
                description: 'Morning, afternoon, evening, and weekend classes available',
                icon: '⏰',
              },
              {
                title: 'Practical Training',
                description: 'Real-world driving experience on Abuja roads and highways',
                icon: '🛣️',
              },
              {
                title: 'Affordable Pricing',
                description: 'Competitive rates with flexible payment options',
                icon: '💰',
              },
              {
                title: 'High Success Rate',
                description: '98% of our students pass their driving test on first attempt',
                icon: '🎯',
              },
              {
                title: 'Post-Training Support',
                description: 'Continued guidance even after course completion',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-4 p-6 bg-muted rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognized and certified by leading authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-primary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped Salus Driving Academy
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </>
                  )}
                </div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-accent/30" />
                  )}
                </div>
                <div className="flex-1 pl-8">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent via-accent-light to-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Join the Salus Family Today
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Experience the difference of learning with Abuja's most trusted driving academy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/enroll"
                className="px-10 py-5 bg-primary text-white rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
              >
                Enroll Now
              </Link>
              <Link
                to="/courses"
                className="px-10 py-5 bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
