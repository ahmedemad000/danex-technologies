// src/pages/Careers.jsx
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Clock,
  MapPin,
  DollarSign,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Button from '../components/ui/Button';

const BenefitCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const JobOpening = ({ title, department, location, type, description, requirements, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm">
              {department}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {location}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
              <Clock className="w-3 h-3 mr-1" />
              {type}
            </span>
          </div>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-primary-500 transition-colors transform group-hover:translate-x-1" />
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      <div>
        <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <Button variant="outline" size="sm" className="group">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries, performance bonuses, and equity packages for exceptional talent."
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear growth paths, mentorship programs, and continuous learning opportunities."
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Work from anywhere with our distributed-first approach and flexible schedules."
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "$5,000 annual budget for conferences, courses, and professional development."
    },
    {
      icon: Users,
      title: "World-Class Team",
      description: "Collaborate with industry experts and AI pioneers from leading tech companies."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, vision, and mental health benefits."
    }
  ];

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "AI Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions for enterprise clients. Work on machine learning models, natural language processing, and computer vision applications.",
      requirements: [
        "5+ years experience in AI/ML development",
        "Strong Python, TensorFlow/PyTorch skills",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of MLOps practices",
        "Bachelor's/Master's in Computer Science or related field"
      ]
    },
    {
      title: "Hardware Validation Engineer",
      department: "Hardware Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Perform rigorous testing and validation of hardware components for enterprise systems. Ensure reliability and performance standards are met.",
      requirements: [
        "3+ years in hardware testing/validation",
        "Experience with CPU/GPU/SSD testing",
        "Knowledge of environmental stress testing",
        "Familiarity with industry standards",
        "Engineering degree or equivalent experience"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Platform Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain robust CI/CD pipelines, infrastructure as code, and cloud-native platforms for our engineering teams.",
      requirements: [
        "4+ years in DevOps/SRE roles",
        "Kubernetes, Docker, and Terraform expertise",
        "Cloud platform certification preferred",
        "Scripting skills (Python, Bash)",
        "Experience with monitoring and alerting systems"
      ]
    },
    {
      title: "Software Testing Specialist",
      department: "Quality Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement intelligent testing frameworks using AI and automation to ensure software quality and reliability.",
      requirements: [
        "3+ years in software testing/QA",
        "Experience with test automation frameworks",
        "Knowledge of AI-assisted testing tools",
        "Programming skills in Java/Python/JavaScript",
        "ISTQB certification preferred"
      ]
    }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push boundaries and embrace emerging technologies to solve complex challenges."
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "We believe in the power of diverse teams working together to achieve extraordinary results."
    },
    {
      icon: Zap,
      title: "Impact Driven",
      description: "We focus on delivering real value and measurable results for our clients and partners."
    },
    {
      icon: Heart,
      title: "Continuous Growth",
      description: "We invest in our team's development and create opportunities for personal and professional growth."
    }
  ];

  return (
    <Layout 
      seoTitle="Careers - Join Danex Technologies"
      seoDescription="Build the future of AI and hardware engineering with Danex Technologies. Explore career opportunities and join our innovative team."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-primary-900/10 to-secondary-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400 mr-2" />
              <span className="text-primary-300 text-sm font-medium">
                🚀 We're Hiring Amazing Talent
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our mission to revolutionize AI-enabled engineering and intelligent software testing. Work on cutting-edge projects with industry leaders.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="primary" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Why Join Danex?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're building more than technology – we're building a culture of innovation, growth, and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore opportunities to join our team and work on groundbreaking projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <JobOpening key={index} {...job} delay={index * 0.2} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <Button variant="outline" size="lg">
              Send Open Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark-900">
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
                Our Culture & Values
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-dark-800/30 rounded-2xl border border-gray-700 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ready to Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators and help shape the future of technology. Let's create extraordinary solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;