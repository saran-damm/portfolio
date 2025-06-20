import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Bengalore, India'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'saran30702@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Call',
      details: '+91 7095608173'
    }
  ];

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h2 
            className="text-sm uppercase tracking-widest text-accent mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact Me
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
              >
                {info.icon}
              </motion.div>
              <h4 className="text-xl font-bold mb-2">{info.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="relative"
          >
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12 md:mt-20 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <p>© {new Date().getFullYear()} Sai Saran Dammavalam. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
