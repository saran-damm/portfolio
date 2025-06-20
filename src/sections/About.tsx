import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython } from 'react-icons/fa';
import { SiPytorch, SiOpenai } from 'react-icons/si';
import { BsGraphUp } from 'react-icons/bs';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const skillCategories = [
    {
      category: 'Programming Languages',
      description: 'Proficient in Python, leveraging it to solve complex challenges across various domains.',
      icon: <FaPython />
    },
    {
      category: 'Machine Learning & Deep Learning',
      description: 'Experienced in PyTorch, Hugging Face Transformers, Diffusers, TensorFlow, and Keras for advanced model development and optimization.',
      icon: <SiPytorch />,
      subSkills: [
        {
          name: 'Natural Language Processing (NLP)',
          description: 'Skilled in transformer-based models such as BERT, GPT, T5, Llama, and Mistral. Proficient in fine-tuning techniques like LoRA, QLoRA, and Prompt Tuning for model optimization.'
        },
        {
          name: 'Computer Vision (CV)',
          description: 'Expertise in Image Classification, Object Detection, Image Segmentation, and generative models such as GANs and VAEs.'
        },
        {
          name: 'Multi-modal Models',
          description: 'Skilled in developing text-to-image generative models (e.g., Stable Diffusion) for high-quality image generation. Experienced with Vision Language Models (InternVL, Qwen-VL) for textual and visual data integration. Proficient in CLIP for text-image alignment and cross-modal understanding.'
        },
        {
          name: 'Model Enhancement & Interpretability',
          description: 'Experienced in Distributed Training and memory optimization for large-scale models. Skilled in Integrated Gradients for model interpretability, debugging, and bias detection. Proficient with TensorBoard and Keras Tuner for performance monitoring and hyperparameter tuning.'
        }
      ]
    },
    {
      category: 'AI Application Development',
      description: 'Proficient in LangChain, LangGraph, and LlamaIndex for building complex AI workflows. Skilled in vLLM, FastAPI and Docker for efficient AI model deployment.',
      icon: <SiOpenai />
    },
    {
      category: 'Data Analysis & Visualization',
      description: 'Competent in NumPy, Pandas, and Matplotlib for data manipulation, exploratory analysis, and visualization.',
      icon: <BsGraphUp />
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
            About Me
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Know Me More
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With a passion for AI and its applications, I develop solutions that leverage the power of LLMs and Computer Vision to solve complex problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My journey in tech began with a strong foundation in Computer Science, which evolved into a deep interest in 
              Artificial Intelligence and its potential to transform industries.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm constantly exploring new technologies and methodologies to enhance my skills and deliver cutting-edge solutions.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Personal Info</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Name:</span> Sai Saran Dammavalam</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Email:</span> saran30702@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">From:</span> India</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Role:</span> Machine Learning Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 px-2 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent text-xl">{category.icon}</span>
                    <h4 className="text-lg font-bold">{category.category}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                  
                  {category.subSkills && (
                    <div className="ml-3 md:ml-6 mt-3 space-y-3">
                      {category.subSkills.map((subSkill, subIndex) => (
                        <motion.div 
                          key={subIndex}
                          className="border-l-2 border-accent pl-2 md:pl-4 py-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + subIndex * 0.05 }}
                        >
                          <h5 className="font-semibold text-accent">{subSkill.name}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{subSkill.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
