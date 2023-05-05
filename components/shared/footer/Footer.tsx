import Image from 'next/image';
import React from 'react';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {

     return (
     <footer className="bg-white dark:bg-gray-900">
     <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            {/*replace the flowbite.com image with our icon of mphuzitsi */}
              <a href="https://flowbite.com/" className="flex items-center">
                  <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" width={50} height={50} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mphunzitsi</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">
              <div>
                  <h2 className="mb-6 text-sm font-semibold  text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Sign in</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Back to Top</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Find Tutor</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Become Tutor</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Team</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Contact us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Partners</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Subscribe</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Mphuzzitsi™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <div className="flex items-center">
            <a
              href="https://github.com/myusername"     
              target="_blank"
              rel="noopener noreferrer"
               className="text-white hover:text-gray-400 ml-6"
            >
              <FaGithub size={20} />
             </a>
            <a
              href="https://twitter.com/myusername"
              target="_blank"
             rel="noopener noreferrer"
               className="text-white hover:text-gray-400 ml-6"
             ><FaTwitter size={20} />
             </a>
             <a
            href="https://twitter.com/myusername"
            target="_blank"
              rel="noopener noreferrer"
            className="text-white hover:text-gray-400 ml-6"
         >
             <FaFacebook size={20} />
           </a>
          
   </div> 
       </div>
      </div>
    </div>
   
   </footer>

);
}
export default Footer;




// import React from 'react';
// import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

// function Footer() {
//     return (
//       <footer className="bg-gray-700 py-4 flex w-full">
//         <div className="container mx-auto flex flex-row justify-between px-4 w-40">
//           {/* <p className="text-white">© {new Date().getFullYear()} Mphuzitsi</p> */}
//           <div className="flex items-center">
//             <a
//               href="https://github.com/myusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400 ml-6"
//             >
//               <FaGithub size={20} />
//             </a>
//             <a
//               href="https://twitter.com/myusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400 ml-6"
//             >
//               <FaTwitter size={20} />
//             </a>
//             <a
//               href="https://twitter.com/myusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-gray-400 ml-6"
//             >
//               <FaFacebook size={20} />
//             </a>
          
//           </div>
//         </div>
//          <div className="container py-4 bg-lime-800">
//          <div className="flex justify-center w-full max-w-screen-lg mx-auto">
//          <div> <a href="/support" className="text-white hover:text-gray-400 ml-6">Support</a></div>
//          <div><a href="/terms" className="text-white hover:text-gray-400 ml-6">Terms and Conditions</a></div>
//          <div> <a href="/about" className="text-white hover:text-gray-400 ml-6">About us</a></div>
//          <div> <a href="/find_tutor" className="text-white hover:text-gray-400 ml-6">Find Tutor</a></div>
//          <div> <a href="/become_tutor" className="text-white hover:text-gray-400 ml-6">Become Tutor</a></div>
         
//          </div>
//          </div>
//          <div className="container py-4 bg-lime-500 w-60">
//        <div className="flex items-start">
//        <a href="/signin" className="text-white hover:text-gray-400 ml-1">Sign In</a>
//        </div>
//        </div>

//       </footer>
//     );
//   }
//   export default Footer;
