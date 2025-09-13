import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import yourImage from '../assets/image.jpg';

const Home = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Define animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-16 md:py-0 bg-gradient-to-b from-amber-50 to-white">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.h2 
            className="text-lg md:text-xl text-accent font-medium mb-2"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Sai Saran Dammavalam
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
            variants={itemVariants}
          >
            Machine Learning Engineer specializing in LLMs, Computer Vision, and AI Applications
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative px-8 py-3 bg-accent text-white rounded-lg inline-block cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 text-white">View My Work</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative px-8 py-3 border-2 border-accent text-accent rounded-lg inline-block cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 text-accent group-hover:text-white transition-colors duration-300">Contact Me</span>
                <motion.span 
                  className="absolute inset-0 bg-accent z-0"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 text-2xl mt-8 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/saran-damm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sai-saran-dammavalam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:saran30702@gmail.com" 
              className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          ref={imageRef}
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <motion.div 
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent to-purple-600 p-1"
              animate={{ 
                boxShadow: ["0px 0px 20px rgba(124, 58, 237, 0.3)", "0px 0px 40px rgba(124, 58, 237, 0.5)", "0px 0px 20px rgba(124, 58, 237, 0.3)"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src={yourImage} 
                  alt="Sai Saran Dammavalam" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Floating elements */}
            {['⚛️', '🤖', '🧠', '💻'].map((emoji, index) => (
              <motion.div
                key={index}
                className="absolute text-xl sm:text-2xl bg-white dark:bg-gray-800 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg"
                style={{
                  top: `${index * 25}%`,
                  left: index % 2 === 0 ? '-5%' : '85%',
                  display: window.innerWidth < 640 && (index === 0 || index === 3) ? 'none' : 'flex'
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={800}
          offset={-80}
          className="cursor-pointer"
        >
          <motion.div 
            className="w-8 h-12 border-2 border-accent rounded-full flex items-start justify-center p-1"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-accent rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </div>
  );
};

export default Home;
