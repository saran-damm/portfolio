import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 0.5 }
        }}
      >
        <div className="relative w-24 h-24">
          {[0, 1, 2, 3].map((index) => (
            <motion.span
              key={index}
              className="absolute top-0 left-0 w-full h-full border-4 border-accent rounded-full"
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <motion.h2 
          className="mt-6 text-2xl font-bold text-accent"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
