import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-900 to-primary-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Your Technology Stack?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 font-inter max-w-2xl mx-auto">
            Let's discuss how our AI-enabled engineering and hardware expertise can drive your business forward. Schedule a technical consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-8 font-inter"
          >
            No commitment required • 30-minute technical deep dive • Custom solution proposal
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;