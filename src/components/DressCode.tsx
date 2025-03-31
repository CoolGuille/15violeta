import { motion } from 'framer-motion';
import '../styles/components/DressCode.css';

interface DressCodeProps {
  code: string;
  description: string;
  colors?: string[];
}

const DressCode: React.FC<DressCodeProps> = ({ code, description, colors = [] }) => {
  return (
    <div className="dress-code-container">
      <motion.div 
        className="dress-code-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="dress-code-title">Código de Vestimenta</h2>
        
        <div className="dress-code-card">
          <div className="dress-code-icon">👗</div>
          <div className="dress-code-details">
            <h3>{code}</h3>
            <p>{description}</p>
            
            {colors.length > 0 && (
              <div className="dress-code-colors">
                <span className="dress-code-colors-label">Paleta de colores:</span>
                <div className="dress-code-color-list">
                  {colors.map((color, index) => (
                    <div 
                      key={index} 
                      className="dress-code-color-item"
                      style={{ 
                        backgroundColor: color,
                        boxShadow: `0 4px 10px ${color}80`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DressCode;