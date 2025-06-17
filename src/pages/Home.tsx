import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="section-container min-h-[calc(100vh-5rem)] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Sai Saran Dammavalam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Software Engineer - Machine Learning at Splore, specializing in LLMs, Computer Vision, and AI Applications
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex gap-6 text-2xl">
              <a href="https://github.com/saran-damm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sai-saran-dammavalam/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent">
                <FaLinkedin />
              </a>
              <a href="mailto:saran30702@gmail.com" className="text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Placeholder for profile image */}
          <div className="w-64 h-64 mx-auto rounded-full bg-gray-200 dark:bg-gray-800">
            {/* Add your image here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
