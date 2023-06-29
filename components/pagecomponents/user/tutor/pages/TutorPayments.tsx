import { motion } from 'framer-motion';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import TutorNavbar from '../TutorNavbar';
import Link from 'next/link';
import {RiDeleteBinLine} from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../../../../context/auth/SessionContext';

const TutorPayments = () => {
  const pageName = 'Payments';

  //context
  const {user} = useContext(AuthContext)

  //array of objects for transactions
  const transactions = [
    {
      name: 'Paypal',
      date: '27 March 2020, at 12:30 PM',
      amount: '- $ 2,500',
      income: false,
    },
    {
      name: 'john',
      date: '27 March 2020, at 04:30 AM',
      amount: '+ $ 2,000',
      income: true,
    },
    {
      name: 'Clark',
      date: '26 March 2020, at 05:00 AM',
      amount: 'Pending',
      income: false,
    },
    {
      name: 'mark',
      date: '26 March 2020, at 13:45 PM',
      amount: '+ $ 750',
      income: true,
    },
    {
      name: 'Jane',
      date: '26 March 2020, at 12:30 PM',
      amount: '+ $ 1,000',
      income: true,
    },
    {
      name: 'Tim',
      date: '26 March 2020, at 08:30 AM',
      amount: '+ $ 2,500',
      income: true,
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
      <div className="lg:ml-72 px-6 py-6 mx-auto">
        {/* payment page */}
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 className="mb-0 text-gray-500">Billing Information</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50 dark:bg-slate-850">
                    <div className="flex flex-col">
                      <h6 className="mb-4 text-sm leading-normal text-gray-600">
                        {user?.user.name? user.user.name : "Ethan James"}
                      </h6>
                      <span className="mb-2 text-xs leading-tight text-gray-400">
                        Company Name:{' '}
                        <span className="font-semibold text-slate-700 sm:ml-2">
                          Fiber Notion
                        </span>
                      </span>
                      <span className="mb-2 text-xs leading-tight text-gray-400">
                        Email Address:{' '}
                        <span className="font-semibold text-slate-700 sm:ml-2">
                          ethan@fiber.com
                        </span>
                      </span>
                      <span className="text-xs leading-tight text-gray-400">
                        Post Office Number:{' '}
                        <span className="font-semibold text-slate-700 sm:ml-2">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                    <div className="ml-auto text-right sm:flex">
                      <Link
                        className=" relative z-10 flex px-4 py-2.5 mb-0 font-bold text-center text-red-400 align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text"
                        href="javascript:;"
                      >
                        
                        <span className='text-lg'><RiDeleteBinLine/></span> Delete
                      </Link>
                      <Link
                        className="flex px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700"
                        href="javascript:;"
                      >
                        <span className='text-lg font-semibold'><MdOutlineEdit/></span>
                        Edit
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                    <h6 className="mb-0 text-gray-600">Your Transactions</h6>
                  </div>
                  <div className="flex items-center justify-end max-w-full px-3 text-gray-600 md:w-1/2 md:flex-none">
                    <i className="mr-2 far fa-calendar-alt"></i>
                    <small>23 - 30 March 2020</small>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pt-6">
                <h6 className="mb-4 text-xs font-bold leading-tight uppercase text-slate-500">
                  Newest first
                </h6>
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {/* map through transactions array */}
                  {transactions.slice(0,5).map((transaction, i) => {
                    return (
                      <li
                        key={i}
                        className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl"
                      >
                        <div className="flex items-center">
                          <button
                            className={`leading-pro ease-in text-lg bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-transparent bg-transparent text-center align-middle font-bold uppercase ${
                              transaction.income
                                ? 'text-green-600'
                                : 'text-red-600'
                            }  transition-all hover:opacity-75`}
                          >
                            {transaction.income ? (
                              <BsArrowDownCircle />
                            ) : (
                              <BsArrowUpCircle />
                            )}
                          </button>
                          <div className="flex flex-col">
                            <h6 className="mb-1 text-sm leading-normal capitalize text-slate-700">
                              {transaction.name}
                            </h6>
                            <span className="text-xs leading-tight text-gray-400">
                              {transaction.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <p
                            className={`relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl ${
                              transaction.income
                                ? 'from-green-600 to-green-800'
                                : 'from-red-600 to-orange-600'
                            } bg-clip-text`}
                          >
                            {transaction.amount}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorPayments;
