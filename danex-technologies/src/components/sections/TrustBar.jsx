import { motion } from 'framer-motion';

const TrustBar = () => {
  const partners = [
    { name: "Microsoft Azure", color: "text-blue-400" },
    { name: "Amazon AWS", color: "text-orange-400" },
    { name: "Google Cloud", color: "text-green-400" },
    { name: "NVIDIA", color: "text-green-500" },
    { name: "Intel", color: "text-blue-300" },
    { name: "Dell Technologies", color: "text-blue-200" },
  ];

  return (
    <section className="py-16 bg-dark-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-clash font-bold text-gray-300 mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-500 font-inter">
            Working with top hyperscalers and technology partners to deliver enterprise-grade solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-2xl font-clash font-bold ${partner.color} opacity-80 hover:opacity-100 transition-opacity`}
            >
              {partner.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;