import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
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
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState(false);
  const [startDistance, setStartDistance] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil al cargar el componente
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Reiniciar zoom y posición cuando se cierra el visor
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Manejar eventos táctiles para zoom - solo en dispositivos móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    
    if (e.touches.length === 2) {
      setIsPinching(true);
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setStartDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isPinching) return;
    
    if (e.touches.length === 2) {
      e.preventDefault(); // Prevenir scroll
      
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calcular nuevo zoom
      const newScale = scale * (distance / startDistance);
      
      // Limitar el zoom entre 0.5 y 3
      if (newScale >= 0.5 && newScale <= 3) {
        setScale(newScale);
        setStartDistance(distance);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsPinching(false);
  };

  // Doble tap para zoom - solo en móviles
  const lastTapTimeRef = useRef<number>(0);
  
  const handleDoubleTap = (e: React.TouchEvent) => {
    if (!isMobile) return;
    
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTimeRef.current;
    
    if (timeSinceLastTap < 300) {
      // Doble tap detectado
      if (scale !== 1) {
        // Si ya hay zoom, volver al tamaño normal
        setScale(1);
        setPosition({ x: 0, y: 0 });
      } else {
        // Hacer zoom en el punto donde se hizo tap
        setScale(2);
      }
      e.preventDefault();
    }
    
    lastTapTimeRef.current = now;
  };

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
            <div 
              className="image-viewer-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              <motion.img 
                ref={imageRef}
                src={imageUrl} 
                alt={altText} 
                className="image-viewer-img" 
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  cursor: isMobile ? 'zoom-in' : 'default'
                }}
                onTouchStart={handleDoubleTap}
                drag={scale > 1 && isMobile}
                dragConstraints={imageRef}
                dragElastic={0.1}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;