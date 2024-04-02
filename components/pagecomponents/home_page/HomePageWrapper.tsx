'use Client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * PageWrapper Component
 * A wrapper component for a page with animation and intersection observer functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be wrapped by the component.
 * @returns {JSX.Element} The rendered PageWrapper component.
 */
const PageWrapper = ({ children }) => {
  /**
   * Animation variants for the component.
   *
   * @type {Object}
   */
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

  /**
   * Animation controls for the component.
   *
   * @type {Object}
   */
  const controls = useAnimation();

  /**
   * Intersection observer hook.
   *
   * @type {Array}
   * @property {RefObject} ref - Reference to the observed element.
   * @property {boolean} inView - Flag indicating whether the component is in view.
   */
  const [ref, inView] = useInView();

  /**
   * Effect hook to start the animation when the component comes into view.
   */
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  /**
   * Render the PageWrapper component.
   *
   * @returns {JSX.Element} The rendered PageWrapper component.
   */
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
