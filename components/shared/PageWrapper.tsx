'use Client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

/**
 * Component responsible for rendering the main content of a page.
 *
 * @component
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the component.
 * @returns {JSX.Element} - The rendered component.
 */
const PageWrapper = ({ children }) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: 'spring',
            bounce: 0.4,
            stiffness: 70,
          }}
          className="flex flex-col items-center justify-between w-screen p-0 md:p-2"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
