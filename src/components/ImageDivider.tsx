import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageViewer from './ImageViewer';
import '../styles/components/ImageDivider.css';

interface ImageDividerProps {
  imageUrl: string;
  altText?: string;
}

const ImageDivider: React.FC<ImageDividerProps> = ({ 
  imageUrl, 
  altText = "Foto de Violeta" 
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleOpenViewer = () => {
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="image-divider">
      <motion.div 
        className="image-divider-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="image-divider-decoration left">
          <span className="image-divider-star">★</span>
          <span className="image-divider-line"></span>
        </div>
        
        <div 
          className="image-divider-frame"
          onClick={handleOpenViewer}
        >
          <img 
            src={imageUrl} 
            alt={altText} 
            className="image-divider-img" 
          />
          <div className="image-divider-zoom-hint">
            <span className="image-divider-zoom-icon">🔍</span>
          </div>
        </div>
        
        <div className="image-divider-decoration right">
          <span className="image-divider-line"></span>
          <span className="image-divider-star">★</span>
        </div>
      </motion.div>

      <ImageViewer 
        isOpen={isViewerOpen}
        imageUrl={imageUrl}
        altText={altText}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default ImageDivider;