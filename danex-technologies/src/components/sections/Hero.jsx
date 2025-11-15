import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";
import {
  Sparkles,
  ArrowRight,
  Play,
  Shield,
  Zap,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/30"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Attention-Grabbing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 m-8 -mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-400 mr-2" />
            <span className="text-primary-200 text-sm font-semibold">
              🚀 Trusted by Fortune 500 Companies
            </span>
            <TrendingUp className="w-5 h-5 text-secondary-400 ml-2 group-hover:scale-110 transition-transform" />
          </motion.div>

          {/* Compelling Headline with Emotional Hook */}
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-100 to-cyan-200 bg-clip-text text-transparent block">
              Transform Your
            </span>
            <motion.span
              className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Technology Future
            </motion.span>
          </motion.h1>

          {/* Benefit-Oriented Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 min-h-[50px] md:min-h-[60px] font-semibold"
          >
            <Typewriter
              words={[
                "Ship Faster with AI-Powered Testing 🚀",
                "Reduce Costs by 40% with Smart Automation 💰",
                "Eliminate Hardware Failures with Rigorous Validation 🛡️",
                "Accelerate Digital Transformation ⚡",
                "Scale Confidently with Cloud-Native AI ☁️",
              ]}
              loop={true}
              cursor
              cursorStyle="✨"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.div>

          {/* Problem-Solution Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Tired of Bugs?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Traditional testing missing critical issues?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Slow Releases?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Manual processes slowing you down?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Hardware Issues?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Component failures costing you time & money?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            We deliver{" "}
            <span className="text-primary-400 font-semibold">
              AI-driven engineering solutions
            </span>{" "}
            that
            <span className="text-secondary-400 font-semibold">
              {" "}
              accelerate development
            </span>
            ,
            <span className="text-cyan-400 font-semibold">
              {" "}
              eliminate costly errors
            </span>
            , and
            <span className="text-purple-400 font-semibold">
              {" "}
              ensure hardware reliability
            </span>{" "}
            — so you can focus on innovation, not infrastructure.
          </motion.p>

          {/* Compelling CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button variant="primary" size="lg" className="group">
              <span className="flex items-center">
                Start Your Project Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="lg" className="group">
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch 2-Min Demo
                </span>
              </Button>

              {/* Social Proof */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-400 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-2 border-dark-800"
                    ></div>
                  ))}
                </div>
                <span>Join 50+ industry leaders</span>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators & Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-gray-700 rounded-2xl p-17 max-w-4xl mx-auto mb-7"
          >
            <h3 className="text-white font-bold text-2xl mb-6 -mt-7">
              Proven Results in Weeks, Not Years
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "6-8", label: "Weeks to ROI", suffix: "weeks" },
                { value: "40%", label: "Faster Deployment" },
                { value: "99.9%", label: "Accuracy Rate" },
                { value: "0", label: "Production Issues", suffix: "downtime" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-lg"> {stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

       {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400 group cursor-pointer">
          <span className="text-sm font-medium mb-0 group-hover:text-primary-400 transition-colors">
            Discover Our Solutions
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center group-hover:border-primary-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full mt-2 group-hover:bg-primary-400 transition-colors"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
