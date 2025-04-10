import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageViewer from './ImageViewer';
import '../styles/components/ImageDivider.css';

interface ImagePosition {
  x?: number; // Posición horizontal (0 = centrado, negativo = izquierda, positivo = derecha)
  y?: number; // Posición vertical (0 = centrado, negativo = arriba, positivo = abajo)
}

interface ImageDividerProps {
  imageUrl: string;
  altText?: string;
  position?: ImagePosition;
}

const ImageDivider: React.FC<ImageDividerProps> = ({ 
  imageUrl, 
  altText = "Foto de Violeta",
  position = { x: 0, y: 0 }
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleOpenViewer = () => {
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  const imageStyle = {
    objectFit: 'cover' as const,
    objectPosition: `calc(50% + ${position.x || 0}px) calc(50% + ${position.y || 0}px)`,
    width: '100%',
    height: '100%',
    borderRadius: '50%'
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
            style={imageStyle}
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