import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, BarChart3, Clock, TrendingUp, Server, Cpu } from 'lucide-react';

const CaseStudyCard = ({ title, industry, challenge, solution, results, delay = 0 }) => {
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
      className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="inline-block bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm font-inter mb-3">
            {industry}
          </span>
          <h3 className="text-2xl font-clash font-bold group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
        </div>
        <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-primary-500 transition-colors" />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-gray-400 font-inter font-semibold mb-2">Challenge</h4>
          <p className="text-gray-300 font-inter leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h4 className="text-gray-400 font-inter font-semibold mb-2">Solution</h4>
          <p className="text-gray-300 font-inter leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <h4 className="text-gray-400 font-inter font-semibold mb-4">Results</h4>
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-clash font-bold text-primary-500 mb-1">
                {result.value}
              </div>
              <div className="text-xs text-gray-400 font-inter uppercase tracking-wide">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Testing Platform",
      industry: "Financial Services",
      challenge: "A major financial institution needed to reduce software testing time by 60% while maintaining 99.9% accuracy in their transaction processing systems.",
      solution: "Implemented our intelligent testing framework with AI-assisted test case generation, self-healing automation, and predictive analytics for test optimization.",
      results: [
        { value: "75%", label: "Faster Testing" },
        { value: "99.95%", label: "Accuracy" },
        { value: "$2.1M", label: "Annual Savings" },
        { value: "40%", label: "Bug Reduction" }
      ]
    },
    {
      title: "Hardware Validation Suite",
      industry: "Cloud Infrastructure",
      challenge: "Hyperscaler needed to accelerate hardware qualification process for new server deployments while ensuring 100% compatibility and performance standards.",
      solution: "Developed comprehensive hardware testing framework with automated qualification pipelines, performance benchmarking, and compatibility validation across multiple configurations.",
      results: [
        { value: "50%", label: "Faster Deployment" },
        { value: "100%", label: "Compatibility" },
        { value: "30%", label: "Cost Reduction" },
        { value: "0", label: "Production Issues" }
      ]
    },
    {
      title: "Digital Transformation Platform",
      industry: "Healthcare Technology",
      challenge: "Healthcare provider required modernization of legacy systems with AI-driven workflow automation while maintaining HIPAA compliance and data security.",
      solution: "Delivered end-to-end digital transformation with AI-powered workflow intelligence, cloud migration, and intelligent automation while ensuring full regulatory compliance.",
      results: [
        { value: "60%", label: "Efficiency Gain" },
        { value: "24/7", label: "System Availability" },
        { value: "45%", label: "Cost Reduction" },
        { value: "100%", label: "Compliance" }
      ]
    },
    {
      title: "Component Testing Automation",
      industry: "Hardware Manufacturing",
      challenge: "Hardware manufacturer needed to validate next-generation CPU and GPU components across multiple operating environments with rigorous performance standards.",
      solution: "Implemented automated component testing framework with environmental simulation, stress testing, and performance benchmarking across various configurations.",
      results: [
        { value: "80%", label: "Test Automation" },
        { value: "99.9%", label: "Reliability" },
        { value: "65%", label: "Time Savings" },
        { value: "40%", label: "Quality Improvement" }
      ]
    }
  ];

  const stats = [
    { icon: BarChart3, value: "50+", label: "Projects Completed" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
    { icon: Clock, value: "40%", label: "Average Efficiency Gain" },
    { icon: Server, value: "100%", label: "Project Success Rate" }
  ];

  return (
    <Layout 
      seoTitle="Case Studies - Success Stories"
      seoDescription="Explore our successful projects and case studies in AI-enabled engineering and hardware validation."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-clash font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-inter">
              Real-world success stories showcasing our impact across industries
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <div className="text-3xl font-clash font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-inter text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ready to Write
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Your Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-inter">
              Let's work together to create your next success story. Our team is ready to tackle your most complex technology challenges.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-clash font-bold text-lg px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300">
                Start Your Project
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;