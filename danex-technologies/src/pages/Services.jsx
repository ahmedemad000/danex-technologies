import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Workflow, Cloud, Server, TestTube, RefreshCw, Zap, Database, Shield, Cpu, CircuitBoard, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
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
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 h-full cursor-pointer group relative overflow-hidden"
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-primary-500/10 rounded-xl mr-4 group-hover:bg-primary-500/20 transition-all duration-300">
            <Icon className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 group-hover:bg-primary-500 transition-colors"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const softwareServices = [
    {
      icon: Brain,
      title: "AI-Enabled Engineering",
      description: "Build, deploy, test, and maintain enterprise applications enhanced with AI-driven components, intelligent features, and predictive behaviors.",
      features: [
        "AI-Driven Application Development",
        "Predictive Analytics Integration",
        "Intelligent Feature Implementation",
        "Machine Learning Model Deployment",
        "Automated System Optimization"
      ]
    },
    {
      icon: Workflow,
      title: "Digital Transformation",
      description: "Deliver end-to-end digital transformation powered by AI/ML, including process automation, workflow intelligence, and system modernization.",
      features: [
        "Process Automation & Optimization",
        "Workflow Intelligence Systems",
        "Legacy System Modernization",
        "AI-Powered Business Analytics",
        "Digital Strategy Consulting"
      ]
    },
    {
      icon: RefreshCw,
      title: "DevOps & MLOps",
      description: "Provide comprehensive DevOps and MLOps, sustained engineering, AI-assisted software testing, and robust CI/CD pipelines.",
      features: [
        "CI/CD Pipeline Implementation",
        "AI-Assisted Software Testing",
        "MLOps Platform Setup",
        "Infrastructure as Code",
        "Performance Monitoring & Optimization"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Work with hyperscaler environments and ISVs, leveraging cloud-native AI services (Azure, AWS, GCP) and integrating AI toolchains.",
      features: [
        "Multi-Cloud Architecture Design",
        "Cloud-Native AI Services Integration",
        "Kubernetes & Container Orchestration",
        "Serverless Computing Solutions",
        "Cloud Security & Compliance"
      ]
    }
  ];

  const hardwareServices = [
    {
      icon: Cpu,
      title: "Hardware Engineering & Qualification",
      description: "Full-stack hardware engineering support for hyperscalers and enterprise environments — from prototypes to production-ready systems.",
      features: [
        "Hardware Qualification & Validation",
        "Component Testing (CPU, GPU, SSD, NICs)",
        "Performance & Compatibility Testing",
        "Production Readiness Assessment",
        "Quality Assurance Sign-off"
      ]
    },
    {
      icon: CircuitBoard,
      title: "Advanced Component Testing",
      description: "End-to-end testing for next-generation components including CPUs, GPUs, SSDs, memory modules, and power systems.",
      features: [
        "Next-Gen Component Validation",
        "Performance Benchmarking",
        "Security & Compatibility Testing",
        "Thermal & Power Analysis",
        "Reliability Stress Testing"
      ]
    },
    {
      icon: Server,
      title: "Environmental & Stress Testing",
      description: "Simulate real-world operating conditions to verify durability, stability, and long-term hardware reliability.",
      features: [
        "Thermal Profiling & Analysis",
        "Vibration & Shock Testing",
        "Load & Stress Scenarios",
        "Environmental Condition Simulation",
        "Long-term Reliability Assessment"
      ]
    },
    {
      icon: Shield,
      title: "Failure Analysis & Investigation",
      description: "Perform deep investigations on hardware faults, firmware issues, and system instabilities to identify root causes.",
      features: [
        "Root Cause Analysis",
        "Failure Mode Investigation",
        "Corrective Action Planning",
        "Quality Improvement Recommendations",
        "Preventative Measures Implementation"
      ]
    }
  ];

  return (
    <Layout 
      seoTitle="Our Services - AI & Hardware Engineering"
      seoDescription="Comprehensive AI-enabled software engineering and hardware validation services for enterprise solutions."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              End-to-end solutions spanning AI-enabled software engineering and rigorous hardware validation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="sticky top-20 z-40 bg-dark-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <a 
              href="#software" 
              className="text-gray-400 hover:text-primary-400 font-semibold transition-colors duration-200 cursor-pointer"
            >
              AI & Software
            </a>
            <a 
              href="#hardware" 
              className="text-gray-400 hover:text-primary-400 font-semibold transition-colors duration-200 cursor-pointer"
            >
              Hardware Engineering
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="cursor-pointer"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Software Services */}
      <section id="software" className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-cyan-500 bg-clip-text text-transparent">
                AI & Software Engineering
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge software solutions powered by artificial intelligence and modern engineering practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {softwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Services */}
      <section id="hardware" className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary-500 to-emerald-400 bg-clip-text text-transparent">
                Hardware & Firmware Engineering
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rigorous hardware validation, testing, and engineering for enterprise-grade infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hardwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

{/* Trusted Partners - Matching Hero Style */}
<section className="py-16 bg-dark-900 border-y border-gray-800">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-300 mb-4">
        Trusted by Industry Leaders
      </h3>
      <p className="text-gray-500">
        Working with top hyperscalers and technology partners to deliver enterprise-grade solutions
      </p>
    </motion.div>

    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
      {[
        { name: "Microsoft Azure", color: "text-blue-400" },
        { name: "Amazon AWS", color: "text-orange-400" },
        { name: "Google Cloud", color: "text-green-400" },
        { name: "NVIDIA", color: "text-green-500" },
        { name: "Intel", color: "text-blue-300" },
        { name: "Docker", color: "text-blue-200" },
        { name: "Kubernetes", color: "text-cyan-400" }
      ].map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`text-xl font-bold ${partner.color} opacity-80 hover:opacity-100 transition-opacity cursor-default`}
        >
          {partner.name}
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ready to Discuss
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how our comprehensive services can address your specific technology challenges and drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  className="cursor-pointer"
                >
                  Schedule Technical Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="cursor-pointer"
                >
                  View Case Studies
                </Button>
              </motion.div>
            </div>
            
            <p className="text-gray-500 mt-6 text-sm">
              ⚡ Typically respond within 2 hours during business hours
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;