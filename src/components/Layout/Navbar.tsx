import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { TbBrain } from 'react-icons/tb';
import { FaLaptopCode, FaRobot } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
    
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/95 border-b border-accent/20 shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <ScrollLink 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={800} 
            className={`text-2xl font-bold text-accent cursor-pointer transition-opacity duration-300 flex items-center gap-2 ${activeSection === 'home' ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0 }}
              >
                <TbBrain className="text-2xl text-accent" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              >
                <FaLaptopCode className="text-2xl text-accent" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
              >
                <FaRobot className="text-2xl text-accent" />
              </motion.div>
            </div>
          </ScrollLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink to="home" active={activeSection === 'home'}>Home</NavLink>
            <NavLink to="about" active={activeSection === 'about'}>About</NavLink>
            <NavLink to="projects" active={activeSection === 'projects'}>Expertise</NavLink>
            <NavLink to="contact" active={activeSection === 'contact'}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col gap-4">
              <NavLink to="home" active={activeSection === 'home'} onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="about" active={activeSection === 'about'} onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink to="projects" active={activeSection === 'projects'} onClick={() => setIsOpen(false)}>Projects</NavLink>
              <NavLink to="contact" active={activeSection === 'contact'} onClick={() => setIsOpen(false)}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, active, ...props }: NavLinkProps) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={800}
    offset={-80}
    className={`cursor-pointer transition-colors ${active 
      ? 'text-accent font-medium' 
      : 'text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent'}`}
    {...props}
  >
    <div className="relative">
      {children}
      {active && (
        <motion.div 
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
          layoutId="navbar-indicator"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  </ScrollLink>
);

export default Navbar;
