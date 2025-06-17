import { useRef } from 'react';
import { motion, useInView, easeOut } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const projects = [
    {
      title: 'AI-Powered Image Recognition',
      description: 'A deep learning model that can identify objects in images with high accuracy using state-of-the-art computer vision techniques.',
      tags: ['Python', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjB2aXNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      github: 'https://github.com/saran-damm',
      demo: '#'
    },
    {
      title: 'Natural Language Processing API',
      description: 'An API that leverages large language models to analyze text, extract insights, and generate human-like responses.',
      tags: ['Python', 'NLP', 'FastAPI', 'Transformers'],
      image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      github: 'https://github.com/saran-damm',
      demo: '#'
    },
    {
      title: 'Real-time Data Dashboard',
      description: 'A responsive web dashboard that visualizes real-time data streams with interactive charts and analytics.',
      tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      github: 'https://github.com/saran-damm',
      demo: '#'
    },
    {
      title: 'Recommendation Engine',
      description: 'A machine learning-based recommendation system that provides personalized suggestions based on user behavior.',
      tags: ['Python', 'Machine Learning', 'Collaborative Filtering', 'Flask'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY29tbWVuZGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      github: 'https://github.com/saran-damm',
      demo: '#'
    }
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: easeOut
      }
    })
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            Portfolio
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Recent Projects
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <div className="flex gap-3">
                          <motion.a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub size={20} />
                          </motion.a>
                          <motion.a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaExternalLinkAlt size={18} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a 
            href="https://github.com/saran-damm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
