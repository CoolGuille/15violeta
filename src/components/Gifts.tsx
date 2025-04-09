import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Gifts.css';

interface GiftsProps {
  alias?: string;
  cvu?: string;
}

const Gifts: React.FC<GiftsProps> = ({ 
  alias = "violeta.15anios", 
  cvu = "0000003100000000000000" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyAlias = () => {
    navigator.clipboard.writeText(alias)
      .then(() => {
        setCopyMessage('¡Copiado!');
        setTimeout(() => setCopyMessage(''), 2000);
      })
      .catch(err => {
        setCopyMessage('Error al copiar');
        console.error('Error al copiar: ', err);
      });
  };

  const handleCopyCVU = () => {
    navigator.clipboard.writeText(cvu)
      .then(() => {
        setCopyMessage('¡Copiado!');
        setTimeout(() => setCopyMessage(''), 2000);
      })
      .catch(err => {
        setCopyMessage('Error al copiar');
        console.error('Error al copiar: ', err);
      });
  };

  return (
    <div className="gifts-container">
      <motion.div 
        className="gifts-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="gifts-title">Regalos</h2>
        
        <div className="gifts-card">
          <div className="gifts-icon">🎁</div>
          <div className="gifts-details">
            <p className="gifts-message">
              Tu presencia es lo más importante para mi.
            </p>
            
            <motion.button 
              className="gifts-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
            >
              Más Información
            </motion.button>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="gifts-modal-overlay" onClick={handleCloseModal}>
          <motion.div 
            className="gifts-modal"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gifts-modal-close" onClick={handleCloseModal}>×</button>
            <h3 className="gifts-modal-title">Información para Regalos</h3>
            
            <div className="gifts-modal-content">
              <div className="gifts-bank-section">
                <p className="gifts-bank-title">Cuenta Bancaria:</p>
                <p className="gifts-bank-name">Mercado Pago</p>
                
                <div className="gifts-bank-details">
                  <div className="gifts-bank-item">
                    <span className="gifts-bank-label">Alias:</span>
                    <span className="gifts-bank-value">{alias}</span>
                    <button 
                      className="gifts-copy-button" 
                      onClick={handleCopyAlias}
                      title="Copiar alias"
                    >
                      <span className="gifts-copy-icon">📋</span>
                    </button>
                  </div>
                  
                  <div className="gifts-bank-item">
                    <span className="gifts-bank-label">CVU:</span>
                    <span className="gifts-bank-value">{cvu}</span>
                    <button 
                      className="gifts-copy-button" 
                      onClick={handleCopyCVU}
                      title="Copiar CVU"
                    >
                      <span className="gifts-copy-icon">📋</span>
                    </button>
                  </div>
                  
                  {copyMessage && (
                    <div className="gifts-copy-message">{copyMessage}</div>
                  )}
                </div>
              </div>
              
              <div className="gifts-divider"></div>
              
              <div className="gifts-cash-section">
                <div className="gifts-cash-icon">💵</div>
                <p className="gifts-cash-text">
                  En caso de que prefieras regalar en efectivo, podrás dármelo en la fiesta.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gifts;