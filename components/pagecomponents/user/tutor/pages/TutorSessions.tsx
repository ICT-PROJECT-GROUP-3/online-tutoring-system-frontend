import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import TutorNavbar from '../TutorNavbar';

const TutorSessions = () => {
  const pageName = 'Session';

  //array of students sessions

  const sessions = [
    {
      name: 'John Doe',
      duration: '1hr',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
    },
    {
      name: 'Jane Doe',
      duration: '1hr',
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
    },
    {
      name: 'John Doe',
      duration: '1hr',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
    },
    {
      name: 'Jane Doe',
      duration: '1hr',
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
    },
    {
      name: 'John Doe',
      duration: '1hr',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
    },
    {
      name: 'Jane Doe',
      duration: '1hr',
      sessions: 3,
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
    },
  ];

  //array of session history

  const sessionHistory = [
    {
      name: 'John Doe',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
    {
      name: 'Jane Doe',
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
    {
      name: 'John Doe',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
    {
      name: 'Jane Doe',
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
    {
      name: 'John Doe',
      subject: 'Mathematics',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
    {
      name: 'Jane Doe',
      subject: 'English',
      date: '12/12/2021',
      time: '12:00pm',
      duration: '1hr',
      amount: '$50',
      status: 'Completed',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      <TutorNavbar pageName={pageName} />
      {/* <!-- cards --> */}
      <div className="lg:ml-72 px-6 py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div className="flex flex-wrap -mx-3">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}
            className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 cursor-pointer hover:scale-[1.04]"
          >
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-2">
                    <div className="w-full">
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-gray dark:opacity-60">
                        New Session
                      </p>
                      <h5 className="mb-2 font-bold text-gray-600">
                        with Students
                      </h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div
                      className={`w-10 h-10 text-center rounded-full flex justify-center items-center bg-gradient-to-tl from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700`}
                    >
                      <AiOutlinePlus className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* frequent students */}

        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-600 border-black-125 rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 rounded-t-4">
                <div className="flex justify-between">
                  <h6 className="mb-2 dark:text-white">Upcoming Sessions</h6>
                </div>
              </div>
              <div className="overflow-x-auto overflow-hidden">
                <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                  <tbody>
                    {sessions?.map((session, i) => (
                      <motion.tr
                        key={i}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: 'backInOut',
                          delay: 1 + i * 0.3,
                        }}
                        className="border-t border-gray-200 dark:border-white/40"
                      >
                        <td className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {session.name}
                        </td>
                        <td className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {session.subject}
                        </td>
                        <td className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {session.date}
                        </td>
                        <td className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {session.time}
                        </td>
                        <td className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {session.duration}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* my trending subjects */}
          <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
            <div className="border-black/12.5 shadow-xl bg-white  dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl max-h-96 border-0 border-solid bg-clip-border">
              <div className="p-4 pb-0 rounded-t-4">
                <h6 className="mb-0 text-gray-700 font-semibold">
                  Session History
                </h6>
              </div>
              <div className="flex-auto p-4 overflow-scroll">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {sessionHistory?.map((session, i) => (
                    <motion.li
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: 'backInOut',
                        delay: 1 + i * 0.3,
                      }}
                      className="relative flex flex-col min-w-0 break-words bg-gray-600 dark:bg-slate-850 dark:shadow-dark-xl dark:border-2 shadow-xl rounded-lg mb-4 border-0"
                    >
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full max-w-full flex flex-row justify-between">
                            <div>
                              <h5 className="mb-0 font-semibold text-gray-300">
                                {session.name}
                              </h5>
                              <p className="mb-0 text-xs text-gray-400">
                                {session.subject}
                              </p>
                              <p className="mb-0 text-xs text-gray-400">
                                {session.date}
                              </p>
                            </div>
                            <div>
                              <p className="mb-0 text-xs text-gray-400">
                                {session.time}
                              </p>
                              <p className="mb-0 text-xs text-gray-500">
                                {session.duration}
                              </p>
                              <p className="mb-0 text-xs text-gray-500">
                                {session.amount}
                              </p>
                              <p className="mb-0 text-xs text-gray-500">
                                {session.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end cards --> */}
    </motion.div>
  );
};

export default TutorSessions;
