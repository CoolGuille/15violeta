import { motion } from 'framer-motion';
import '../styles/components/Title.css';

interface TitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className="title-container">
      <motion.div
        className="title-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="title-main">Mis 15</h1>
        <h2 className="title-name">{name}</h2>
        <div className="title-decoration">
          <span className="title-line"></span>
          <span className="title-star">★</span>
          <span className="title-line"></span>
        </div>
      </motion.div>
    </div>
  );
};

export default Title;