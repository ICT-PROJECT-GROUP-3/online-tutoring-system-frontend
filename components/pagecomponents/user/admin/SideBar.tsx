import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineLogout, AiOutlineRight, AiOutlineUser } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaChevronRight, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  onSidebarClick: (componentName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSidebarClick }) => {
  const handleClick = (componentName: string) => {
    onSidebarClick(componentName);
    setOpen(!open);
  };

  const menus = [
    // define an array of objects that represent each menu item
    { name: 'dashboard', component: 'dashboard', icon: MdSpaceDashboard },
    { name: 'Users', component: 'users', icon: AiOutlineUser },
    // { name: 'session', component: '#', icon: TbRepeat },
    // { name: 'payment', component: '#', icon: MdPayment, margin: true },
    // { name: 'support', component: '#', icon: MdSupportAgent },
  ];
  const [activeComponent, setActiveComponent] = useState('dashboard'); // use the useState hook to keep track of the state of the sidebar
  const [open, setOpen] = useState(false); // use the useState hook to keep track of the state of the sidebar

  return (
    // tutor dashboard section
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed sm:sticky flex left-0 top-16"
    >
      <div
        className={`left-3 mt-2 rounded-r-lg p-1 animate-pulse ${
          open ? 'hidden' : 'fixed flex sm:hidden'
        }  text-[#424242]`}
      >
        <FaChevronRight
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)} // toggle the state of the sidebar when the menu icon is clicked
        />
      </div>
      {/* tutor dashboard sidebar */}
      <div
        className={`bg-[#ffffff] min-h-screen  ${
          open
            ? 'w-screen h-screen sm:w-72 transition duration-75 delay-75'
            : 'w-16 hidden sm:flex flex-col'
        } duration-500 text-[#424242] px-4`}
      >
        <div className="py-3 flex justify-end">
          {open ? (
            <FaTimes
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)} // toggle the state of the sidebar when the menu icon is clicked
            />
          ) : (
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)} // toggle the state of the sidebar when the menu icon is clicked
            />
          )}
        </div>
        <div
          className={` mt-4 flex flex-col gap-0.4 justify-center relative items-center ${
            open ? 'mt-28' : 'left-0 hidden md:block'
          }`}
        >
          <div className="flex flex-col justify-center items-start">
            {menus?.map((menu, i) => (
              <li
                onClick={() => handleClick(`${menu.component}`)}
                key={i}
                className={`group flex text-start text-sm text-[#424242] gap-2.5 font-normal p-2 hover:text-[#F48C06] rounded-md cursor-pointer`}
              >
                {/* render the icon for each menu item */}
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>

                {/* render the name of each menu item */}
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>

                {/* render a tooltip for each menu item */}
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-20 bg-[#42424200] font-semibold whitespace-pre text-[#F48C06] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </li>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full h-16 items-end pb-4">
          {open ? (
            <p className="mx-auto hover:text-[#F48C06] cursor-pointer text-sm">
              LOGOUT
            </p>
          ) : (
            <AiOutlineLogout
              size="20"
              className="mx-auto hover:text-[#F48C06] hidden md:flex"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
