import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import HidddenMenuBar from './HidddenMenuBar';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const hiddenMenuBar = (state: Boolean) => {
    if (state) {
      return (
        <motion.div
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            stiffness: 70,
            ease: 'easeInOut',
          }}
          className="justify-end w-full sm:w-1/5 top-16 right-0 absolute h-full z-50 p-5 rounded-lg"
        >
          <HidddenMenuBar />
        </motion.div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{
        duration: 0.6,
        delay: 0.8,
        stiffness: 70,
        ease: 'easeInOut',
      }}
      className="bg-slate-100 shadow-lg"
    >
      <header className="bg-white">
        <nav className="flex justify-between items-center w-full px-4  mx-auto">
          <div>
            <Link href="/">
              <Image
                className="cursor-pointer w-2/3 my-2"
                src="/image/shared/logo.png"
                alt="..."
                width={180}
                height={50}
              />
            </Link>
          </div>
          <div className="nav-links duration-500 absolute md:static bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full items-center px-5 sm:flex hidden  ">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-2 gap-8">
              <li>
                <Link
                  className="hover:text-gray-500 text-sm font-medium"
                  href="#"
                >
                  Become a Tutor
                </Link>
              </li>
              <li className="bg-orange-500 text-white hover:bg-white hover:border-2 hover:border-orange-200 hover:text-grey-700  ease-in-out py-1 w-28 text-center rounded">
                <Link
                  className="hover:scale-50 font-medium hover:text-gray-700 text-sm"
                  href="#"
                >
                  Find a Tutor
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex gap-4 mr-2">
              <div className="gap-4 hidden sm:flex">
                <Link
                  href="/auth"
                  className="text-grey-700 font-medium text-sm my-auto hover:text-gray-500"
                >
                  About Us
                </Link>
                <Link
                  href="../../../Auth"
                  className="text-grey-700 font-medium text-sm my-auto hover:text-gray-500"
                >
                  Sign In
                </Link>
                <Link href="/auth">
                  <MdDarkMode className="h-8 w-8 text-gray-700" />
                </Link>
              </div>
              <BiMenuAltRight
                className="h-8 w-8 text-orange-500"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </nav>
        {hiddenMenuBar(menuState)}
      </header>
    </motion.div>

    // <div className="bg-slate-100 ">
    //   <header>
    //     <nav className="flex max-h-12 justify-between text-center py-2">
    //       <div className="flex justify-between items-center py-4 px-10 ">
    //         <Image
    //           className="w-16"
    //           src="/img/shared/background.jpg"
    //           alt="logo"
    //           height={2}
    //           width={2}
    //         />
    //       </div>
    //       <div className="flex gap-8">
    //         <div>
    //           <p>become a tutor</p>
    //         </div>
    //         <div className="bg-red-500 my-1 w-28 rounded">
    //           <p>Find a Tutor</p>
    //         </div>
    //       </div>
    //       <div className="flex gap-8 mr-2">
    //         <Link href="/auth">About Us</Link>
    //         <Link href="../../../pages/Auth">Sign In</Link>
    //         <Link href="/auth">
    //           <MdDarkMode className="h-8 w-8" />
    //         </Link>
    //         <BiMenuAltRight className="h-8 w-8 text-orange-500" />
    //       </div>
    //     </nav>
    //   </header>
    // </div>
  );
};

export default Navbar;
