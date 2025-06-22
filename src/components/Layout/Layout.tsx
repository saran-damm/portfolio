import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Track which section is currently in view
  const [activeSection, setActiveSection] = useState<string>('home');

  // Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll('div[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('div[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Background color based on active section
  const getSectionBackground = () => {
    switch (activeSection) {
      case 'home':
        return 'bg-gradient-to-b from-amber-50 to-white';
      case 'about':
        return 'bg-gradient-to-b from-purple-50 to-amber-50';
      case 'projects':
        return 'bg-gradient-to-b from-amber-50 to-purple-50';
      case 'contact':
        return 'bg-gradient-to-b from-purple-50 to-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${getSectionBackground()}`}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="pt-20"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
