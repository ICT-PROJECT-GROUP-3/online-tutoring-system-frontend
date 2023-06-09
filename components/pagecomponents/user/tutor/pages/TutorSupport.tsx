import { motion } from 'framer-motion';
import Link from 'next/link';
import TutorNavbar from '../TutorNavbar';

const TutorSupport = () => {
  const pageName = 'Support';

  //array of support options
  const supportOptions = [
    {
      name: 'Payment',
      link: '/payment',
      description: 'Payment related issues',
      colour: '#ffff00', // Replace with the desired color value
    },
    {
      name: 'Session',
      link: '/session',
      description: 'Session related issues',
      colour: '#ff00ff', // Replace with the desired color value
    },
    {
      name: 'Profile',
      link: '/profile',
      description: 'Profile related issues',
      colour: '#00ff00', // Replace with the desired color value
    },
    {
      name: 'Others',
      link: '/others',
      description: 'Other issues',
      colour: '#f48c06', // Replace with the desired color value

    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      <TutorNavbar pageName={pageName} />
      <div className="ml-80 flex items-center mt-5">
      <ul className="flex flex-wrap bg-transparent gap-5 w-full md:w-4/5 mx-auto md:top-6">
          {supportOptions.map((option, i) => (
            <motion.li
              initial={{ opacity: 0 , y: 100}}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ ease: 'easeInOut', duration: 0.6, delay: i * 0.3 }}
            
            key={i} className={`flex flex-row justify-between items-center border-b bg-violet-300 border-gray-200 w-full md:w-96 h-64 relative min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border`} >
              <Link
                  href={option.link} className='w-full h-full'>
              <div className="flex flex-col justify-center items-center w-full h-full bg-[#1c1c1c8a] rounded-2xl ">
                <div
                  className="font-semibold text-white text-xl"
                >
                  {option.name}
              
                <p className="text-gray-300 text-sm">{option.description}</p>
                </div>
              </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TutorSupport;
