'use Client';

// Importing necessary dependencies
import { AnimatePresence, motion } from 'framer-motion';

// Component for wrapping pages
const PageWrapper = ({ children }) => {
  return (
    <div>
      {/* Animating presence of children */}
      <AnimatePresence>
        <motion.div
          // Initial animation styles
          initial={{ opacity: 0, scale: 0.3 }}
          // Animation styles when present
          animate={{ opacity: 1, scale: 1 }}
          // Animation styles when exiting
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          // Transition configurations
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
            stiffness: 70,
          }}
          // Styling for the component
          className="flex flex-col items-center justify-between w-screen p-0 md:p-2"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
