import { motion } from 'framer-motion';
import Link from 'next/link';

const HidddenMenuBar = () => {
  //array of nav links of the online tutoring website
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },

    {
      name: 'Become a Tutor',
      link: '/',
    },
    {
      name: 'Find A Tutor',
      link: '/about',
    },

    {
      name: 'Pricing',
      link: '/pricing',
    },
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
    {
      name: 'Register',
      link: '/Auth/SignUp',
    },
    {
      name: 'Sign In',
      link: '/Auth',
    },
  ];

  //list of social media icons

  return (
    <motion.div className=" flex items-center py-3 min-h-[90vh] bg-gray-500 left-0 justify-center rounded-2xl ">
      <ul className="flex flex-col gap-4">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-center text-white font-medium text-sm my-auto"
          >
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default HidddenMenuBar;
