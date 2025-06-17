import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      
      // Add a small delay before showing content to ensure smooth transition
      const contentTimer = setTimeout(() => {
        setContentVisible(true);
      }, 100);
      
      return () => clearTimeout(contentTimer);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black min-h-screen">
              <section id="home" className="min-h-screen">
                {contentVisible && <Home />}
              </section>
              
              <section id="about" className="min-h-screen py-20">
                {contentVisible && <About />}
              </section>
              
              <section id="projects" className="min-h-screen py-20">
                {contentVisible && <Projects />}
              </section>
              
              <section id="contact" className="min-h-screen py-20">
                {contentVisible && <Contact />}
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
