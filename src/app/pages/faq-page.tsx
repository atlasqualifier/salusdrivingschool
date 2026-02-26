import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'What are the requirements to enroll at Salus Driving Academy?',
          a: 'To enroll, you need to be at least 18 years old, have a valid form of identification (National ID, International Passport, or Driver\'s License), and be able to understand basic instructions in English or Hausa. No prior driving experience is required for beginner courses.',
        },
        {
          q: 'How long does it take to complete a course?',
          a: 'Course duration varies depending on the program. Our Beginner Course takes 4 weeks, Defensive Driving is 2 weeks, Refresher Course is 1 week, Corporate Training is 3 weeks, and Interstate Preparation is 2 weeks. Each program includes both theoretical and practical training.',
        },
        {
          q: 'Do you offer flexible scheduling?',
          a: 'Yes! We understand that everyone has different schedules. We offer morning (8AM-12PM), afternoon (12PM-4PM), evening (4PM-8PM), and weekend classes. You can choose the time that works best for you when you enroll.',
        },
        {
          q: 'Where is Salus Driving Academy located?',
          a: 'We are located at Austoma Filling Station, off Aminu Kano Crescent, Wuse 2, Abuja. We\'re easily accessible from all parts of Abuja and close to major landmarks like Wuse 2 Market.',
        },
      ],
    },
    {
      category: 'Driver\'s License & Testing',
      questions: [
        {
          q: 'Do you help with obtaining a driver\'s license?',
          a: 'Yes! We provide comprehensive preparation for the Nigerian driver\'s license test. Our course covers all the theory and practical skills needed to pass. We also guide you through the FRSC application process and requirements.',
        },
        {
          q: 'What is your success rate for students passing the driving test?',
          a: 'We\'re proud to have a 98% first-time pass rate. Our comprehensive training program ensures students are fully prepared for both the written and practical driving tests.',
        },
        {
          q: 'Can I take the driving test at your facility?',
          a: 'The official driving test is administered by the Federal Road Safety Corps (FRSC). However, we provide thorough test preparation and can accompany you to the testing center for support.',
        },
        {
          q: 'What if I fail my driving test?',
          a: 'While rare with our students, if you don\'t pass on your first attempt, we offer complimentary refresher lessons to help you improve in areas where you struggled. We\'re committed to your success.',
        },
      ],
    },
    {
      category: 'Courses & Training',
      questions: [
        {
          q: 'What\'s the difference between Beginner and Refresher courses?',
          a: 'The Beginner Course is for those with little to no driving experience and covers everything from basic controls to confident road driving. The Refresher Course is for licensed drivers who haven\'t driven in a while or want to improve specific skills.',
        },
        {
          q: 'Do you offer one-on-one training or group classes?',
          a: 'All our practical driving lessons are one-on-one with a certified instructor. This ensures personalized attention and faster learning. Theory classes may include small groups for interactive learning.',
        },
        {
          q: 'Can I choose my instructor?',
          a: 'While we carefully match students with instructors based on availability and needs, you can request a specific instructor or request a change if you feel it would improve your learning experience.',
        },
        {
          q: 'What happens if I miss a lesson?',
          a: 'We understand that life happens! If you need to miss a lesson, please notify us at least 24 hours in advance and we\'ll reschedule it for you at no extra charge. Last-minute cancellations may not be rescheduled.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How much do your courses cost?',
          a: 'Course pricing varies depending on the program. We offer competitive rates with flexible payment options. Contact us at 08035981433 or visit our office for detailed pricing information and current promotions.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes! We offer flexible payment plans to make driver education accessible to everyone. You can pay in installments throughout your course. Speak with our enrollment team for details.',
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No hidden fees! Our course fee includes all lessons, training materials, vehicle use, fuel, and instructor fees. The only additional costs would be FRSC testing fees (paid directly to FRSC) and optional extra practice sessions.',
        },
        {
          q: 'Do you offer discounts?',
          a: 'Yes! We offer discounts for early enrollment, referrals, corporate group bookings, and students. We also run seasonal promotions. Contact us to learn about current offers.',
        },
      ],
    },
    {
      category: 'Vehicles & Safety',
      questions: [
        {
          q: 'What type of vehicles do you use for training?',
          a: 'We maintain a modern fleet of well-serviced vehicles including both manual and automatic transmission cars. All our training vehicles are equipped with dual controls for maximum safety and have valid insurance.',
        },
        {
          q: 'Are your vehicles insured?',
          a: 'Absolutely! All our training vehicles carry comprehensive insurance coverage. Your safety is our top priority, and we maintain all required certifications and insurance.',
        },
        {
          q: 'Can I learn on an automatic transmission vehicle?',
          a: 'Yes! We offer training on both manual and automatic transmission vehicles. While we recommend learning manual first (as it makes you eligible for both license types), you can choose based on your preference.',
        },
        {
          q: 'How do you ensure student safety during lessons?',
          a: 'Safety is our #1 priority. All vehicles have dual controls allowing instructors to intervene if needed. We start in low-traffic areas and gradually progress. All instructors are certified and experienced in defensive driving techniques.',
        },
      ],
    },
    {
      category: 'Age & Eligibility',
      questions: [
        {
          q: 'What is the minimum age to enroll?',
          a: 'The minimum age to enroll is 18 years, which is the legal driving age in Nigeria. We strictly adhere to FRSC requirements for driver training and licensing.',
        },
        {
          q: 'Is there a maximum age limit?',
          a: 'No maximum age limit! We welcome students of all ages. We\'ve successfully trained students in their 60s and 70s. Our patient instructors adapt teaching methods to each student\'s learning pace.',
        },
        {
          q: 'Do I need any prior experience to enroll?',
          a: 'Not at all! Our Beginner Course is specifically designed for those with zero driving experience. We start from the very basics and build your skills progressively. If you have some experience, we can assess your level and recommend the appropriate course.',
        },
      ],
    },
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
              <span className="text-accent font-semibold">FAQ</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked<br />
              <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Find answers to common questions about our driving courses and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">{category.category}</h2>
                </motion.div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = faqs
                      .slice(0, categoryIndex)
                      .reduce((sum, cat) => sum + cat.questions.length, 0) + index;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left"
                        >
                          <span className="font-semibold text-primary pr-8">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6 text-accent flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-6">
                                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is ready to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-10 py-5 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
              >
                Contact Us
              </a>
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
