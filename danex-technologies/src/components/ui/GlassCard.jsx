// src/components/ui/GlassCard.jsx
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl ${className}`}
      whileHover={{ 
        backgroundColor: "rgba(30, 30, 30, 0.4)",
        borderColor: "rgba(99, 102, 241, 0.3)"
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;