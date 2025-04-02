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
    // Suponemos que el evento dura 5 horas
    const endDate = new Date(date.getTime() + 5 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}`;
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