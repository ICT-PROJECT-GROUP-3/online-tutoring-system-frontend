import { motion } from 'framer-motion';
import TutorNavbar from '../TutorNavbar';

const TutorSupport = () => {
  const pageName = 'Support';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      <TutorNavbar pageName={pageName} />
      <div className='ml-80'>
        calss
      </div>
    </motion.div>
  );
};

export default TutorSupport;
