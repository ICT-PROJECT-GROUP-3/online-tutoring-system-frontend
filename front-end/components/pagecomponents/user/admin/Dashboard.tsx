import { motion } from 'framer-motion';
import React from 'react';

// import the necessary icons from the react-icons library
import { AiOutlineUser } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineStar } from 'react-icons/md';
import NewTutorManagement from './NewTutorManagement';

// define a functional component called "Dashboard"
const Dashboard = () => {
  // define an array of objects that represent each dashboard card
  const dashCards = [
    {
      name: 'Total Tutors',
      link: '#',
      icon: FaChalkboardTeacher,
      number: '56',
      prefix: '',
      surfix: '',
    },
    {
      name: 'Earnings Made',
      link: '#',
      icon: MdAttachMoney,
      number: '700,000',
      prefix: 'K',
      surfix: '',
    },
    {
      name: 'System Rating',
      link: '#',
      icon: AiOutlineUser,
      number: '4.5',
      prefix: '',
      surfixIcon: MdOutlineStar,
    },
  ];

  // render the Dashboard component
  return (
    <div className="my-4 flex flex-col h-full justify-start items-start w-full p-4 sm:pr-10">
      <div>
        <h1 className="text-gray-600 text-xl font-normal mt-4 ml-8 w-full text-start">
          My Dashboard
        </h1>
      </div>
      {/* loop through the dashCards array and render each dashboard card item */}
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mx-auto mb-4 w-full  mt-1">
        {dashCards?.map((card, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 * i }}
            whileHover={{ scale: 1.04 }}
            key={i}
            className="bg-white lg:col-span-1 col-span-1 flex justify-between w-full border shadow-sm rounded-lg p-5 flex-col items-center gap-1 hover:scale-[1.04]"
          >
            {/* display the number value with an optional prefix and suffix */}
            <h2 className="text-[#F48C06] font-light text-lg flex flex-row">
              <span>{card.prefix}</span> {card.number}
              {/* if a surfixIcon is present, render it */}
              {card?.surfixIcon ? (
                <span>
                  {React.createElement(card?.surfixIcon, { size: '15' })}
                </span>
              ) : (
                <span></span>
              )}
            </h2>
            {/* display the name and an optional suffix */}
            <h1 className="text-[#424242] font-light text-sm">
              {' '}
              {card.name} <span>{card.surfix}</span>{' '}
            </h1>
            {/* render the icon for each dashboard card item */}
            <div className="text-[#F48C06] font-light ">
              {React.createElement(card?.icon, { size: '20' })}
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <h1 className="text-gray-600 text-xl font-normal mt-4 ml-8 w-full text-start">
          New Tutors
        </h1>
      </div>
      <div className="bg-white rounded-lg my-4 mt-1 w-full px-8">
        <NewTutorManagement />
      </div>
    </div>
  );
};

// export the Dashboard component for use in other parts of the application
export default Dashboard;
