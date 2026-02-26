import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Suite 211, His Glory Plaza',
        'Sedafu Close, Off Ademola Adetokunbo Crescent',
        'Wuse 2, Abuja, Nigeria',
      ],
      color: 'from-accent to-accent-light',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['08035981433', 'Available 24/7'],
      color: 'from-secondary to-secondary-light',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['salusdrivingacademy20@gmail.com', 'Response within 24 hours'],
      color: 'from-primary to-primary-light',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 4PM', 'Sun: Closed'],
      color: 'from-success to-green-500',
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
              <span className="text-accent font-semibold">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch<br />
              <span className="text-accent">We're Here to Help</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions? Need more information? Reach out to us anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-muted rounded-2xl p-8 group-hover:bg-transparent transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-white transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground group-hover:text-white/90 transition-colors">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="08012345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="enrollment">Enrollment Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="pricing">Pricing & Payment</option>
                      <option value="schedule">Scheduling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 bg-gradient-to-r from-accent to-accent-light text-primary rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office in Wuse 2, Abuja
              </p>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://maps.google.com/maps?q=Austoma%20Filling%20Station%20off%20Aminu%20Kano%20Crescent%20Wuse%202%20Abuja&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salus Driving Academy Location"
                />
              </div>
              <div className="mt-6 bg-white rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-4">Location Details</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Austoma Filling Station</strong>, off Aminu Kano Crescent</p>
                  <p>Wuse 2, Abuja, Nigeria</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <strong>Landmarks:</strong> Near Wuse 2 Market, close to Federal Capital Development Authority (FCDA)
                    </p>
                  </div>
                </div>
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful students at Salus Driving Academy
            </p>
            <a
              href="/enroll"
              className="inline-block px-10 py-5 bg-accent text-primary rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
            >
              Enroll Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
