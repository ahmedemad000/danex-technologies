import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Workflow, Cloud, Server, TestTube, RefreshCw } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex group"
    >
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-clash font-bold mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 font-inter leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesShowcase = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Enabled Engineering",
      description: "Build, deploy, and maintain enterprise applications enhanced with AI-driven components and predictive behaviors."
    },
    {
      icon: Workflow,
      title: "Digital Transformation",
      description: "End-to-end transformation modernizing systems, automating processes, and embedding AI/ML models for real business impact."
    },
    {
      icon: RefreshCw,
      title: "DevOps & MLOps",
      description: "Streamline engineering with modern practices, intelligent testing frameworks, and secure CI/CD pipelines."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Build and operate applications across Azure, AWS, and GCP, integrating cloud-native AI services and toolchains."
    },
    {
      icon: Server,
      title: "Hardware Engineering",
      description: "Full-stack hardware support from prototypes to production, with rigorous validation and testing."
    },
    {
      icon: TestTube,
      title: "Intelligent Testing",
      description: "AI-assisted software testing, test automation, and quality assurance to accelerate releases and improve quality."
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Comprehensive Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            End-to-end solutions that cover the entire technology stack, from intelligent software to validated hardware.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;