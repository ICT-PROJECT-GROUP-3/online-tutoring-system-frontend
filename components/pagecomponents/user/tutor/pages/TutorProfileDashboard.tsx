import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { AuthContext } from '../../../../../context/auth/SessionContext';
import TutorNavbar from '../TutorNavbar';
import axios from 'axios';

const TutorProfileDashboard = () => {
  const router = useRouter();
  const pageName = 'Profile';
  const { user } = useContext(AuthContext);
  const toMesseges = () => {
    if (user.user.name.length === 1 || user.user.password.length === 1) return;
    const username = user.user.name;
    const secret = user.user.password;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "ddb24a05-5197-466e-ae42-61d84aee08c0" } }
      )

      .then(() => {
        router.push("/chat");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      <TutorNavbar pageName={pageName} />

      {/* profile dashboard */}

      {/* profile dashboard header */}
      <div className=" lg:ml-72 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -100 }}
          transition={{ ease: 'easeInOut', duration: 0.6 }}
          className="relative w-full mt-40"
        >
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-auto max-w-full px-3">
                <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                  <Image
                    src="/assets/images/profilePic2.png"
                    width={50}
                    height={50}
                    alt="profile_image"
                    className="w-full shadow-2xl rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-none w-auto max-w-full px-3 my-auto">
                <div className="h-full">
                  <h5 className="mb-1 text-gray-600">
                    {user ? user.user.name : 'UserName'}
                  </h5>
                  <p className="mb-0 font-semibold leading-normal text-gray-600 dark:opacity-60 text-sm">
                    {user ? user.user.role : 'role'}
                  </p>
                </div>
              </div>
              <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                <div className="relative right-0">
                  <ul
                    className="relative flex flex-wrap p-1 list-none bg-gray-50 rounded-xl"
                    nav-pills
                    role="tablist"
                  >
                    <li className="z-30 flex-auto text-center">
                      <Link
                        className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                        nav-link
                        href="javascript:;"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="ni ni-app"></i>
                        <span className="ml-2">App</span>
                      </Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <Link
                        className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                        nav-link
                        onClick={() => {
                          toMesseges();
                        }}
                        href="javascript:;"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="ni ni-email-83"></i>
                        <span className="ml-2">Messages</span>
                      </Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <Link
                        className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-colors ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                        nav-link
                        href="javascript:;"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                        <span className="ml-2">Settings</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* edit profile page */}
        <div className="w-full p-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.6 }}
              className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                  <div className="flex items-center">
                    <p className="mb-0 text-gray-500">Edit Profile</p>
                    <button
                      type="button"
                      className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-orange-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      Settings
                    </button>
                  </div>
                </div>
                <div className="flex-auto p-6">
                  <p className="leading-normal uppercase text-gray-500 dark:opacity-60 text-sm mb-3">
                    User Information
                  </p>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value="lucky.jesse"
                          className=" dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value="jesse@example.com"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first name"
                          value="Jesse"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last name"
                          value="Lucky"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

                  <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">
                    Contact Information
                  </p>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          className="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value="New York"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value="United States"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          Postal code
                        </label>
                        <input
                          type="text"
                          name="postal code"
                          value="437300"
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

                  <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">
                    About me
                  </p>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                      <div className="mb-4">
                        <label className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
                          About me
                        </label>
                        <input
                          type="text"
                          name="about me"
                          value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                          className="focus:shadow-warning-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="w-full max-w-full px-3 mt-6 shrink-0 md:w-4/12 md:flex-0 md:mt-0">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <Image
                  height={500}
                  width={500}
                  className="w-full rounded-t-2xl"
                  src="/assets/images/ProfilePic2.png"
                  alt="profile cover image"
                />
                <div className="flex flex-wrap justify-center -mx-3">
                  <div className="w-4/12 max-w-full px-3 flex-0 ">
                    <div className="mb-6 -mt-6 lg:mb-0 lg:-mt-16">
                      <a href="javascript:;">
                        <Image
                          height={500}
                          width={500}
                          className="h-auto max-w-full border-2 border-white border-solid rounded-circle"
                          src="/assets/images/ProfilePic2.png"
                          alt="profile image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-black/12.5 rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      Connect
                    </button>
                    <button
                      type="button"
                      className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      <i className="ni ni-collection text-2.8"></i>
                    </button>
                    <button
                      type="button"
                      className="hidden px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      Message
                    </button>
                    <button
                      type="button"
                      className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                    >
                      <i className="ni ni-email-83 text-2.8"></i>
                    </button>
                  </div>
                </div>

                <div className="flex-auto p-6 pt-0">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 flex-1-0">
                      <div className="flex justify-center">
                        <div className="grid text-center">
                          <span className="font-bold text-gray-600 text-lg">
                            22
                          </span>
                          <span className="leading-normal text-gray-600 text-sm opacity-80">
                            Friends
                          </span>
                        </div>
                        <div className="grid mx-6 text-center">
                          <span className="font-bold text-gray-600 text-lg">
                            10
                          </span>
                          <span className="leading-normal text-gray-600 text-sm opacity-80">
                            Photos
                          </span>
                        </div>
                        <div className="grid text-center">
                          <span className="font-bold text-gray-600 text-lg">
                            89
                          </span>
                          <span className="leading-normal text-gray-600 text-sm opacity-80">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center text-sm">
                    <h5 className="text-gray-600 ">
                      Mark Davis
                      <span className="font-light">, 35</span>
                    </h5>
                    <div className="flex mb-2 text-sm font-semibold leading-relaxed text-gray-600/80 text-slate-700">
                      <i className="mr-2 text-gray-600 ni ni-pin-3">
                        <HiLocationMarker />
                      </i>
                      Bucharest, Romania
                    </div>
                    <div className="flex mt-6 mb-2 text-sm font-semibold leading-relaxed text-gray-600/80 text-slate-700">
                      <i className="mr-2 text-gray-600 ni ni-briefcase-24">
                        <MdWorkOutline />
                      </i>
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div className="flex text-gray-500 text-sm">
                      <i className="mr-2 text-gray-600 ni ni-hat-3">
                        <FaUniversity />
                      </i>
                      University of Computer Science
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorProfileDashboard;
