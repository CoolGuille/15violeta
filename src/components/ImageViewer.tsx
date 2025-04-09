import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/ImageViewer.css';

interface ImageViewerProps {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ 
  isOpen, 
  imageUrl, 
  altText, 
  onClose 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="image-viewer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="image-viewer-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="image-viewer-close" onClick={onClose}>×</button>
            <img 
              src={imageUrl} 
              alt={altText} 
              className="image-viewer-img" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;