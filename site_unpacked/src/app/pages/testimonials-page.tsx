import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Chioma Okafor',
      role: 'New Driver',
      course: 'Beginner Driving Course',
      rating: 5,
      text: 'Salus Driving Academy exceeded all my expectations! I was terrified of driving before, but my instructor was so patient and encouraging. After completing the beginner course, I passed my driving test on the first try. The training was comprehensive, the vehicles were modern, and the entire team made me feel comfortable. I highly recommend Salus to anyone looking to learn to drive in Abuja!',
      image: 'https://images.unsplash.com/photo-1604447199408-9798f9f64f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXIlMjBwYXNzZWQlMjB0ZXN0fGVufDF8fHx8MTc3MTkzMTA1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'January 2024',
    },
    {
      name: 'Ibrahim Musa',
      role: 'Corporate Driver',
      course: 'Corporate Driver Training',
      rating: 5,
      text: 'As a professional driver, I needed to upgrade my skills for corporate work. The Corporate Driver Training at Salus was exactly what I needed. I learned professional etiquette, advanced safety protocols, and client service excellence. The instructors are truly experienced professionals. Thanks to Salus, I secured a great position with an international company. Worth every kobo!',
      image: 'https://images.unsplash.com/photo-1767022705480-1266a3865c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4MzU4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'December 2023',
    },
    {
      name: 'Blessing Adeyemi',
      role: 'Refresher Student',
      course: 'Refresher Course',
      rating: 5,
      text: 'I hadn\'t driven in over 5 years and was very nervous about getting back behind the wheel. The Refresher Course at Salus was perfect for rebuilding my confidence. They assessed my skills and focused on exactly what I needed to improve. Within a week, I was driving confidently again. The modern fleet and experienced instructors make all the difference. Best driving school in Abuja!',
      image: 'https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hpbmclMjBkcml2aW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzE5MzEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'February 2024',
    },
    {
      name: 'Emeka Okonkwo',
      role: 'Beginner Driver',
      course: 'Beginner Driving Course',
      rating: 5,
      text: 'From zero experience to confident driver in just 4 weeks! Salus Driving Academy is the real deal. The instructors know their stuff and the training is very practical - we spent lots of time on real Abuja roads, not just empty parking lots. I learned defensive driving, parking, highway driving, everything. Passed my test first time with flying colors. Thank you Salus!',
      image: 'https://images.unsplash.com/photo-1751655406956-72da5712926e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmVyJTIwZHJpdmVyJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'March 2024',
    },
    {
      name: 'Fatima Abubakar',
      role: 'Defensive Driving Graduate',
      course: 'Defensive Driving Course',
      rating: 5,
      text: 'The Defensive Driving Course transformed how I approach driving. I learned to anticipate hazards, handle emergencies, and drive safely in all conditions. The night driving training was especially valuable. Salus instructors are patient, knowledgeable, and genuinely care about making you a better driver. I feel so much safer on Abuja roads now. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1619662413798-367880946883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxOTMxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'November 2023',
    },
    {
      name: 'David Ogunleye',
      role: 'Interstate Driver',
      course: 'Interstate Driving Preparation',
      rating: 5,
      text: 'I needed to learn interstate driving for my new job and Salus prepared me perfectly. The course covered highway navigation, long-distance safety, fatigue management - everything. We even practiced on actual interstate routes. My instructor was an experienced long-distance driver who shared invaluable real-world tips. Now I confidently drive from Abuja to Lagos regularly. Thank you Salus!',
      image: 'https://images.unsplash.com/photo-1671198514584-5aaa823bae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGRyaXZpbmd8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'October 2023',
    },
    {
      name: 'Grace Eze',
      role: 'First-Time Driver',
      course: 'Beginner Driving Course',
      rating: 5,
      text: 'I was 45 years old and had never driven before. I thought I was too old to learn, but Salus proved me wrong! My instructor was incredibly patient and supportive. They adapted the lessons to my pace and never made me feel rushed. The training vehicles are in excellent condition with dual controls for safety. I got my license and now drive confidently. Never too old to learn!',
      image: 'https://images.unsplash.com/photo-1660153711902-c149a38587ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdGVlcmluZyUyMHdoZWVsJTIwaGFuZHN8ZW58MXx8fHwxNzcxOTMxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'January 2024',
    },
    {
      name: 'Mohammed Bello',
      role: 'Advanced Skills Student',
      course: 'Advanced Skills Course',
      rating: 5,
      text: 'Already an experienced driver, I wanted to master advanced techniques. The Advanced Skills Course at Salus took my driving to the next level. Learned precision maneuvering, challenging terrain navigation, and expert emergency procedures. The instructors are highly skilled professionals who pushed me to excel. Now I handle any driving situation with confidence. Best investment in my driving career!',
      image: 'https://images.unsplash.com/photo-1583430318790-38d740c8e008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nJTIwY291cnNlfGVufDF8fHx8MTc3MTkzMTE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'December 2023',
    },
    {
      name: 'Amina Yusuf',
      role: 'Young Professional',
      course: 'Beginner Driving Course',
      rating: 5,
      text: 'Just graduated from university and needed to learn to drive for my new job. Salus made it easy with flexible scheduling that worked around my work hours. The lessons were well-structured, starting with basics and building up systematically. Instructors were professional yet friendly, making learning fun. Passed my test first attempt and now drive to work daily. Couldn\'t have done it without Salus!',
      image: 'https://images.unsplash.com/photo-1748069037259-aac288675284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwcHJhY3RpY2UlMjBjYXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzE5MzExODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'February 2024',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Happy Students' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Success Rate' },
    { number: '100%', label: 'Satisfaction' },
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
              <span className="text-accent font-semibold">Testimonials</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories from<br />
              <span className="text-accent">Our Students</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Real reviews from real people who learned to drive with confidence at Salus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Quote className="w-12 h-12 text-accent opacity-50" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-primary text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                        <p className="text-xs text-accent font-semibold">{testimonial.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Join thousands of successful students and start your driving journey today
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
