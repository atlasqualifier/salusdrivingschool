import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function GalleryPage() {
  const galleryImages = [
    { src: '/Salus%20Images/IMG-20260224-WA0001.jpg', title: 'Facility Exterior', category: 'Fleet' },
    { src: '/Salus%20Images/IMG-20260224-WA0004.jpg', title: 'Training Session', category: 'Training' },
    { src: '/Salus%20Images/IMG-20260224-WA0008.jpg', title: 'Instructor Demo', category: 'Training' },
    { src: '/Salus%20Images/IMG-20260224-WA0011.jpg', title: 'Parking Skills', category: 'Practice' },
    { src: '/Salus%20Images/IMG-20260224-WA0012.jpg', title: 'Night Driving Training', category: 'Training' },
    { src: '/Salus%20Images/IMG-20260224-WA0013.jpg', title: 'Road Signs Education', category: 'Theory' },
    
    {
      src: 'https://images.unsplash.com/photo-1751655406956-72da5712926e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmVyJTIwZHJpdmVyJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzcxOTMxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Student Practice Session',
      category: 'Practice',
    },
    {
      src: 'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE5MDgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Car Interior',
      category: 'Fleet',
    },
    {
      src: 'https://images.unsplash.com/photo-1711574254532-ffb4d05976a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwcGFya2VkJTIwdXJiYW58ZW58MXx8fHwxNzcxOTMxMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Urban Driving Practice',
      category: 'Practice',
    },
    {
      src: 'https://images.unsplash.com/photo-1768862034751-497a74e9d756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY3VydmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MTkzMTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Road Navigation',
      category: 'Training',
    },
    {
      src: 'https://images.unsplash.com/photo-1604447199408-9798f9f64f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBkcml2ZXIlMjBwYXNzZWQlMjB0ZXN0fGVufDF8fHx8MTc3MTkzMTA1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Success Stories',
      category: 'Students',
    },
    {
      src: 'https://images.unsplash.com/photo-1767022705480-1266a3865c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4MzU4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Professional Instructor',
      category: 'Team',
    },
    {
      src: 'https://images.unsplash.com/photo-1583430318790-38d740c8e008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nJTIwY291cnNlfGVufDF8fHx8MTc3MTkzMTE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Defensive Driving Course',
      category: 'Training',
    },
    {
      src: 'https://images.unsplash.com/photo-1574102583554-464eedbdd6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzdHVkeWluZyUyMHJvYWQlMjBtYXB8ZW58MXx8fHwxNzcxOTMxMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Theory Class',
      category: 'Theory',
    },
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