import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Cover.css';

interface CoverProps {
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    // Añadimos un console.log para confirmar que el evento se dispara
    console.log("Botón presionado");
    setIsAnimating(true);
    
    // Esperar a que termine la animación antes de notificar al padre
    setTimeout(() => {
      console.log("Ejecutando onOpen");
      onOpen();
    }, 1000);
  };

  return (
    <div className="cover-container">
      <motion.div 
        className={`envelope ${isAnimating ? 'open' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: isAnimating ? 1.1 : 1 }}
        transition={{ duration: 1 }}
      >
        <motion.button 
          className="open-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
        >
          Abrir Invitación
        </motion.button>
        
        {isAnimating && (
          <motion.div 
            className="envelope-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2>¡Te invito a mi fiesta!</h2>
            <p>Cargando detalles...</p>
            <motion.div 
              className="loading-icon"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Cover;