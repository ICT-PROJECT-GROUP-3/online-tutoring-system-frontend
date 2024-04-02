// Deprecated, no longer in use

// import Image from 'next/image';
// import Link from 'next/link';
// import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   const sections = [
//     {
//       title: 'Resources',
//       links: [
//         { label: 'Sign in', url: 'https://flowbite.com/' },
//         { label: 'Back to Top', url: 'https://tailwindcss.com/' },
//       ],
//     },
//     {
//       title: 'Services',
//       links: [
//         { label: 'Find Tutor', url: 'https://flowbite.com/' },
//         { label: 'Become Tutor', url: 'https://tailwindcss.com/' },
//       ],
//     },
//     {
//       title: 'About',
//       links: [
//         { label: 'Team', url: 'https://flowbite.com/' },
//         { label: 'Contact us', url: 'https://tailwindcss.com/' },
//       ],
//     },
//     {
//       title: 'Support',
//       links: [
//         { label: 'Partners', url: 'https://github.com/themesberg/flowbite' },
//         { label: 'Subscribe', url: 'https://discord.gg/4eeurUVvTy' },
//       ],
//     },
//     {
//       title: 'Legal',
//       links: [
//         { label: 'Privacy Policy', url: '#' },
//         { label: 'Terms & Conditions', url: '#' },
//       ],
//     },
//   ];

//   return (
//     <footer className="z-30 items-center px-10 bg-white dark:bg-gray-800">
//       <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
//         <div className="md:flex md:justify-between">
//           <div className="mb-6 md:mb-0">
//             <Link href="/" passHref className="flex items-center">
//               <Image
//                 src="/image/shared/logo.png"
//                 className="h-5 mr-3"
//                 alt="FlowBite Logo"
//                 width={120}
//                 height={100}
//               />
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">
//             {sections.map((section) => (
//               <div key={section.title}>
//                 <h2 className="mb-6 text-sm font-semibold text-gray-900 capitalize dark:text-white">
//                   {section.title}
//                 </h2>
//                 <ul className="text-xs font-light text-gray-600 dark:text-gray-300">
//                   {section.links.map((link) => (
//                     <li key={link.label} className="mb-4">
//                       <Link href={link.url} className="hover:underline">
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <div className="sm:flex sm:items-center sm:justify-between">
//           <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//             © 2023{' '}
//             <a href="https://flowbite.com/" className="hover:underline">
//               Mphunzitsi™s
//             </a>
//             . All Rights Reserved.
//           </span>
//           <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
//             <div className="flex items-center">
//               <a
//                 href="https://github.com/myusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-6 text-white hover:text-orange-500"
//               >
//                 <FaGithub size={20} />
//               </a>
//               <a
//                 href="https://twitter.com/myusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-6 text-white hover:text-orange-500"
//               >
//                 <FaTwitter size={20} />
//               </a>
//               <a
//                 href="https://twitter.com/myusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-6 text-white hover:text-orange-500"
//               >
//                 <FaFacebook size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
