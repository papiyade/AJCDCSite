import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Users } from 'lucide-react';
import { GalerieImage } from '../types';
import SectionTitle from './SectionTitle';

const GallerySection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<GalerieImage | null>(null);

  const images: GalerieImage[] = [
    {
      id: 1,
      url: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/555904464_122103887139028498_6789292969414990379_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DTs1u0ItEpkQ7kNvwEIlNIv&_nc_oc=AdlDaLjhxMl-EBDVKFjO3Hbl06iLZH1b9kRCk1LTFIGnD9CuNRmVqSqtJJzgKxmouTW6iDyld7KucJdtZ9x4qSyj&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=LGXBj3n4Pu-s9qXeDvlIvw&oh=00_AfaFzcURfJFz_9L0dMj6Fdv6wuewOdcbrJs2FaL3M20oXQ&oe=68E08956',
      alt: 'Ouverture de l\'événement culturel AJCDC',
      original: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/555904464_122103887139028498_6789292969414990379_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DTs1u0ItEpkQ7kNvwEIlNIv&_nc_oc=AdlDaLjhxMl-EBDVKFjO3Hbl06iLZH1b9kRCk1LTFIGnD9CuNRmVqSqtJJzgKxmouTW6iDyld7KucJdtZ9x4qSyj&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=LGXBj3n4Pu-s9qXeDvlIvw&oh=00_AfaFzcURfJFz_9L0dMj6Fdv6wuewOdcbrJs2FaL3M20oXQ&oe=68E08956',
      thumbnail: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/555904464_122103887139028498_6789292969414990379_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DTs1u0ItEpkQ7kNvwEIlNIv&_nc_oc=AdlDaLjhxMl-EBDVKFjO3Hbl06iLZH1b9kRCk1LTFIGnD9CuNRmVqSqtJJzgKxmouTW6iDyld7KucJdtZ9x4qSyj&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=LGXBj3n4Pu-s9qXeDvlIvw&oh=00_AfaFzcURfJFz_9L0dMj6Fdv6wuewOdcbrJs2FaL3M20oXQ&oe=68E08956',
    },
    {
      id: 2,
      url: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/557575196_122103887127028498_490504425410307015_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ksUT5k95nksQ7kNvwEdYEND&_nc_oc=Adl-D-aDbjY8oTHMXL6lNoewwD9ilDNHTe0IlmFe7jzclATijaU7SjdTDvjc9UQZSAArS2dqLRoewoTv8WR3QTsF&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=KDpzhuhQSar3IJzkCX8baw&oh=00_AfZ6XHMr8qpm4W71kcf91QE6EhQNWdEMB4W-r2vdHdDI-w&oe=68E08398',
      alt: 'Ouverture de l\'événement culturel AJCDC',
      original: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/557575196_122103887127028498_490504425410307015_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ksUT5k95nksQ7kNvwEdYEND&_nc_oc=Adl-D-aDbjY8oTHMXL6lNoewwD9ilDNHTe0IlmFe7jzclATijaU7SjdTDvjc9UQZSAArS2dqLRoewoTv8WR3QTsF&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=KDpzhuhQSar3IJzkCX8baw&oh=00_AfZ6XHMr8qpm4W71kcf91QE6EhQNWdEMB4W-r2vdHdDI-w&oe=68E08398',
      thumbnail: 'https://scontent.fdkr7-1.fna.fbcdn.net/v/t39.30808-6/557575196_122103887127028498_490504425410307015_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ksUT5k95nksQ7kNvwEdYEND&_nc_oc=Adl-D-aDbjY8oTHMXL6lNoewwD9ilDNHTe0IlmFe7jzclATijaU7SjdTDvjc9UQZSAArS2dqLRoewoTv8WR3QTsF&_nc_zt=23&_nc_ht=scontent.fdkr7-1.fna&_nc_gid=KDpzhuhQSar3IJzkCX8baw&oh=00_AfZ6XHMr8qpm4W71kcf91QE6EhQNWdEMB4W-r2vdHdDI-w&oe=68E08398',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Notre Galerie"
          subtitle="Découvrez nos actions à travers des moments partagés"
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>

              {/* AJCDC Watermark */}
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                <Users className="h-4 w-4 text-ajcdc-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.original}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{selectedImage.alt}</p>
                      <p className="text-gray-300 text-sm">© Association des Jeunes CDC Bambilor</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-5 w-5 text-ajcdc-primary" />
                      <span className="text-ajcdc-primary font-semibold text-sm">AJCDC</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a href='https://www.facebook.com/profile.php?id=61580854952743' target='_blank'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ajcdc-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-ajcdc-primary/90 transition-colors"
          >
            Voir plus de photos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;