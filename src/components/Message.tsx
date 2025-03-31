import { motion } from 'framer-motion';
import '../styles/components/Message.css';

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className="message-container">
      <motion.div 
        className="message-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="message-decoration top-left"></div>
        <div className="message-decoration top-right"></div>
        <p className="message-text">{text}</p>
        <div className="message-decoration bottom-left"></div>
        <div className="message-decoration bottom-right"></div>
      </motion.div>
    </div>
  );
};

export default Message;