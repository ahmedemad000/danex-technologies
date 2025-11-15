import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, CloudCog, TestTube, Server, CircuitBoard, Cog } from 'lucide-react';

const PillarCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary-500/10 rounded-xl mr-4">
          <Icon className="w-8 h-8 text-primary-500" />
        </div>
        <h3 className="text-2xl font-clash font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6 font-inter text-lg">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400 font-inter">
            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const DualPillars = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Dual Expertise
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              One Powerful Solution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Bridging the gap between cutting-edge AI software and rigorous hardware engineering to deliver complete enterprise solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AI & Software Engineering */}
          <PillarCard
            icon={CloudCog}
            title="AI & Software Engineering"
            description="We design, build, and scale enterprise applications enhanced with AI intelligence and automation."
            features={[
              "AI-Enabled Application Development",
              "Intelligent Software Testing & QA",
              "DevOps & MLOps Implementation", 
              "Cloud-Native AI Solutions",
              "Digital Transformation",
              "Predictive Analytics & Automation"
            ]}
            delay={0.1}
          />

          {/* Hardware & Firmware Engineering */}
          <PillarCard
            icon={Cpu}
            title="Hardware & Firmware Engineering"
            description="Full-stack hardware engineering support from prototypes to production-ready systems."
            features={[
              "Hardware Qualification & Validation",
              "Component Testing (CPU, GPU, SSD, Memory)",
              "Environmental & Stress Testing",
              "Firmware Deployment & Compatibility",
              "Failure Analysis & Root Cause",
              "Hardware Lifecycle Management"
            ]}
            delay={0.3}
          />
        </div>

        {/* Integration Bridge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full px-6 py-3">
            <Cog className="w-5 h-5 text-primary-500 mr-2" />
            <span className="text-primary-200 font-inter font-medium">
              Seamless Integration Between Software AI and Hardware Infrastructure
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualPillars;