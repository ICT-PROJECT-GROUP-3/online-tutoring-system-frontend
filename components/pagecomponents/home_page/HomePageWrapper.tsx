'use Client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const PageWrapper = ({ children }) => {
  const squareVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        bounce: 0.2,
        stiffness: 50,
      },
    },
    hidden: { opacity: 0, x: -200 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="w-screen px-10">
      <AnimatePresence>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
