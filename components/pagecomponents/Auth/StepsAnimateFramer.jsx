'use Client';

import { AnimatePresence, motion } from 'framer-motion';

const StepsAnimateFramer = ({ children }) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
            stiffness: 70,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StepsAnimateFramer;
