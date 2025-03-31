import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Countdown.css';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">¡Faltan!</h3>
      <div className="countdown-timer">
        <motion.div 
          className="countdown-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Días</div>
        </motion.div>
        
        <motion.div 
          className="countdown-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="countdown-value">{timeLeft.hours}</div>
          <div className="countdown-label">Horas</div>
        </motion.div>
        
        <motion.div 
          className="countdown-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="countdown-value">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutos</div>
        </motion.div>
        
        <motion.div 
          className="countdown-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="countdown-value">{timeLeft.seconds}</div>
          <div className="countdown-label">Segundos</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;