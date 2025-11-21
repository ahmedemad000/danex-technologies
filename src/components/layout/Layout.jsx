// src/components/layout/Layout.jsx
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../ui/AnimatedBackground';
import BackgroundPatterns from '../ui/BackgroundPatterns';
import ScrollProgress from '../ui/ScrollProgress';
import BackToTop from '../ui/BackToTop';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useSeo } from '../../hooks/useSeo';
import { usePageLoad } from '../../hooks/usePageLoad';

const Layout = ({ children, seoTitle = "Danex Technologies", seoDescription = "AI-Enabled Engineering & Intelligent Software Testing" }) => {
  useSeo(seoTitle, seoDescription);
  const isLoading = usePageLoad();
  
  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col relative">
      <AnimatedBackground />
      <BackgroundPatterns />
      <Header />
      <ScrollProgress />
      <BackToTop />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center relative z-10"
          >
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="text-gray-400 mt-4">Loading Danex Technologies...</p>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative z-10"
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;