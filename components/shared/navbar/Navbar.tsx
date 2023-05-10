// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { BiMenuAltRight } from 'react-icons/bi';
// import { MdDarkMode } from 'react-icons/md';
// import HidddenMenuBar from './HidddenMenuBar';

// const Navbar = () => {
//   const [menuState, setMenuState] = useState(false);
//   const toggleMenu = () => {
//     setMenuState(!menuState);
//   };

//   const hiddenMenuBar = (state: Boolean) => {
//     if (state) {
//       return (
//         <motion.div
//           onClick={toggleMenu}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, transition: { duration: 0.5 } }}
//           transition={{
//             duration: 0.5,
//             delay: 0.2,
//             stiffness: 70,
//             ease: 'easeInOut',
//           }}
//           className="justify-end w-full sm:w-1/5 top-16 right-0 absolute h-full z-50 p-5 rounded-lg"
//         >
//           <HidddenMenuBar />
//         </motion.div>
//       );
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -100 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, transition: { duration: 0.5 } }}
//       transition={{
//         duration: 0.6,
//         delay: 0.8,
//         stiffness: 70,
//         ease: 'easeInOut',
//       }}
//       className="bg-slate-100 shadow-lg"
//     >
//       <header className="bg-white">
//         <nav className="flex justify-between items-center w-full px-4  mx-auto">
//           <div>
//             <Link href="/">
//               <Image
//                 className="cursor-pointer w-2/3 my-2"
//                 src="/image/shared/logo.png"
//                 alt="..."
//                 width={180}
//                 height={50}
//               />
//             </Link>
//           </div>
//           <div className="nav-links duration-500 absolute md:static bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full items-center px-5 sm:flex hidden  ">
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-2 gap-8">
//               <li>
//                 <Link
//                   className="hover:text-gray-500 text-sm font-medium"
//                   href="#"
//                 >
//                   Become a Tutor
//                 </Link>
//               </li>
//               <li className="bg-[#d03434] text-white hover:bg-white hover:border-2 hover:border-orange-200 hover:text-grey-700  ease-in-out py-1 w-28 text-center rounded">
//                 <Link
//                   className="hover:scale-50 font-medium hover:text-gray-700 text-sm"
//                   href="#"
//                 >
//                   Find a Tutor
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <div className="flex gap-4 mr-2">
//               <div className="gap-4 hidden sm:flex">
//                 <Link
//                   href="/auth"
//                   className="text-grey-700 font-medium text-sm my-auto hover:text-gray-500"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="../../../Auth"
//                   className="text-grey-700 font-medium text-sm my-auto hover:text-gray-500"
//                 >
//                   Sign In
//                 </Link>
//                 <Link href="/auth">
//                   <MdDarkMode className="h-8 w-8 text-gray-700" />
//                 </Link>
//               </div>
//               <BiMenuAltRight
//                 className="h-8 w-8 text-[#d03434]"
//                 onClick={toggleMenu}
//               />
//             </div>
//           </div>
//         </nav>
//         {hiddenMenuBar(menuState)}
//       </header>
//     </motion.div>

//     // <div className="bg-slate-100 ">
//     //   <header>
//     //     <nav className="flex max-h-12 justify-between text-center py-2">
//     //       <div className="flex justify-between items-center py-4 px-10 ">
//     //         <Image
//     //           className="w-16"
//     //           src="/img/shared/background.jpg"
//     //           alt="logo"
//     //           height={2}
//     //           width={2}
//     //         />
//     //       </div>
//     //       <div className="flex gap-8">
//     //         <div>
//     //           <p>become a tutor</p>
//     //         </div>
//     //         <div className="bg-red-500 my-1 w-28 rounded">
//     //           <p>Find a Tutor</p>
//     //         </div>
//     //       </div>
//     //       <div className="flex gap-8 mr-2">
//     //         <Link href="/auth">About Us</Link>
//     //         <Link href="../../../pages/Auth">Sign In</Link>
//     //         <Link href="/auth">
//     //           <MdDarkMode className="h-8 w-8" />
//     //         </Link>
//     //         <BiMenuAltRight className="h-8 w-8 text-orange-500" />
//     //       </div>
//     //     </nav>
//     //   </header>
//     // </div>
//   );
// };

// export default Navbar;

import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import { useAuth } from '../../../lib/services/firebase/auth';

const navigationDesktop = [
  { name: 'Sign In', href: '/Auth' },
  { name: 'About', href: '#' },
];
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'tutor Page', href: '/' },
  { name: 'Sign In', href: '/Auth' },
  { name: 'Register', href: '/Auth/SignUp' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { authUser, isLoading, signOut } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push('/Auth');
    }
  });
  return (
    <div className="bg-whites shadow-lg w-full">
      <header className="relative inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/image/shared/logo.png"
                alt=""
                width={170}
                height={100}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <BiMenuAltRight
                className="h-8 w-8 text-[#d03434]"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4 items-center">
            <Link href="/tutor_profile">Find Tutor</Link>
            <div className="rounded-[5px] bg-[#d03434]  hover:bg-orange-500 p-1 w-auto">
              <Link href="/Auth">
                <p className="text-md text-center text-[#fbf6e6] ">
                  Become Tutor
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
            <button
              className="btn btn-secondary bg-blue-500 p-4 text-white"
              onClick={() => signOut()}
            >
              {' '}
              log out
            </button>
            {navigationDesktop.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/auth">
              <MdDarkMode className="h-6 w-6 text-gray-700" />{' '}
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/image/shared/logo.png"
                  alt=""
                  width={170}
                  height={100}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 text-[#d03434] font-semibold"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-24 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block text-center rounded-lg px-3 py-2 text-base font leading-7 text-gray-900 hover:text-orange-400"
                    >
                      <p> {item.name}</p>
                    </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
