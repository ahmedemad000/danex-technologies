import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Sparkles, 
  Shield, 
  Zap,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';
import Button from '../components/ui/Button';

const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('idle');

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid, isDirty },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xqawbwra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          interest: data.interest,
          message: data.message,
          _subject: `New Contact from ${data.name} - Danex Technologies`,
          _replyto: data.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus('idle');
          reset();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@danextechnologies.com',
      description: 'Typically respond within 2 hours',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'mailto:contact@danextechnologies.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+971 4 123 4567',
      description: 'Mon to Fri, 9am to 6pm GST',
      gradient: 'from-green-500 to-emerald-500',
      href: 'tel:+97141234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Dubai, UAE',
      description: 'Schedule an office visit',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Free Consultation',
      description: '30-minute technical discovery call',
      time: '30 mins'
    },
    {
      icon: Zap,
      title: 'Solution Design',
      description: 'Custom proposal with timeline & pricing',
      time: '1-2 days'
    },
    {
      icon: Shield,
      title: 'Project Kickoff',
      description: 'Team onboarding & development start',
      time: 'Within 1 week'
    }
  ];

  const interestAreas = [
    { value: 'ai-engineering', label: '🤖 AI-Enabled Engineering' },
    { value: 'software-testing', label: '🔍 Intelligent Software Testing' },
    { value: 'hardware-validation', label: '💻 Hardware Validation' },
    { value: 'digital-transformation', label: '🚀 Digital Transformation' },
    { value: 'cloud-solutions', label: '☁️ Cloud-Native Solutions' },
    { value: 'consultation', label: '💡 Technical Consultation' }
  ];

  return (
    <Layout 
      seoTitle="Start Your Project - Contact Danex Technologies"
      seoDescription="Ready to transform your technology? Get a free consultation with our AI and hardware engineering experts. Fast response guaranteed."
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
                🚀 Get Started in 3 Simple Steps
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your technology stack? Get a <span className="text-primary-400 font-semibold">free technical consultation</span> and discover how our AI and hardware expertise can drive your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  item.href ? (
                    <a key={index} href={item.href} className="block">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-start space-x-4 p-4 bg-dark-800/50 rounded-xl border border-gray-700 hover:border-primary-500/30 transition-all duration-300 group"
                      >
                        <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-primary-400 font-semibold text-lg mb-1">
                            {item.details}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-start space-x-4 p-4 bg-dark-800/50 rounded-xl border border-gray-700 hover:border-primary-500/30 transition-all duration-300 group"
                    >
                      <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-primary-400 font-semibold text-lg mb-1">
                          {item.details}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>

              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-secondary-400 to-emerald-400 bg-clip-text text-transparent">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-dark-800/30 rounded-lg border border-gray-700/50 hover:border-primary-500/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors">
                            {step.title}
                          </h4>
                          <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary-500/20 transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Start Your Project
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
                  >
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                  >
                    <div className="flex items-center text-red-400">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">
                        Sorry, there was an error sending your message. Please try again or contact us directly.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full bg-dark-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-dark-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">
                    What can we help you with? *
                  </label>
                  <select
                    {...register('interest')}
                    className="w-full bg-dark-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all duration-300"
                  >
                    <option value="">Choose your project type...</option>
                    {interestAreas.map((area) => (
                      <option key={area.value} value={area.value}>
                        {area.label}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p className="text-red-400 text-sm mt-2">{errors.interest.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full bg-dark-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-all duration-300 resize-none"
                    placeholder="Describe your project goals, challenges, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={submitStatus !== 'idle' || !isValid || !isDirty}
                  >
                    {submitStatus === 'submitting' ? (
                      <div className="flex items-center justify-center">
                        <Loader className="w-5 h-5 animate-spin mr-2" />
                        Sending Your Message...
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent Successfully!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message & Get Free Consultation
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;