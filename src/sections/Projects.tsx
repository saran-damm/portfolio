import { useRef } from 'react';
import { motion, useInView, easeOut } from 'framer-motion';
import { FaChartLine, FaLeaf, FaIndustry } from 'react-icons/fa';

const IndustryExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const industries = [
    {
      title: 'Financial Services',
      period: '2022 - Present',
      description: 'Developed AI solutions for risk assessment, fraud detection, and automated trading systems. Implemented predictive models for market analysis and customer segmentation.',
      skills: ['Risk Analytics', 'Fraud Detection', 'Algorithmic Trading', 'Customer Insights'],
      icon: <FaChartLine size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Sustainability',
      period: '2020 - 2022',
      description: 'Created machine learning models for environmental impact assessment, carbon footprint optimization, and sustainable resource allocation. Designed systems for monitoring and reducing energy consumption.',
      skills: ['Carbon Footprint Analysis', 'Resource Optimization', 'Predictive Maintenance', 'Energy Efficiency'],
      icon: <FaLeaf size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Manufacturing',
      period: '2018 - 2020',
      description: 'Implemented computer vision systems for quality control, predictive maintenance solutions, and supply chain optimization algorithms. Developed digital twins for production line simulation.',
      skills: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Digital Twins'],
      icon: <FaIndustry size={24} />,
      color: 'bg-amber-500'
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 * i,
        duration: 0.8,
        ease: easeOut
      }
    })
  };
  
  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%',
      transition: {
        duration: 1.5,
        ease: easeOut
      }
    }
  };

  return (
    <div id="projects" ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-amber-50 to-purple-50">
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
            Experience
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Industry Expertise
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey spans across multiple industries where I've applied AI and data science to solve complex business challenges.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline center line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent h-full hidden md:block"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
          {/* Timeline items */}
          <div className="relative">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className={`w-12 h-12 rounded-full ${industry.color} flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg`}>
                    {industry.icon}
                  </div>
                </div>
                {/* Mobile timeline dot */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${industry.color} flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg`}>
                    {industry.icon}
                  </div>
                </div>
                
                {/* Title side */}
                <div className={`w-full md:w-10/12 text-center md:text-left ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="py-4">
                    <h4 className="text-2xl font-bold text-accent">{industry.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{industry.period}</p>
                  </div>
                </div>
                
                {/* Content side */}
                <div className={`w-full md:w-10/12 ${index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{industry.description}</p>
                    <div className={`flex flex-wrap gap-2 justify-center md:${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      {industry.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in learning more about my professional experience?
          </p>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IndustryExperience;
