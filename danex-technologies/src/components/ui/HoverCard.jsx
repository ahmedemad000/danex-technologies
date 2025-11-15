// src/components/ui/HoverCard.jsx
import { motion } from 'framer-motion';

const HoverCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;