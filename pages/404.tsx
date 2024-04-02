import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { motion } from 'framer-motion';

const NotFound = () => {
  const router = useRouter();

  // redirect to home page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>

      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}

      className='w-full h-screen flex flex-col gap-7 justify-center items-center'>
        <Image src="/image/shared/404.png" alt="404" width={500} height={500} />
        <h1 className="text-4xl font-bold">
          Ooops! That page cannot be found :({' '}
        </h1>
      </motion.div>
    </div>
  );
};

export default NotFound;
