import PageWrapper from '@/components/shared/PageWrapper';
import Link from 'next/link';
import { useState } from 'react';
import { GiPadlock } from 'react-icons/gi';
import { ImEnvelop, ImFacebook, ImGoogle } from 'react-icons/im';
import { MdSupervisorAccount } from 'react-icons/md';

// Define the component
const Index = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  return (
    // Top level containerConf
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen  py-5 mx-4 pt-5 sm:pt-0 sm:mx-2">
        <main className="flex flex-col items-center justify-center flex-1 px-0 sm:px-20 text-center w-full">
          <div className="bg-white shadow-2xl rounded-2xl flex sm:w-2/3 w-full max-w-4xl flex-col sm:flex-row">
            {/* Left side of the container */}
            <div className="sm:w-3/5 w-full sm:p-5 p-10">
              <div className="text-left font-bold text-gray-400">
                Mphunzitsi{' '}
                <span className="text-orange-500 text-[30px]">.</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-orange-500">
                  Lets Create your account
                </h2>
                <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                  {/* Facebook signup button */}
                  <Link
                    href="#"
                    className=" text-orange-500 border-2 mr-4 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImFacebook className="text-sm" />
                  </Link>
                  {/* Google signup button */}
                  <Link
                    href="#"
                    className=" text-orange-500 mr-4 border-2 border-gray-200 rounded-full p-3 mx-1 "
                  >
                    <ImGoogle className="text-sm" />
                  </Link>
                  {/* signup section */}
                </div>
                <p className="text-orange-500 mb-2"> or </p>
                <p className="text-gray-500 mb-10 sm:mb-8 flex sm:flex-col items-center ">
                  {' '}
                  Use your email account to sign up{' '}
                </p>
                <p className="text-gray-500 mb-3"> Already have an account?</p>
                <div className="flex flex-col items-center">
                  {/* Sign in button */}
                  <Link
                    href="./"
                    className="text-orange-500 border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:w-2/5 w-full bg-orange-500 sm:rounded-tr-2xl rounded-2xl sm:rounded-br-2xl py-6 px-6 ">
              <h2 className="text-3xl text-white font-bold mb-2">
                Please fill your details below
              </h2>
              <div className="border-2 w-10 border-white-600 inline-block mb-2"></div>
              {/* form */}

              <div>
                {/* Name input field */}
                <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <ImEnvelop className="text-gray-300 m-2 " />
                  <input
                    type="text"
                    name="name"
                    placeholder="username"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                  />
                </div>
                {/* Email input field */}
                <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <ImEnvelop className="text-gray-300 m-2 " />
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                  />
                </div>
                {/* Password input field */}
                <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <GiPadlock className="text-gray-300 m-2 " />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                  />

                  <div class="relative inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg
                      class="h-4 text-gray-700"
                      fill="none"
                      onClick={() => setshowPassword(!showPassword)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Password input field */}
                <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <GiPadlock className="text-gray-300 m-2 " />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="confirm password"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                  />
                  <div class="relative inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <svg
                      class="h-4 text-gray-700"
                      fill="none"
                      onClick={() =>
                        setshowConfirmPassword(!showConfirmPassword)
                      }
                      //   className={showPassword ? 'hidden' : 'block'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* tutor or student input field */}
                <div className="bg-gray-100 w-full p-2 flex items-center rounded-lg mb-8">
                  <MdSupervisorAccount className="text-gray-300 m-2 " />
                  <input
                    type="text"
                    name="account type"
                    placeholder="Tutor or Student?"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                    list="cityname"
                  />
                  <datalist
                    id="cityname"
                    className="bg-gray-100 outline-none w-full text-sm text-gray-600"
                  >
                    <option value="Tutor" className="text-orange" />
                    <option value="Student" />
                  </datalist>
                </div>
              </div>

              <Link
                href="#"
                className="text-white border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-600 transition duration-300 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};
export default Index;
