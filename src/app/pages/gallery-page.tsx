import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function GalleryPage() {
  const galleryImages = [
    // Student pictures (public)
    { src: '/public/student-pictures/1771930047944.jpg', title: 'Student 1', category: 'Students' },
    { src: '/public/student-pictures/1771930099009.jpg', title: 'Student 2', category: 'Students' },
    { src: '/public/student-pictures/1771930101160.jpg', title: 'Student 3', category: 'Students' },
    { src: '/public/student-pictures/1771930108625.jpg', title: 'Student 4', category: 'Students' },
    { src: '/public/student-pictures/1771930126251.jpg', title: 'Student 5', category: 'Students' },

    // Training pictures
    { src: '/public/training-pictures/IMG-20260224-WA0019.jpg', title: 'Training 1', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0020.jpg', title: 'Training 2', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0021.jpg', title: 'Training 3', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0022.jpg', title: 'Training 4', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0023.jpg', title: 'Training 5', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0024.jpg', title: 'Training 6', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0029.jpg', title: 'Training 7', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0032.jpg', title: 'Training 8', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0033.jpg', title: 'Training 9', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0034.jpg', title: 'Training 10', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0035.jpg', title: 'Training 11', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0036.jpg', title: 'Training 12', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0037.jpg', title: 'Training 13', category: 'Training' },
    { src: '/public/training-pictures/IMG-20260224-WA0038.jpg', title: 'Training 14', category: 'Training' },

    // Team pictures
    { src: '/public/team-pictures/IMG-20260224-WA0001.jpg', title: 'Team 1', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0004.jpg', title: 'Team 2', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0008.jpg', title: 'Team 3', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0011.jpg', title: 'Team 4', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0012.jpg', title: 'Team 5', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0013.jpg', title: 'Team 6', category: 'Team' },
    { src: '/public/team-pictures/IMG-20260224-WA0028.jpg', title: 'Team 7', category: 'Team' },
    { src: '/public/team-pictures/CEO%20IMAGE.jpg', title: 'CEO', category: 'Team' },
  ];

  const categories = ['All', 'Fleet', 'Training', 'Practice', 'Theory', 'Students', 'Team'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
              <span className="text-accent font-semibold">Gallery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience Salus<br />
              <span className="text-accent">In Pictures</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Take a visual tour of our modern facilities, training vehicles, and successful students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-accent text-primary rounded-full text-xs font-semibold mb-2">
                      {image.category}
                    </div>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Become part of the Salus family and start your driving journey today
            </p>
            <a
              href="/enroll"
              className="inline-block px-10 py-5 bg-primary text-white rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg"
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