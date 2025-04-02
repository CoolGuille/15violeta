import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/RSVP.css';

interface RSVPProps {
  formUrl?: string;
}

const RSVP: React.FC<RSVPProps> = ({ formUrl = "https://forms.gle/exampleFormUrl" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rsvp-container">
      <motion.div 
        className="rsvp-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="rsvp-title">Confirmación de Asistencia</h2>
        
        <div className="rsvp-card">
          <div className="rsvp-icon">✓</div>
          <div className="rsvp-details">
            <p className="rsvp-message">
              Espero contar con tu presencia, no olvides confirmar lo antes posible :D
            </p>
            
            <motion.button 
              className="rsvp-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
            >
              <span className="rsvp-button-icon">✓</span>
              Confirmar Asistencia
            </motion.button>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="rsvp-modal-overlay" onClick={handleCloseModal}>
          <motion.div 
            className="rsvp-modal"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="rsvp-modal-close" onClick={handleCloseModal}>×</button>
            <h3 className="rsvp-modal-title">Confirmar Asistencia</h3>
            
            <div className="rsvp-modal-content">
              <iframe 
                src={formUrl} 
                title="Formulario de confirmación" 
                className="rsvp-form-iframe"
              />
              
              <div className="rsvp-modal-note">
                <p>También puedes confirmar directamente en el siguiente enlace:</p>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="rsvp-direct-link">
                  Abrir formulario
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RSVP;