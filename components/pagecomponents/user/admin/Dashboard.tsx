/**
 * Imports necessary modules and components.
 */
import { motion } from 'framer-motion';
import React from 'react';

// Import the necessary icons from the react-icons library
import { AiOutlineUser } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineStar } from 'react-icons/md';
import NewTutorManagement from './NewTutorManagement';

/**
 * Functional component representing the Dashboard.
 * Displays a dashboard with cards showing various statistics.
 */
const Dashboard = () => {
  /**
   * Array of objects representing each dashboard card.
   * Each card has properties like name, link, icon, number, prefix, and suffix.
   */
  const dashCards = [
    {
      name: 'Total Tutors',
      link: '#',
      icon: FaChalkboardTeacher,
      number: '56',
      prefix: '',
      suffix: '',
    },
    {
      name: 'Earnings Made',
      link: '#',
      icon: MdAttachMoney,
      number: '700,000',
      prefix: 'K',
      suffix: '',
    },
    {
      name: 'System Rating',
      link: '#',
      icon: AiOutlineUser,
      number: '4.5',
      prefix: '',
      suffixIcon: MdOutlineStar,
    },
  ];

  /**
   * Renders the Dashboard component.
   *
   * @returns JSX elements representing the Dashboard.
   */
  return (
    <div className="flex flex-col items-start justify-start w-full h-full p-4 my-4 sm:pr-10">
      <div>
        <h1 className="w-full mt-4 ml-8 text-xl font-normal text-gray-600 text-start">
          My Dashboard
        </h1>
      </div>
      {/* Loop through the dashCards array and render each dashboard card item */}
      <div className="grid w-full grid-cols-1 gap-5 mx-auto mt-1 mb-4 sm:grid-cols-3">
        {dashCards?.map((card, i) => (
          <motion.div
            /**
             * Sets initial and animate properties for animation using framer-motion library.
             */
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * i }}
            whileHover={{ scale: 1.04 }}
            key={i}
            className="bg-white lg:col-span-1 col-span-1 flex justify-between w-full border shadow-sm rounded-lg p-5 flex-col items-center gap-1 hover:scale-[1.04]"
          >
            {/* Display the number value with an optional prefix and suffix */}
            <h2 className="text-[#F48C06] font-light text-lg flex flex-row">
              <span>{card.prefix}</span> {card.number}
              {/* If a suffixIcon is present, render it */}
              {card?.suffixIcon ? (
                <span>
                  {React.createElement(card?.suffixIcon, { size: '15' })}
                </span>
              ) : (
                <span></span>
              )}
            </h2>
            {/* Display the name and an optional suffix */}
            <h1 className="text-[#424242] font-light text-sm">
              {card.name} <span>{card.suffix}</span>
            </h1>
            {/* Render the icon for each dashboard card item */}
            <div className="text-[#F48C06] font-light">
              {React.createElement(card?.icon, { size: '20' })}
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <h1 className="w-full mt-4 ml-8 text-xl font-normal text-gray-600 text-start">
          New Tutors
        </h1>
      </div>
      <div className="w-full px-8 my-4 mt-1 bg-white rounded-lg">
        <NewTutorManagement />
      </div>
    </div>
  );
};

// Export the Dashboard component for use in other parts of the application
export default Dashboard;
