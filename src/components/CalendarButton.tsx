import { motion } from 'framer-motion';
import '../styles/components/CalendarButton.css';

interface CalendarButtonProps {
  title: string;
  date: Date;
  location: string;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({ title, date, location }) => {
  const formatGoogleCalendarUrl = () => {
    const startDate = date.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Calculamos la fecha final: siguiente día a las 5:00 AM
    const eventDate = new Date(date);
    const endDate = new Date(eventDate);
    endDate.setDate(endDate.getDate() + 1); // Siguiente día
    endDate.setHours(5, 0, 0, 0); // 5 AM
    
    const endDateStr = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDateStr}&location=${encodeURIComponent(location)}`;
  };

  return (
    <motion.div
      className="calendar-button-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <a 
        href={formatGoogleCalendarUrl()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="calendar-button"
      >
        <span className="calendar-icon">📅</span>
        Agendar Fecha
      </a>
    </motion.div>
  );
};

export default CalendarButton;