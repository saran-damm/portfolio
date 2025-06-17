import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'CareerConnect',
      description: 'AI-powered job application system utilizing open-source LLMs for job description enhancement, resume shortlisting, and automated interview question generation.',
      image: '/career-connect.jpg',
      technologies: ['FastAPI', 'LLMs', 'Python', 'AI'],
      githubUrl: 'https://github.com/yourusername/career-connect'
    },
    {
      title: 'Heatwave & AQI Prediction',
      description: 'Predictive models for weather forecast and air quality index in Tier-2 cities of Telangana State. Deployed on Google Cloud with full-stack implementation.',
      image: '/heatwave-prediction.jpg',
      technologies: ['Machine Learning', 'Deep Learning', 'Google Cloud', 'Full Stack'],
      githubUrl: 'https://github.com/yourusername/heatwave-prediction',
      demoUrl: 'https://heatwave-prediction.com'
    }
  ];

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card group"
  >
    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        GitHub
      </a>
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors"
        >
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

export default Projects;
