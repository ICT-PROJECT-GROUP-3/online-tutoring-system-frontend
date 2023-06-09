import { easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import {
  FaChartLine,
  FaClock,
  FaLifeRing,
  FaMoneyBill,
  FaUser,
} from 'react-icons/fa';
import { AuthContext } from '../../../../context/auth/SessionContext';
import Image from 'next/image';

const TutorSideNav = ({ onSidebarClick }) => {
  interface Link {
    name: string;
    link: string;
    reactIcon: JSX.Element;
    colour: string;
  }

  const links: Link[] = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      reactIcon: <FaChartLine />,
      colour: '#ff0000', // Replace with the desired color value
    },
    {
      name: 'Profile',
      link: '/profile',
      reactIcon: <FaUser />,
      colour: '#00ff00', // Replace with the desired color value
    },
    {
      name: 'Support',
      link: '/support',
      reactIcon: <FaLifeRing />,
      colour: '#0000ff', // Replace with the desired color value
    },
    {
      name: 'Payment',
      link: '/payment',
      reactIcon: <FaMoneyBill />,
      colour: '#ffff00', // Replace with the desired color value
    },
    {
      name: 'Session',
      link: '/session',
      reactIcon: <FaClock />,
      colour: '#ff00ff', // Replace with the desired color value
    },
  ];

  // logic
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  //routing dashboard component
  const handleClick = (componentName: string) => {
    onSidebarClick(componentName);
  };

  //logout

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      router.push('/Auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.aside
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className=" fixed inset-y-0 flex flex-wrap items-center justify-between p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-gray-50 border-0 shadow-xl bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 md:w-60"
      aria-expanded="false"
      id="sidenav-main"
      sidenav-hidden
    >
      <div className="h-19 w-full text-center">
        <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
          sidenav-close
        ></i>
        <Link
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
          href="/"
          target="_blank"
        >
          <Image
            src="/assets/images/Logo.png"
            className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
            alt="main_logo"
            width={50}
            height={50}
          />
          <Image
            src="/assets/images/Logo.png"
            className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
            alt="main_logo"
            width={50}
            height={50}
          />
          <span className="ml-3 font-bold transition-all duration-200 ease-nav-brand text-gray-700">
            Mphunzitsi
          </span>
        </Link>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="flex flex-col items-center justify-center w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          {links.map((link, i) => (
            <li className="mt-0.5 w-full" key={i} >
              <Link
                className="py-2.7 bg-blue-500/13 text-dark opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                href=""
                onClick={() => handleClick(`${link.name}`)}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {link.reactIcon}
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-4">
        {/* <!-- load phantom colors for card after: --> */}
        {/* <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p> */}
        <div className="h-full"></div>
        <Link
          href="/payment"
          className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px"
        >
          Make Payment
        </Link>
        {/* <!-- pro btn  --> */}
        <Link
          href="#"
          className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-orange-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
          onClick={handleLogout}
        >
          {loading ? 'Come back soon...' : 'Logout'}
        </Link>
      </div>
    </motion.aside>
  );
};

export default TutorSideNav;
