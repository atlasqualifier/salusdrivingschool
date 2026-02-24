import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Star,
  Calendar,
  Target,
  BookOpen,
  Shield
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CourseDetailsPage() {
  const { courseId } = useParams();

  const courseData: Record<string, any> = {
    beginner: {
      title: 'Beginner Driving Course',
      tagline: 'Your Journey to Confident Driving Starts Here',
      duration: '4 Weeks',
      lessons: '20 Lessons',
      level: 'Beginner',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1619662413798-367880946883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxOTMxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Our comprehensive beginner course is designed for those with little to no driving experience. We'll take you from your first time behind the wheel to confident, independent driving.',
      overview: 'This course covers all the fundamentals of driving, from understanding vehicle controls to navigating Abuja roads safely and confidently. You'll learn defensive driving techniques, proper road etiquette, and develop the skills needed to pass your driving test.',
      whatYouLearn: [
        'Vehicle familiarization - understanding all controls and features',
        'Starting, stopping, and smooth acceleration',
        'Steering techniques and vehicle positioning',
        'Gear changing and clutch control (manual transmission)',
        'Mirror usage and blind spot awareness',
        'Traffic rules and road signs in Nigeria',
        'Turning, lane changing, and merging safely',
        'Parking skills (parallel, reverse, bay parking)',
        'City driving in Abuja traffic',
        'Highway driving introduction',
        'Night driving basics',
        'Emergency procedures and hazard response',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Vehicle Controls & Basic Maneuvers', lessons: 5 },
        { week: 'Week 2', focus: 'City Driving & Traffic Navigation', lessons: 5 },
        { week: 'Week 3', focus: 'Advanced Skills & Highway Driving', lessons: 5 },
        { week: 'Week 4', focus: 'Test Preparation & Practice', lessons: 5 },
      ],
      requirements: [
        'Valid identification (National ID, Driver\'s License, or Passport)',
        'Minimum age of 18 years',
        'Basic understanding of English or Hausa',
        'Comfortable clothing and closed-toe shoes',
      ],
      rating: 4.9,
      students: '2500+',
    },
    defensive: {
      title: 'Defensive Driving Course',
      tagline: 'Drive Smart, Anticipate Danger, Stay Safe',
      duration: '2 Weeks',
      lessons: '10 Lessons',
      level: 'Intermediate',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1583430318790-38d740c8e008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nJTIwY291cnNlfGVufDF8fHx8MTc3MTkzMTE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced course focused on anticipating and avoiding potential hazards. Learn to drive defensively and handle challenging road conditions with confidence.',
      overview: 'This intermediate-level course teaches advanced driving techniques that go beyond basic skills. You'll learn to predict and respond to dangerous situations, drive safely in adverse conditions, and develop a defensive mindset.',
      whatYouLearn: [
        'Hazard perception and risk assessment',
        'Anticipating other drivers\' actions',
        'Emergency braking and evasive maneuvers',
        'Skid control and recovery techniques',
        'Driving in rain, fog, and adverse weather',
        'Night driving mastery',
        'Maintaining safe following distances',
        'Intersection safety strategies',
        'Dealing with aggressive drivers',
        'Vehicle breakdown procedures',
        'Advanced road positioning',
        'Accident avoidance techniques',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Hazard Awareness & Emergency Response', lessons: 5 },
        { week: 'Week 2', focus: 'Adverse Conditions & Advanced Safety', lessons: 5 },
      ],
      requirements: [
        'Valid driver\'s license',
        'Minimum 6 months driving experience',
        'Completion of basic driving course or equivalent',
      ],
      rating: 5.0,
      students: '1200+',
    },
    refresher: {
      title: 'Refresher Course',
      tagline: 'Rebuild Confidence, Refine Skills',
      duration: '1 Week',
      lessons: '5 Lessons',
      level: 'All Levels',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect for licensed drivers who haven\'t driven in a while or want to improve specific skills. Regain your confidence behind the wheel.',
      overview: 'This flexible course is tailored to your individual needs. Whether you\'re returning to driving after a break or want to sharpen specific skills, we\'ll create a personalized program just for you.',
      whatYouLearn: [
        'Comprehensive skills assessment',
        'Confidence-building exercises',
        'Modern road rules and updates',
        'Parking practice and perfection',
        'City driving navigation',
        'Highway merging and lane changes',
        'Roundabout navigation',
        'Reversing and maneuvering',
        'Focus on your specific concerns',
        'Updated traffic regulations',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Assessment, Practice & Skill Refinement', lessons: 5 },
      ],
      requirements: [
        'Valid or expired driver\'s license',
        'Previous driving experience',
      ],
      rating: 4.8,
      students: '800+',
    },
    corporate: {
      title: 'Corporate Driver Training',
      tagline: 'Professional Standards, Executive Service',
      duration: '3 Weeks',
      lessons: '15 Lessons',
      level: 'Professional',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1740859743702-e52ec69325c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Specialized training for corporate and executive drivers. Master professional driving standards, client service, and advanced safety protocols.',
      overview: 'This professional course prepares you for a career as a corporate driver. Learn the skills, etiquette, and standards expected in executive transportation.',
      whatYouLearn: [
        'Professional driving standards',
        'Executive client service',
        'Advanced safety and security protocols',
        'Route planning and navigation',
        'Time management for drivers',
        'Vehicle inspection and maintenance',
        'Professional appearance and conduct',
        'Passenger comfort and safety',
        'Confidentiality and discretion',
        'Emergency response procedures',
        'Defensive driving techniques',
        'Corporate etiquette',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Professional Standards & Client Service', lessons: 5 },
        { week: 'Week 2', focus: 'Advanced Driving & Safety', lessons: 5 },
        { week: 'Week 3', focus: 'Practical Application & Assessment', lessons: 5 },
      ],
      requirements: [
        'Valid driver\'s license',
        'Clean driving record',
        'Minimum 2 years driving experience',
      ],
      rating: 4.9,
      students: '500+',
    },
    interstate: {
      title: 'Interstate Driving Preparation',
      tagline: 'Master the Open Road',
      duration: '2 Weeks',
      lessons: '8 Lessons',
      level: 'Advanced',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1671198514584-5aaa823bae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGRyaXZpbmd8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Prepare for long-distance interstate travel. Learn highway driving mastery, navigation, and safety for cross-country journeys.',
      overview: 'This course prepares you for the unique challenges of interstate driving in Nigeria. From highway navigation to long-distance safety, you\'ll be ready for any journey.',
      whatYouLearn: [
        'Highway driving techniques',
        'High-speed vehicle control',
        'Long-distance driving strategies',
        'Fatigue management',
        'Route planning and navigation',
        'Interstate road rules',
        'Emergency preparedness',
        'Vehicle pre-trip inspection',
        'Fuel efficiency techniques',
        'Night driving on highways',
        'Rest stop planning',
        'Weather condition assessment',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Highway Mastery & Long-Distance Techniques', lessons: 4 },
        { week: 'Week 2', focus: 'Safety, Navigation & Practical Application', lessons: 4 },
      ],
      requirements: [
        'Valid driver\'s license',
        'Minimum 1 year driving experience',
        'Comfortable with highway driving',
      ],
      rating: 4.9,
      students: '600+',
    },
    advanced: {
      title: 'Advanced Skills Course',
      tagline: 'Master Every Driving Scenario',
      duration: '3 Weeks',
      lessons: '12 Lessons',
      level: 'Advanced',
      price: 'Contact for Pricing',
      image: 'https://images.unsplash.com/photo-1751655406956-72da5712926e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmVyJTIwZHJpdmVyJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Expert-level training for experienced drivers. Master advanced techniques, challenging conditions, and exceptional vehicle control.',
      overview: 'This advanced course is for experienced drivers who want to reach expert level. Learn techniques used by professional drivers and master every possible driving scenario.',
      whatYouLearn: [
        'Advanced vehicle control',
        'Precision maneuvering',
        'Challenging terrain navigation',
        'High-speed driving techniques',
        'Expert emergency procedures',
        'Performance driving basics',
        'Advanced road positioning',
        'Extreme weather driving',
        'Off-road basics',
        'Advanced parking techniques',
        'Vehicle dynamics understanding',
        'Professional-level skills',
      ],
      lessonBreakdown: [
        { week: 'Week 1', focus: 'Advanced Control & Precision', lessons: 4 },
        { week: 'Week 2', focus: 'Expert Techniques & Scenarios', lessons: 4 },
        { week: 'Week 3', focus: 'Mastery & Final Assessment', lessons: 4 },
      ],
      requirements: [
        'Valid driver\'s license',
        'Minimum 3 years driving experience',
        'Excellent driving record',
      ],
      rating: 5.0,
      students: '400+',
    },
  };

  const course = courseData[courseId || 'beginner'] || courseData.beginner;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
                <span className="text-accent font-semibold">{course.level} Level</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-2xl text-accent mb-6 font-semibold">
                {course.tagline}
              </p>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2 text-white">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Award className="w-5 h-5 text-accent" />
                  <span>{course.lessons}</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5 text-accent" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span>{course.rating} Rating</span>
                </div>
              </div>

              <Link
                to="/enroll"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg group"
              >
                <span>Enroll in This Course</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Course Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">What You'll Learn</h2>
              <p className="text-lg text-muted-foreground">
                This comprehensive course covers everything you need to know:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start space-x-3 bg-white p-4 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Lesson Breakdown</h2>
              <p className="text-lg text-muted-foreground">
                Structured learning path designed for maximum effectiveness
              </p>
            </motion.div>

            <div className="space-y-6">
              {course.lessonBreakdown.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-2xl text-white"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{item.week}</h3>
                    <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                      <BookOpen className="w-5 h-5" />
                      <span>{item.lessons} Lessons</span>
                    </div>
                  </div>
                  <p className="text-xl text-accent font-semibold">{item.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-12">Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.requirements.map((req: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white p-6 rounded-xl"
                  >
                    <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Enroll today and begin your journey to confident, skilled driving
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/enroll"
                className="px-10 py-5 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
              >
                Enroll Now
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold text-lg"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
