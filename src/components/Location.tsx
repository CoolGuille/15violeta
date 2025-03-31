import { motion } from 'framer-motion';
import '../styles/components/Location.css';

interface LocationProps {
  venue: string;
  address: string;
  date: string;
  time: string;
  mapUrl?: string;
}

const Location: React.FC<LocationProps> = ({ venue, address, date, time, mapUrl }) => {
  return (
    <div className="location-container">
      <motion.div 
        className="location-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="location-title">¿Dónde y Cuándo?</h2>
        
        <div className="location-card">
          <div className="location-icon">📍</div>
          <div className="location-details">
            <h3>{venue}</h3>
            <p>{address}</p>
            
            <div className="location-time">
              <div className="location-time-item">
                <span className="location-time-icon">📅</span>
                <span>{date}</span>
              </div>
              <div className="location-time-item">
                <span className="location-time-icon">⏰</span>
                <span>{time}</span>
              </div>
            </div>
            
            {mapUrl && (
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="location-map-button"
              >
                Ver en Google Maps
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;