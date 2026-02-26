import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { CheckCircle, User, Phone, Mail, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function EnrollmentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    schedule: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message with form fields
    const msgLines = [
      'New enrollment request from Salus Driving Academy',
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Course: ${formData.course}`,
      `Preferred Schedule: ${formData.schedule}`,
      `Message: ${formData.message || '-'}`,
    ];
    const message = msgLines.join('\n');

    // WhatsApp number (Nigeria): 2348035981433 (remove leading 0)
    const waNumber = '2348035981433';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab (or app on mobile)
    window.open(waUrl, '_blank');

    // Provide UI feedback
    setIsSubmitted(true);

    // Clear form after a short delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        course: '',
        schedule: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const courses = [
    'Beginner Driving Course',
    'Defensive Driving Course',
    'Refresher Course',
    'Corporate Driver Training',
    'Interstate Driving Preparation',
    'Advanced Skills Course',
  ];

  const schedules = [
     'Morning: 7am',
    'Morning: 8am',
    'Morning: 9am',
    'Morning: 10am',
    'Morning: 11am',
    'Afternoon: 12pm',
    'Afternoon: 1pm',
    'Afternoon: 2pm',
    'Afternoon: 3pm',
    'Evening: 4pm',
    'Evening: 5pm',
    'Weekend (Saturday & Sunday)',
    'Flexible Schedule',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
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
              <span className="text-accent font-semibold">Enrollment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Start Your Driving<br />
              <span className="text-accent">Journey Today</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Fill out the form below and we'll contact you within 24 hours to confirm your enrollment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Benefits Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">
                  What You Get
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: '🎓',
                      title: 'Expert Training',
                      description: 'Learn from certified instructors',
                    },
                    {
                      icon: '🚗',
                      title: 'Modern Vehicles',
                      description: 'Train in well-maintained cars',
                    },
                    {
                      icon: '📅',
                      title: 'Flexible Schedule',
                      description: 'Choose times that work for you',
                    },
                    {
                      icon: '✅',
                      title: 'High Success Rate',
                      description: '98% pass on first attempt',
                    },
                    {
                      icon: '🏆',
                      title: 'Certification',
                      description: 'Receive official completion certificate',
                    },
                    {
                      icon: '🤝',
                      title: 'Ongoing Support',
                      description: 'Help even after course completion',
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-muted rounded-xl"
                    >
                      <div className="text-3xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enrollment Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2"
              >
                <div className="bg-muted rounded-3xl p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-primary mb-8">
                    Enrollment Form
                  </h3>

                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {/* Full Name */}
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                              placeholder="08012345678"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        {/* Course Selection */}
                        <div>
                          <label htmlFor="course" className="block text-sm font-semibold text-primary mb-2">
                            Select Course *
                          </label>
                          <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                          >
                            <option value="">Choose a course...</option>
                            {courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Schedule Preference */}
                        <div>
                          <label htmlFor="schedule" className="block text-sm font-semibold text-primary mb-2">
                            Preferred Schedule *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <select
                              id="schedule"
                              name="schedule"
                              value={formData.schedule}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors appearance-none"
                            >
                              <option value="">Choose your preferred time...</option>
                              {schedules.map((schedule) => (
                                <option key={schedule} value={schedule}>
                                  {schedule}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                            Additional Information (Optional)
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                              placeholder="Any specific requirements or questions?"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-8 py-5 bg-gradient-to-r from-accent to-accent-light text-primary rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all flex items-center justify-center space-x-2 group"
                        >
                          <span>Submit Enrollment</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <p className="text-sm text-muted-foreground text-center">
                          By submitting this form, you agree to be contacted by Salus Driving Academy regarding your enrollment.
                        </p>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', duration: 0.6 }}
                          className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle className="w-12 h-12 text-white" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-primary mb-4">
                          Enrollment Submitted!
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Thank you for choosing Salus Driving Academy. We'll contact you within 24 hours to confirm your enrollment and schedule.
                        </p>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            <strong>What's Next?</strong>
                          </p>
                          <div className="space-y-2 text-left max-w-md mx-auto">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                              <p className="text-muted-foreground">We'll review your enrollment</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                              <p className="text-muted-foreground">Our team will call you to confirm details</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                              <p className="text-muted-foreground">Start your driving journey with us!</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help. Contact us directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">            <p className="mb-4 text-white/90">
              Head Office: Austoma Filling Station, off Aminu Kano Crescent, Wuse 2, Abuja
            </p>              <a
                href="tel:08035981433"
                className="px-8 py-4 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all font-semibold shadow-lg"
              >
                📞 Call: 08035981433
              </a>
              <a
                href="mailto:salusdrivingacademy20@gmail.com"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 font-semibold"
              >
                ✉️ Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
