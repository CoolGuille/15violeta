import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Gallery.css';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <motion.div 
        className="gallery-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="gallery-title">Galería</h2>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                style={{ maxWidth: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage !== null && (
        <div className="gallery-modal" onClick={handleCloseModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={handleCloseModal}>×</button>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="gallery-modal-image" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;