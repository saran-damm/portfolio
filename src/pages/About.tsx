import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a Software Engineer specializing in Machine Learning and AI applications. With expertise in LLMs, Computer Vision, and Multi-modal Models, I focus on developing innovative solutions using cutting-edge AI technologies. Currently at Splore, I work on developing and optimizing RAG applications and fine-tuning Large Language Models.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {/* Add your education details here */}
              <div className="card">
                <h4 className="font-semibold">Bachelor of Technology (B.Tech)</h4>
                <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering (AI & ML)</p>
                <p className="text-gray-600 dark:text-gray-400">B V Raju Institute of Technology, Narsapur</p>
                <p className="text-sm text-gray-500">CGPA: 8.70</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Add your skills here */}
              <SkillCard title="AI/ML" skills={['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LlamaIndex']} />
              <SkillCard title="NLP & Vision" skills={['BERT', 'GPT', 'Llama', 'CLIP', 'Stable Diffusion']} />
              <SkillCard title="Development" skills={['Python', 'FastAPI', 'Docker', 'vLLM']} />
              <SkillCard title="Data" skills={['NumPy', 'Pandas', 'Matplotlib', 'TensorBoard']} />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-6">
            {/* Add your experience details here */}
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold">Software Engineer - Machine Learning</h4>
              <p className="text-accent">Splore</p>
              <p className="text-sm text-gray-500">June 2024 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                <li>Developed and optimized RAG applications with advanced ranking metrics</li>
                <li>Fine-tuned LLMs and implemented sophisticated RAG agent workflows</li>
                <li>Built pipelines for parsing complex PDF documents using Agentic Workflows</li>
                <li>Delivered high-impact PoC solutions for financial document parsing and report generation</li>
              </ul>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold">Machine Learning Engineer</h4>
              <p className="text-accent">Eizen.ai</p>
              <p className="text-sm text-gray-500">August 2023 - April 2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                <li>Developed Time-Series Forecasting Models using Transformers</li>
                <li>Implemented causal modelling using Graph Attention Networks</li>
                <li>Built real-time AI applications using LLaVa, LLaMa, and Flan-T5</li>
                <li>Developed video analytics platform using YOLO models</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="card">
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="space-y-1">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="text-gray-600 dark:text-gray-400 text-sm"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
